# Write a Python program that:
# Has a secret number (you can hardcode it, e.g., 7).
# Uses a while loop to keep asking the user to guess the number.
# If the user guesses correctly, print "Congratulations! You guessed it right." and break the loop.
# If the guess is wrong, print "Try again!" and keep asking.

# Secret number
secret_number = 12

# Keep asking until the user guesses correctly
while True:
    guess = int(input("Guess the secret number: "))
    
    if guess == secret_number:
        print("Congratulations! You guessed it right.")
        break
    else:
        print("Try again!")
