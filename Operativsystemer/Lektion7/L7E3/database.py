import mysql.connector

class Database:
    # dbConnector is the attribute that allows connection to the database
    def __init__(self):
        self.__db = "testDatabase"
        self.__dbHost = "db"
        self.__dbUser = "root"
        self.__dbPassword = "pass"
        self.__dbConnector = mysql.connector.connect(
            host=self.__dbHost,
            user=self.__dbUser,
            password=self.__dbPassword,
            database=self.__db
        )
        self.__cursor = self.__dbConnector.cursor()

    def createUser(self, user):
        # The function that executes the data recived from the website and commits it to the database
        self.__cursor.execute(
            """
                INSERT INTO users (
                    email,
                    first_name,
                    last_name,
                    user_password,
                    subscription_type,
                    payment_method,
                    birthdate
                ) VALUES ('{}', '{}', '{}', '{}', {}, {}, '{}');
            """.format(
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                user.getPassword(),
                user.getSubscriptionType(),
                user.getPaymentMethod(),
                user.getBirthdate()
            )
        )
        self.__dbConnector.commit()
