# Caesar Cipher

# caesar.py
import string

def caesar(plain_text, shift_num=1):
    letters = string.ascii_lowercase
    mask = letters[shift_num:] + letters[:shift_num]
    trantab = str.maketrans(letters, mask)
    return plain_text.translate(trantab)


# walkthrough

# >>> import string
# >>> x = string.ascii_lowercase
# >>> x
# 'abcdefghijklmnopqrstuvwxyz'
# >>> x[3:]
# 'defghijklmnopqrstuvwxyz'
# >>> x[:3]
# 'abc'