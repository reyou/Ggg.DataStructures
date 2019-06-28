/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.intro1;

import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author dj_re intro3-iterative-bottom-up-solution
 */
public class Program {

    public static class Item {

        int weight;
        int value;

        public Item(int weight, int value) {
            this.weight = weight;
            this.value = value;
        }
    }

    public static void main(String[] args) {
        Program program = new Program();
        Item[] items = new Item[5];
        items[0] = new Item(2, 10);
        items[1] = new Item(5, 7);
        items[2] = new Item(1, 1);
        items[3] = new Item(7, 13);
        items[4] = new Item(4, 5);
        int target = 13;
        int knapsack = program.knapsack(items, target);
        System.out.println("knapsack result: " + knapsack);
    }

    // Optimized bottom up solution with 1-D cache.
    // Same as before but only save the cache of
    // i-1 and not all values of i
    private int knapsack(Item[] items, int TotalWeight) {
        int[] prevRow = new int[TotalWeight + 1];
        for (Item item : items) {
            int[] currentRow = new int[TotalWeight + 1];
            for (int weight = 0; weight <= TotalWeight; weight++) {
                // skip item
                if (item.weight > weight) {
                    currentRow[weight] = prevRow[weight];
                } else {
                    // compare include - exlude
                    int excluded = prevRow[weight];
                    int included = item.value + prevRow[weight - item.weight];
                    currentRow[weight] = Math.max(excluded, included);
                }
            }
            prevRow = currentRow;
        }
        return prevRow[TotalWeight];
    }

}
