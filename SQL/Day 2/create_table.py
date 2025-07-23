import mysql.connector

# MySQL connection details
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="system12"  # add password if set
)

cursor = conn.cursor()

# Create database and table using Python
cursor.execute("CREATE DATABASE IF NOT EXISTS todo_db")
cursor.execute("USE todo_db")

cursor.execute("""
    CREATE TABLE IF NOT EXISTS tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        status VARCHAR(50) DEFAULT 'pending'
    )
""")

print(" Database  created successfully.")

cursor.close()
conn.close()
