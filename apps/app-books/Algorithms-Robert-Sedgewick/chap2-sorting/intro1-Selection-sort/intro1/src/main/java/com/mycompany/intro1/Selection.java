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
public class Selection {

    public static void main(String[] args) {
        Comparable[] items1 = {3, 5, 8, 9, 1, 2, 4};
        sort(items1);
        for (Comparable item : items1) {
            System.out.println(item);
        }
    }

    public static void sort(Comparable[] a) {
        // Sort a[] into increasing order.
        int N = a.length;
        for (int i = 0; i < N; i++) {
            // Exchange a[i] with smallest entry in a[i+1....N]
            int min = i;
            for (int j = i + 1; j < N; j++) {
                if (less(a[j], a[min])) {
                    min = j;
                }
            }
            exch(a, i, min);
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
