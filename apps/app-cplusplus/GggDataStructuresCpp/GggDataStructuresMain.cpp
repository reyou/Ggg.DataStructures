#include "GggDataStructuresMain.h"
#include <iostream>
#include <vector>
#include <string>
#include <fstream>
#include <stdio.h>

// https://www.tutorialspoint.com/cplusplus/cpp_functions.htm
// function declaration
void ArrayFun();
void PointersAndArraysFun();

GggDataStructuresMain::GggDataStructuresMain()
{

}
int main()
{
	PointersAndArraysFun();
	std::string line;
	std::getline(std::cin, line);
	return 0;
}
//=============================================================================
void VectorFun() {
	// C style arrays work in C++ as well.
	// However, C++ provides vectors which is much more powerful than C arrays. 
	// We will be using C++ vectors in most of the problems on this judge.

	// Vector declaration
	// declares an empty integer array of size 0. O(1)
	std::vector<int> V;

	// declares an integer array of size 100 with all elements initialized to 1.
	// O(size)
	std::vector<int> Vq(100, 1);

	// Accessing ith element :
	// O(1)
	Vq[5] = 10;

	// Size(number of elements) of the vector :
	// O(1)
	int vectorSize = Vq.size();

	// Adding element to the vector :
	// new_value will be appended to the vector.  
	// O(1)
	int new_value = 20;
	V.push_back(new_value);

	// Removing element from end of the vector :
	// equivalent to size--; O(1)
	V.pop_back();


}

//=============================================================================
void TwoDArrayFun() {
	int B[2][3];
	int(*p)[3] = B;
	int q = B[0][0];

}
//=============================================================================
void PointersAndArraysFun() {
	int A[] = { 2,4,5,8,1 };
	printf("int A[] = { 2,4,5,8,1 };");
	printf("\n\n");
	int i;
	int *p = A;
	p++;
	// address of first element in the array
	printf("A: %d\n\n", A);
	// address of first element in the array
	printf("&A[0]: %d\n\n", &A[0]);
	// data of first element in the array
	printf("A[0]: %d\n\n", A[0]);
	// data of first element in the array
	printf("*A: %d\n\n", *A);
	//
	printf("\n");
	printf("for (i = 0; i < 5; i++)");
	printf("\n\n");
	for (i = 0; i < 5; i++)
	{
		printf("Address &A[i] = %d\n", &A[i]);
		printf("Address A + 1 = %d\n", A + 1);
		printf("value A[i] = %d\n", A[i]);
		printf("value *(A + 1) = %d\n", *(A + 1));
		printf("\n\n");
	}
}
//=============================================================================
void PointersFun() {
	// char => 1 byte
	// int => 4 bytes
	int A[5];
	int *p = A;
	int *q = &A[0];
}
//=============================================================================
void ArrayFun() {
	int A[5];
	A[0] = 1;
	A[1] = 3;
	A[2] = 4;
	A[3] = 5;
	// A - base address (Address of first element)
	printf("%d\n", A);
	// same as A[0] - value of first element
	printf("%d\n", *A);
	// address of second element
	printf("%d\n", A + 1);
	// same as A[1]
	printf("%d\n", *(A + 1));
}


GggDataStructuresMain::~GggDataStructuresMain()
{

}
