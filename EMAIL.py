from flask import Flask, request, jsonify

app = Flask(__name__)

# Dummy database to store registered emails
registered_emails = set()

@app.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()

    if 'email' not in data:
        return jsonify({'error': 'Email not provided'}), 400

    email = data['email']

    if email in registered_emails:
        return jsonify({'error': 'Email already registered'}), 400

    registered_emails.add(email)
    return jsonify({'message': 'User successfully registered'}), 200

if __name__ == '__main__':
    app.run(debug=True)
