import psycopg2
import os

def test_db_connection():
    try:
        connection = psycopg2.connect(
            dbname="mydatabase",
            user="user",
            password="password",
            host="db",
            port="5432"
        )
        cursor = connection.cursor()
        cursor.execute("SELECT 1")
        print("Database connection successful.")
        cursor.close()
        connection.close()
    except Exception as e:
        print("Error connecting to the database:", e)

if __name__ == "__main__":
    test_db_connection()
