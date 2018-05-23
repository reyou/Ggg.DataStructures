package algorithmsBook.sorting;

import algorithmsBook.bookContent.StdOut;

public class Selection {

    public static void main(String[] args)
    {
        // Read strings from standard input, sort them, and print.
        String input = "Read strings from standard input, sort them, and print.";
        String[] split = input.split(" ");
        String[] a = split;
        sort(a);
        assert isSorted(a);
        show(a);
    }

    public static void sort(Comparable[] a) {
        // Sort a[] into increasing order.
        int N = a.length;
        for (int i = 0; i < N; i++) {
            // Exchange a[i] with smallest entry in a[i+1...N).
            // index of minimal entr.
            int min = i;
            for (int j = i + 1; j < N; j++) {
                if (less(a[j], a[min])) {
                    min = j;
                }
            }
            exch(a, i, min);
        }
    }

    private static void show(Comparable[] a) {
        // Print the array, on a single line.
        for (int i = 0; i < a.length; i++) {
            StdOut.print(a[i] + " ");
        }
        StdOut.println();
    }

    public static boolean isSorted(Comparable[] a) {
        // Test whether the array entries are in order.
        for (int i = 1; i < a.length; i++)
            if (less(a[i], a[i - 1])) {
                return false;
            }
        return true;
    }

    public static void exch(Comparable[] a, int i, int min) {
        Comparable temp = a[i];
        a[i] = a[min];
        a[min] = temp;
    }

    public static boolean less(Comparable v, Comparable w) {
        boolean b = v.toString().toLowerCase().compareTo(w.toString().toLowerCase()) < 0;
        return b;
    }
}
