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

    // Iterative bottom up solution
    private int knapsack(Item[] items, int W) {
        // Initialize cache
        // cell values will be 0 by default
        int[][] cache = new int[items.length + 1][W + 1];
        // For each item and weight, compute the max
        // value of the items up to that item that
        // doesn't go over W weight
        for (int itemCounter = 1; itemCounter <= items.length; itemCounter++) {
            for (int weightCounter = 0; weightCounter <= W; weightCounter++) {
                if (items[itemCounter - 1].weight > weightCounter) {
                    // TOO HEAVY!
                    // exclude, take from top, move on
                    cache[itemCounter][weightCounter] = cache[itemCounter - 1][weightCounter];
                } else {
                    // MORE SPACE in the BAG!
                    // include
                    int exclude = cache[itemCounter - 1][weightCounter];
                    int include = items[itemCounter - 1].value + cache[itemCounter - 1][weightCounter - items[itemCounter - 1].weight];
                    cache[itemCounter][weightCounter] = Math.max(exclude, include);
                }
            }
        }
        return cache[items.length][W];
    }

}
