package algorithmsBook.sorting;

import algorithmsBook.helpers.GggHelpers;

public class MergeBU {
    public static void main(String[] args) {
        Integer[] numbers = {4, 9, 21, 45, 88, 71, 13, 1, 2, 5};
        GggHelpers.PrintIntegerArray("Unsorted List", numbers);
        sort(numbers);
        GggHelpers.PrintIntegerArray("Sorted List", numbers);
    }

    // auxiliary array for merges
    private static Comparable[] aux;

    public static void sort(Comparable[] a) {
        // Do lg N passes of pairwise merges.
        int N = a.length;
        aux = new Comparable[N];
        // sz: subarray size
        for (int sz = 1; sz < N; sz = sz + sz) {
            // lo: subarray index
            for (int lo = 0; lo < N - sz; lo += sz + sz) {
                InPlaceMerge.merge(a, lo, lo + sz - 1, Math.min(lo + sz + sz - 1, N - 1));
            }
        }
    }
}
