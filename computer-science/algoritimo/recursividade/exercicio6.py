def reverse(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
    return reversed_list

def reverse_recursive(list):
    if len(list) == 1:
        return list
    else:
        return reversed_list(list[1:]) + [list[0]]