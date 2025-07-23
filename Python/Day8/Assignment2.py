# Abstraction
# 1. Import ABC and abstractmethod from abc.
# * Create an abstract class PaymentMethod with an abstract method pay(amount).
# * Create two child classes: CreditCard and UPI, each implementing their version of pay().
# * Instantiate each class and call pay() to show different payment methods.

from abc import ABC, abstractmethod

# 1. Abstract base class
class PaymentMethod(ABC):

    @abstractmethod
    def pay(self, amount):
        pass

# 2. Concrete class: CreditCard
class CreditCard(PaymentMethod):
    def pay(self, amount):
        print(f"Paid ₹{amount} using Credit Card.")

# 3. Concrete class: UPI
class UPI(PaymentMethod):
    def pay(self, amount):
        print(f"Paid ₹{amount} using UPI.")

# 4. Instantiate and demonstrate abstraction
payments = [
    CreditCard(),
    UPI()
]

for method in payments:
    method.pay(500)
