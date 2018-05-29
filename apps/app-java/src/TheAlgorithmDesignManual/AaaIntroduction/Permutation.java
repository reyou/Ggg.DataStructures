package TheAlgorithmDesignManual.AaaIntroduction;

// https://www.geeksforgeeks.org/print-all-possible-combinations-of-r-elements-in-a-given-array-of-size-n/
public class Permutation {
    /* arr[]  ---> Input Array
    data[] ---> Temporary array to store current combination
    start & end ---> Staring and Ending indexes in arr[]
    index  ---> Current index in data[]
    r ---> Size of a combination to be printed */
    /*Driver function to check for above function*/
    public static void main(String[] args) {
        int allData[] = {1, 2, 3, 4, 5};
        int subsetSize = 3;
        int allDataSize = allData.length;
        printCombination(allData, allDataSize, subsetSize);
    }

    // The main function that prints all combinations of size r
    // int arr[] of size n. This functions mainly uses combinationUtil()
    private static void printCombination(int[] allData, int allDataSize, int subsetSize) {
        // A temporary array to store all combination one by one
        int subset[] = new int[subsetSize];
        // Print all combination using temporary array 'data[]'
        printCombinationUtil(allData, subset, 0, allDataSize - 1, 0, subsetSize);
    }

    private static void printCombinationUtil(int[] allData, int[] subset,
                                             int allDataStartIndex, int allDataEndIndex, int subsetIndex, int subsetSize) {
        // Current combination is ready to be printed, print it
        if (subsetIndex == subsetSize) {
            for (int j = 0; j < subsetSize; j++) {
                System.out.print(subset[j] + " ");
            }
            System.out.println("");
            return;
        }

        // replace index with all possible elements. The condition
        // "end-i+1 > r-index" makes sure that including one element
        // at index will make a combination with remaining elements
        // at remaining positions
        for (int i = allDataStartIndex; i <= allDataEndIndex && allDataEndIndex - i + 1 >= subsetSize - subsetIndex; i++) {
            subset[subsetIndex] = allData[i];
            printCombinationUtil(allData, subset, i + 1, allDataEndIndex, subsetIndex + 1, subsetSize);
        }
    }
}
