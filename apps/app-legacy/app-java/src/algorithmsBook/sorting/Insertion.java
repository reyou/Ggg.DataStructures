package algorithmsBook.sorting;

import algorithmsBook.helpers.GggHelpers;

// Unlike that of selection sort, the running time of insertion
// sort depends on the initial order of the items in the input.
// Insertion sort works well for certain types of nonrandom arrays
// that often arise in practice, even if they are huge.
public class Insertion {
    public static void main(String[] args) {
        String input1 = "OSRTEXAMPLE";
        String[] array1 = GggHelpers.ToStringArray(input1);
        sort(array1);
        GggHelpers.PrintStringArray(array1);
    }

    public static void sort(Comparable[] a) {
        int N = a.length;
        for (int i = 1; i < N; i++) {
            // Insert a[i] among a[i-1], a[i-2], a[i-3]... ..
            for (int j = i; j > 0 && Selection.less(a[j], a[j - 1]); j--) {
                Selection.exch(a, j, j - 1);
            }
        }
    }
}
