def validate_email(email):
    username, domain = email.split("@")
    extension = domain.split(".")[-1]
    website = domain.split(".")[0]
    print(username, website, extension)
    if not 1 < len(username) <= 30:
        raise ValueError("Username with invalid length")
    if not username[0].isalpha():
        raise ValueError("Username doesn't start with letter")
    for letter in username:
        if not letter.isalnum() and letter not in "-_":
            raise ValueError("Invalid character")
    if not 1<len(website) <= 30:
        raise ValueError("Website with invalid length")
    for letter in website:
        if not letter.isalnum():
            raise ValueError("Website with Invalid character")
    if not len(extension) == 3:
        raise ValueError("Extension with invalid length")
    for letter in extension:
        if not letter.isalpha():
            raise ValueError("Extension with Invalid character")
    return True

print (validate_email("s1_hhd@um.com"))