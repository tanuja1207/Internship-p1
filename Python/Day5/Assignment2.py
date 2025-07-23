balance = 10000  # Initial balance

def show_menu():
    print("\n===== ATM MENU =====")
    print("1. Check Balance")
    print("2. Deposit")
    print("3. Withdraw")
    print("4. Exit")

while True:
    try:
        show_menu()
        choice = int(input("Enter your choice (1-4): "))
        
        if choice == 1:
            print(f" Your current balance is: ₹{balance}")

        elif choice == 2:
            amount = float(input("Enter amount to deposit: ₹"))
            if amount <= 0:
                raise ValueError("Amount must be greater than 0.")
            balance += amount
            print(f" ₹{amount} deposited successfully.")

        elif choice == 3:
            amount = float(input("Enter amount to withdraw: ₹"))
            if amount <= 0:
                raise ValueError("Amount must be greater than 0.")
            if amount > balance:
                raise Exception("Insufficient balance.")
            balance -= amount
            print(f" ₹{amount} withdrawn successfully.")

        elif choice == 4:
            print(" Thank you for using our ATM. Goodbye!")
            break

        else:
            print(" Invalid choice. Please select between 1 to 4.")

    except ValueError as ve:
        print(" Value Error:", ve)
    except Exception as e:
        print(" Error:", e)
    finally:
        print(" Transaction completed.")
