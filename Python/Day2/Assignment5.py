# Tuple Unpacking & Conversion
# Write a Python program that:
# Takes a tuple of (product, price, quantity)
# Unpacks it into separate variables
# Calculates total cost (price × quantity)
# Converts the tuple to a list to modify quantity
# Converts back to tuple and prints all values

#  Create a tuple of (product, price, quantity)
product_info = ("Laptop", 50000, 2)

#  Unpack the tuple into separate variables
product, price, quantity = product_info

#  Calculate total cost
total_cost = price * quantity
print(f"Total cost for {quantity} {product}(s): ₹{total_cost}")

#  Convert the tuple to a list to modify quantity
product_list = list(product_info)
product_list[2] = 3  # Update quantity from 2 to 3

#  Convert the list back to a tuple
updated_product_info = tuple(product_list)

#  Print all values
print("Updated product info:")
print("Product:", updated_product_info[0])
print("Price:", updated_product_info[1])
print("Quantity:", updated_product_info[2])

#  Recalculate total cost with updated quantity
new_total = updated_product_info[1] * updated_product_info[2]
print(f"New total cost: ₹{new_total}")
