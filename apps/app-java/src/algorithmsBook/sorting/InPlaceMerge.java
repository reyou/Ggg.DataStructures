package algorithmsBook.sorting;

import algorithmsBook.helpers.GggHelpers;

public class InPlaceMerge {
    /*This method merges by first copying into the auxiliary array aux[] then merging back to a[] .*/
    public static void main(String[] args) {
        mergeTestSortedNumbers();
        mergeTestRandomNumbers();
    }

    private static void mergeTestRandomNumbers() {
        System.out.println("mergeTestRandomNumbers:");
        int count = 10;
        Integer[] numbers = new Integer[count];
        for (int i = 0; i < count; i++) {
            numbers[i] = GggHelpers.GetRandomNumber(0, 100);
        }
        System.out.println("randomNumbers:");
        GggHelpers.PrintIntegerArray(numbers);
        merge(numbers, 0, numbers.length / 2, numbers.length - 1);
        System.out.println("mergedNumbers:");
        GggHelpers.PrintIntegerArray(numbers);
        System.out.println("\n");
    }

    private static void mergeTestSortedNumbers() {
        System.out.println("mergeTestSortedNumbers:");
        int count = 10;
        Integer[] numbers = new Integer[count];
        for (int i = 0; i < count; i++) {
            numbers[i] = i;
        }
        merge(numbers, 0, numbers.length / 2, numbers.length - 1);
        GggHelpers.PrintIntegerArray(numbers);
        System.out.println("\n");
    }

    public static void merge(Comparable[] a, int lo, int mid, int hi) {
        // Merge a[lo..mid] with a[mid+1..hi].
        int i = lo;
        int j = mid + 1;
        Comparable[] aux = new Comparable[a.length];
        for (int k = lo; k <= hi; k++) {
            // Copy a[lo..hi] to aux[lo..hi].
            aux[k] = a[k];
        }
        /*In the merge (the second for loop), there are four conditions below. */
        for (int k = lo; k <= hi; k++) {
            // Merge back to a[lo..hi].
            // left half exhausted (take from the right)
            if (i > mid) {
                a[k] = aux[j++];

            }
            // right half exhausted (take from the left)
            else if (j > hi) {
                a[k] = aux[i++];
            }
            // current key on right less than current key on left (take from the  right)
            else if (Selection.less(aux[j], aux[i])) {
                a[k] = aux[j++];
            }
            // current key on right greater than or equal to current key on left (take from the left)
            else {
                a[k] = aux[i++];
            }
        }
    }
}
