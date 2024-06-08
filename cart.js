// cart.js (for cart.html)
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.querySelector('.add-to-cart');
    if (!addToCartButton) return;

    const productIdInput = document.getElementById('product_id');
    const quantityInput = document.getElementById('quantity');

    addToCartButton.addEventListener('click', async function () {
        let url = '/products/' + productIdInput.value + '/in_cart';
        let data = {
            quantity: quantityInput.value,
        };

        try {
            await axios.post(url, data);
            alert("商品をカートに追加しました");
        } catch (error) {
            console.log(error);
        }
    });
    displayCart();
});
    displayCart();

function displayCart() {
    const requestOptions = {method: 'GET'};
    fetch('/carts', requestOptions)
        .then((response) => response.json())
        .then(displayProductsInCart)
        .catch((error) => {
            console.log('Error:', error);
        });
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify(cart));

    var output = "";
    for (let i in cart){ 
        output += "<tr><td>"+cart[i].name+"</td>";
        output += '<td><button class="remove" id='+i+' onclick=removeFromCart('+i+')>削除</button></td>';
        output += "</tr>\n";
    for (let i = 0; i < cart.length; i++) {
        document.getElementById('items').innerHTML += output;
        output += `
        <div class="card">
          <h5 class="card-header">${cart[i].name}</h5>
          <div class="card-body">
            <p class="card-text">Price: $${cart[i].price}</p>
          </div>
        </div><br>`;
    }

    // Display cart contents
    document.getElementById('cartContents').innerHTML = output;
}}
