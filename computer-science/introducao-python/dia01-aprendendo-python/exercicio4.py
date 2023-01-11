def exercicio4 (listadestrings):
    maiorpalavra = ''
    for string in listadestrings:
        if len(string) > len(maiorpalavra):
            maiorpalavra = string
    return maiorpalavra

print(exercicio4(['a', 'ab', 'abc', 'abcd', 'abcde']))
print(exercicio4(['abcde', 'abcd', 'abc', 'ab', 'a']))
print(exercicio4(['a', 'abcde', 'abcd', 'abc', 'ab']))

