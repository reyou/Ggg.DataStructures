// https://www.geeksforgeeks.org/print-all-possible-combinations-of-r-elements-in-a-given-array-of-size-n/
package TheAlgorithmDesignManual.AaaIntroduction;

// Java program to print all combination of size r in an array of size n

import java.io.*;

class Permutation2 {
    /*Driver function to check for above function*/
    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4, 5};
        int r = 3;
        int n = arr.length;
        printCombination(arr, n, r);
    }

    // The main function that prints all combinations of size r
    // in arr[] of size n. This function mainly uses combinationUtil()
    static void printCombination(int arr[], int n, int r) {
        // A temporary array to store all combination one by one
        int subset[] = new int[r];

        // Print all combination using temprary array 'data[]'
        combinationUtil(arr, n, r, 0, subset, 0);
    }

    /* arr[]  ---> Input Array
    data[] ---> Temporary array to store current combination
    start & end ---> Staring and Ending indexes in arr[]
    index  ---> Current index in data[]
    r ---> Size of a combination to be printed */
    static void combinationUtil(int arr[], int arrLength, int sizeOfSubset, int currentIndexInSubset,
                                int subset[], int arrayIndex) {
        // Current combination is ready to be printed, print it
        if (currentIndexInSubset == sizeOfSubset) {
            for (int j = 0; j < sizeOfSubset; j++)
                System.out.print(subset[j] + " ");
            System.out.println("");
            return;
        }

        // When no more elements are there to put in data[]
        if (arrayIndex >= arrLength)
            return;

        // current is included, put next at next location
        subset[currentIndexInSubset] = arr[arrayIndex];
        combinationUtil(arr, arrLength, sizeOfSubset, currentIndexInSubset + 1, subset, arrayIndex + 1);

        // current is excluded, replace it with next (Note that
        // i+1 is passed, but index is not changed)
        combinationUtil(arr, arrLength, sizeOfSubset, currentIndexInSubset, subset, arrayIndex + 1);
    }


}
/* This code is contributed by Devesh Agrawal */