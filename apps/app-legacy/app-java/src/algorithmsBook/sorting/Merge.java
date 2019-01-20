package algorithmsBook.sorting;

import algorithmsBook.helpers.GggHelpers;

public class Merge {
    public static void main(String[] args) {
        Integer[] numbers = {4, 9, 21, 45, 88, 71, 13, 1, 2, 5};
        GggHelpers.PrintIntegerArray("Unsorted List", numbers);
        sort(numbers);
        GggHelpers.PrintIntegerArray("Sorted List", numbers);
    }

    // auxiliary array for merges
    private static Comparable[] aux;

    public static void sort(Comparable[] a) {
        aux = new Comparable[a.length];
        sort(a, 0, a.length - 1);
    }

    private static void sort(Comparable[] a, int lo, int hi) {
        // Sort a[lo..hi].
        if (hi <= lo) return;
        int mid = lo + (hi - lo) / 2;
        // Sort left half.
        sort(a, lo, mid);
        // Sort right half.
        sort(a, mid + 1, hi);
        // Merge results
        InPlaceMerge.merge(a, lo, mid, hi);
    }
}
