from flask import Flask
from flask import render_template, url_for, request
from user import User
from database import Database

app = Flask(__name__)

database = Database()

@app.route("/")
def signUp():
    return render_template('signUp.html')

@app.route("/api/users", methods=['POST'])
def apiUsers():
    # Take the JSON from the website and then makes it readable in a python dictionary
    requestData = request.get_json()

    firstName = requestData["firstName"]
    lastName = requestData["lastName"]
    email = requestData["email"]
    password = requestData["password"]
    passwordRetype = requestData["passwordRetype"]
    birthdate = requestData["birthdate"]
    subscriptionType = requestData["subscriptionType"]
    cardName = requestData["cardName"]
    cardNumber = requestData["cardNumber"]
    cardExpirationMonth = requestData["cardExpirationMonth"]
    cardExpirationYear = requestData["cardExpirationYear"]
    cardCvv = requestData["cardCvv"]
# takes the information and makes it into a python object
    user = User(
        firstName,
        lastName,
        email,
        password,
        passwordRetype,
        birthdate,
        subscriptionType,
        cardName,
        cardNumber,
        cardExpirationMonth,
        cardExpirationYear,
        cardCvv
    )
    database.createUser(user)
    return ('', 201)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
