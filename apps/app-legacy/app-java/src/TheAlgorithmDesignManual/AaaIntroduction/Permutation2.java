// https://www.geeksforgeeks.org/print-all-possible-combinations-of-r-elements-in-a-given-array-of-size-n/
package TheAlgorithmDesignManual.AaaIntroduction;

// Java program to print all combination of size r in an array of size n

import java.io.*;

class Permutation2 {
    /*Driver function to check for above function*/
    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4, 5};
        int subsetSize = 3;
        int allDataSize = arr.length;
        printCombination(arr, allDataSize, subsetSize);
    }

    // The main function that prints all combinations of size r
    // in arr[] of size n. This function mainly uses combinationUtil()
    static void printCombination(int arr[], int allDataSize, int subsetSize) {
        // A temporary array to store all combination one by one
        int subset[] = new int[subsetSize];

        // Print all combination using temprary array 'data[]'
        combinationUtil(arr, allDataSize, subsetSize, 0, subset, 0);
    }

    /* arr[]  ---> Input Array
    data[] ---> Temporary array to store current combination
    start & end ---> Staring and Ending indexes in arr[]
    index  ---> Current index in data[]
    r ---> Size of a combination to be printed */
    static void combinationUtil(int allData[], int allDataSize, int subsetSize, int currentIndexInSubset,
                                int subset[], int allDataIndex) {
        // Current combination is ready to be printed, print it
        if (currentIndexInSubset == subsetSize) {
            for (int j = 0; j < subsetSize; j++)
                System.out.print(subset[j] + " ");
            System.out.println("");
            return;
        }

        // When no more elements are there to put in data[]
        if (allDataIndex >= allDataSize)
            return;

        // current is included, put next at next location
        subset[currentIndexInSubset] = allData[allDataIndex];
        combinationUtil(allData, allDataSize, subsetSize, currentIndexInSubset + 1, subset, allDataIndex + 1);

        // current is excluded, replace it with next (Note that
        // i+1 is passed, but index is not changed)
        combinationUtil(allData, allDataSize, subsetSize, currentIndexInSubset, subset, allDataIndex + 1);
    }


}
/* This code is contributed by Devesh Agrawal */