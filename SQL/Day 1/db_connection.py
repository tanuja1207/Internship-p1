
import mysql.connector
from db_config import db_config

def getConnection():
    try:
        conn = mysql.connector.connect(**db_config)
        # print(" Connection successful!")
        return conn
    except mysql.connector.Error as err:
        print(" Connection error:", err)
        return None


getConnection()
                                