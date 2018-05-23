//=============================================================================
// Implement two stacks in an array (LIFO)
// http://www.geeksforgeeks.org/implement-two-stacks-in-an-array/
// https://www.youtube.com/watch?v=BjODIZvW4no
/*
Create a data structure twoStacks that represents two stacks. Implementation 
of twoStacks should use only one array, i.e., both stacks should use the same 
array for storing elements. Following functions must be supported by twoStacks.
push1(int x) –> pushes x to first stack
push2(int x) –> pushes x to second stack
pop1() –> pops an element from first stack and return the popped element
pop2() –> pops an element from second stack and return the popped element
Implementation of twoStack should be space efficient.
*/
// method 1: divide the space in two halves 
// The problem with this method is inefficient use of array space.
// method 2: A space efficent implementation
// The idea is to start two stacks from two extreme corners of arr[].