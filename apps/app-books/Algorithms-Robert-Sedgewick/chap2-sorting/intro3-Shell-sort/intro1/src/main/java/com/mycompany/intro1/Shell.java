/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.intro1;

/**
 *
 * @author dj_re
 */
public class Shell {

    public static void main(String[] args) {
        Comparable[] items1 = {3, 5, 8, 9, 1, 2, 4};
        sort(items1);
        for (Comparable item : items1) {
            System.out.println(item);
        }
    }

    public static void sort(Comparable[] a) {
        // Sort a[] into inreasing order.
        int N = a.length;
        int h = 1;
        while (h < N / 3) {
            // 1, 4, 13, 40, 121, 364 ....
            h = 3 * h + 1;
        }
        while (h >= 1) {
            // h-sort array.
            for (int i = h; i < N; i++) {
                // Insert a[i] among a[i-h], a[i-2*h], a[i-3*h]...
                for (int j = i; j >= h; j -= h) {
                    if (less(a[j], a[j - h])) {
                        exch(a, j, j - h);
                    }

                }
            }
            h = h / 3;
        }
    }

    private static boolean less(Comparable v, Comparable w) {
        return v.compareTo(w) < 0;
    }

    private static void exch(Comparable[] a, int i, int j) {
        Comparable t = a[i];
        a[i] = a[j];
        a[j] = t;
    }

}
