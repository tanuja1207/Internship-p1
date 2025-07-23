import mysql.connector
from mysql.connector import IntegrityError
from db_connection import getConnection

def insert_data():
    try:
        conn = getConnection()
        if conn is None:
            return
        cursor = conn.cursor()
        query = "INSERT INTO users (name, email, age) VALUES (%s, %s, %s)"
        data = [
            ("Tanuja", "tanuja6754@gmail.com", 21),
            ("Sanika", "sanika111@gmail.com", 18),
            ("Sneha", "sneha22@gmail.com", 19)
        ]
        cursor.executemany(query, data)
        conn.commit()
        print(" Data inserted!")
    except mysql.connector.IntegrityError as e:
        print(f" Duplicate or constraint error: {e}")
    except Exception as e:
        print(f" Error inserting data: {e}")
    finally:
        if conn:
            cursor.close()
            conn.close()
