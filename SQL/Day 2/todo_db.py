import mysql.connector

# Database config
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "system12",  
    "database": "todo_db"
}

# DB connection
def get_connection():
    return mysql.connector.connect(**db_config)

# 1. Add task
def add_task(title, description):
    conn = get_connection()
    cursor = conn.cursor()
    query = "INSERT INTO tasks (title, description) VALUES (%s, %s)"
    cursor.execute(query, (title, description))
    conn.commit()
    print(" Task added!")
    cursor.close()
    conn.close()

# 2. View all tasks
def view_tasks():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM tasks")
    tasks = cursor.fetchall()
    print("\n To-Do List:")
    for task in tasks:
        print(f"ID: {task[0]} | Title: {task[1]} | Description: {task[2]} | Status: {task[3]}")
    cursor.close()
    conn.close()

# 3. Update task
def update_task(task_id, title=None, description=None, status=None):
    conn = get_connection()
    cursor = conn.cursor()
    updates = []
    values = []

    if title:
        updates.append("title = %s")
        values.append(title)
    if description:
        updates.append("description = %s")
        values.append(description)
    if status:
        updates.append("status = %s")
        values.append(status)

    if not updates:
        print(" Nothing to update.")
        return

    values.append(task_id)
    query = f"UPDATE tasks SET {', '.join(updates)} WHERE id = %s"
    cursor.execute(query, tuple(values))
    conn.commit()
    print(" Task updated!")
    cursor.close()
    conn.close()

# 4. Delete task
def delete_task(task_id):
    conn = get_connection()
    cursor = conn.cursor()
    query = "DELETE FROM tasks WHERE id = %s"
    cursor.execute(query, (task_id,))
    conn.commit()
    print("🗑️ Task deleted!")
    cursor.close()
    conn.close()

# CLI Interface
def main():
    while True:
        print("\n===== TO-DO LIST MENU =====")
        print("1. Add Task")
        print("2. View Tasks")
        print("3. Update Task")
        print("4. Delete Task")
        print("5. Exit")

        choice = input("Choose an option (1-5): ")

        if choice == '1':
            title = input("Enter task title: ")
            desc = input("Enter task description: ")
            add_task(title, desc)

        elif choice == '2':
            view_tasks()

        elif choice == '3':
            task_id = int(input("Enter task ID to update: "))
            title = input("New title (leave blank to keep same): ")
            desc = input("New description (leave blank to keep same): ")
            status = input("New status [pending/completed] (leave blank to keep same): ")
            update_task(task_id, title or None, desc or None, status or None)

        elif choice == '4':
            task_id = int(input("Enter task ID to delete: "))
            delete_task(task_id)

        elif choice == '5':
            print(" Exiting To-Do List App. Bye!")
            break

        else:
            print(" Invalid choice. Please try again.")

if __name__ == "__main__":
    main()