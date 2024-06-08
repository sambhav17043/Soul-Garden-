const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');   
    })
}

if(nav){
    nav.addEventListener('click', () => {
        nav.classList.remove('active');   
    })
}


// This script should be placed at the end of the body tag, or use the "defer" attribute in the script tag.

// JavaScript
document.getElementById('read-more-button-1').addEventListener('click', function() {
    toggleHiddenContent('hidden-content-1');
});

document.getElementById('read-button-2').addEventListener('click', function() {
    toggleHiddenContent('hidden-content-2');
});

function toggleHiddenContent(contentId) {
    const hiddenContent = document.getElementById(contentId);

    // Toggle the visibility of the hidden content
    if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
        hiddenContent.style.display = 'block';
    } else {
        hiddenContent.style.display = 'none';
    }
}

// Add 'active' class to #banner when the page loads
window.onload = function() {
    document.getElementById('banner').classList.add('active');
};

// Add 'active' class to #product1 when the page loads
window.onload = function() {
    document.getElementById('product1').classList.add('active');
};


//code for add to cart//
function addToCart() {
    var productName = document.querySelector('.single-pro-details h4').innerText;
    var productPrice = document.querySelector('.single-pro-details h2').innerText;
    var selectedSize = document.querySelector('.single-pro-details select').value;
    var quantity = document.querySelector('.single-pro-details input[type="number"]').value;

    // Construct the URL with query parameters
    var url = 'cart.html';
    url += '?productName=' + encodeURIComponent(productName);
    url += '&productPrice=' + encodeURIComponent(productPrice);
    url += '&selectedSize=' + encodeURIComponent(selectedSize);
    url += '&quantity=' + encodeURIComponent(quantity);

    // Redirect to cart.html with the product details in the URL
    window.location.href = url;
}

// Get the query parameters from the URL
var params = new URLSearchParams(window.location.search);
var productName = params.get('productName');
var productPrice = params.get('productPrice');
var selectedSize = params.get('selectedSize');
var quantity = params.get('quantity');

// Display the product details in the cart page
document.getElementById('productName').innerText = productName;
document.getElementById('productPrice').innerText = productPrice;
document.getElementById('selectedSize').innerText = selectedSize;
document.getElementById('quantity').innerText = quantity;









