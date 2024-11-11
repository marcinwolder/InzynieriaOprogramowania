import mysql.connector
from mysql.connector import Error
import time

host = "localhost"
port = 3306
user = "user"
password = "password"
database = "inzynieriaoprogramowania-db-1"

#winpty docker exec -it inzynieriaoprogramowania-db-1 mysql -u user -p

try:
    connection = mysql.connector.connect(
        host=host,
        port=port,
        user=user,
        password=password,
    )
    
    if connection.is_connected():
        print("Połączono z bazą danych!")
    else:
        print("Błąd połączenia z bazą danych.")
except Error as e:
    print(f"Błąd połączenia z bazą danych: {e}")
finally:
    if 'connection' in locals() and connection.is_connected():
        connection.close()
        print("Połączenie z bazą danych zostało zamknięte.")

def insert_record():
    try:
        connection = mysql.connector.connect(
            host=host,
            port=port,
            user=user,
            password=password,
            database=database
        )
        cursor = connection.cursor()

        insert_query = "INSERT INTO test_table (name, age) VALUES (%s, %s)"
        record = ("Marcin Cinek", 2115)

        cursor.execute(insert_query, record)
        connection.commit()
        print("Record inserted successfully.")

    except mysql.connector.Error as err:
        print(f"Error: {err}")
    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()

def fetch_records():
    try:
        connection = mysql.connector.connect(
            host=host,
            port=port,
            user=user,
            password=password,
            database=database
        )        
        cursor = connection.cursor()

        select_query = "SELECT * FROM test_table"
        cursor.execute(select_query)

        records = cursor.fetchall()
        print("Records in database:")
        for row in records:
            print(row)

    except mysql.connector.Error as err:
        print(f"Error: {err}")
    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()

if __name__ == "__main__":
    connection = mysql.connector.connect(
        host=host,
        port=port,
        user=user,
        password=password,
        database=database
        )
    cursor = connection.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS test_table (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100),
            age INT
        )
    """)
    connection.commit()
    cursor.close()
    connection.close()

    insert_record()

    time.sleep(2)

    fetch_records()
