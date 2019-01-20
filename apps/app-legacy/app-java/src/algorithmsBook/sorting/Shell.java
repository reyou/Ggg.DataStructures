package algorithmsBook.sorting;

import algorithmsBook.helpers.GggHelpers;

/* Shellsort is a simple extension of insertion sort that gains
speed by allowing exchanges of array entries that are far apart,
to produce partially sorted arrays that can be efficiently sorted,
eventually by insertion sort.*/
public class Shell {

    public static void main(String[] args) {
        String input1 = "OSRTEXAMPLE";
        String[] array1 = GggHelpers.ToStringArray(input1);
        sort(array1);
        GggHelpers.PrintStringArray(array1);
    }

    public static void sort(Comparable[] a) {
        // Sort a[] into increasing order.
        int N = a.length;
        int h = 1;
        while (h < N / 3) {
            // 1, 4, 13, 40, 121, 364, 1093, ...
            h = 3 * h + 1;
        }
        while (h >= 1) {
            // h-sort the array.
            for (int i = h; i < N; i++) {
                // Insert a[i] among a[i-h], a[i-2*h], a[i-3*h]... .
                for (int j = i; j >= h && Selection.less(a[j], a[j - h]); j -= h) {
                    Selection.exch(a, j, j - h);
                }
            }
            h = h / 3;
        }
    }
}
