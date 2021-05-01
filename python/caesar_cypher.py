# Caesar Cipher Redux
Solution 1
# caesar.py
import string

def shift_n(letter, amount):
    if letter not in string.ascii_lowercase:
        return letter
    new_letter = ord(letter) + amount
    while new_letter > ord("z"):
        new_letter -= 26
    while new_letter < ord("a"):
        new_letter += 26
    return chr(new_letter)

def caesar(message, amount):
    enc_list = [shift_n(letter, amount) for letter in message]
    return "".join(enc_list)

Solution 2  
# caesar.py
import string

def shift_n(letter, table):
    try:
        index = string.ascii_lowercase.index(letter)
        return table[index]
    except ValueError:
        return letter

def caesar(message, amount):
    amount = amount % 26
    table = string.ascii_lowercase[amount:] + string.ascii_lowercase[:amount]
    enc_list = [shift_n(letter, table) for letter in message]
    return "".join(enc_list)