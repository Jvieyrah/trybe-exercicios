import pytest # importamos a biblioteca pytest
@pytest.fixture

def get_list_of_return_list_of_numbers():
    assert get_list_of(2) == [1,2]

def get_list_of_divizible_by_three_should_be_frizz():
    assert get_list_of(3) == [1,2,"Fizz"]

def get_list_of_divizible_by_five_should_be_buzz():
    assert get_list_of(5) == [1,2,"Fizz",4,"Buzz"]

def get_list_of_divizible_by_three_and_five_should_be_frizzbuzz():
    assert get_list_of(15) == [1,2  ,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]