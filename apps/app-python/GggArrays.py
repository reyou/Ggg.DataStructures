# ==============================================================================
# https://www.interviewbit.com/courses/programming/topics/arrays/
# ==============================================================================
# Python too has multiple ways of representing arrays. lists are used
# primarily for the purpose. In few cases, tuples are used when we desire
# the array to be immutable ( its desired that no one can change the content
# of the array ).
# ==============================================================================
def arrayFun():
    # list declaration
    # declares an empty list.
    # O(1)
    A = [10];
    # Accessing the ith element
    # O(1)
    i = 0;
    A[i] = 5;
    # Adding element to the list :
    # O(1)
    newValue = 5;
    A.append(newValue);
    # Size of the list
    # O(1)
    len(A)
    print(A)

arrayFun()
