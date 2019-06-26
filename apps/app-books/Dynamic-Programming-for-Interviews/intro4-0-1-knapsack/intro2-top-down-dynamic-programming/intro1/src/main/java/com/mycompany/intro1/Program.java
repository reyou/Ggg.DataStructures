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
 * @author dj_re intro2-top-down-dynamic-programming
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

    // Top down dynamic programming solution.
    // Cache values in a HashMap - the cache may be sparse
    private int knapsack(Item[] items, int W) {
        // Map: i -> W -> value
        Map<Integer, Map<Integer, Integer>> cache = new HashMap<Integer, Map<Integer, Integer>>();
        int counter = 0;
        return knapsack2(items, W, counter, cache);
    }

    // Overloaded recursive function
    private int knapsack2(Item[] items, int W, int counter, Map<Integer, Map<Integer, Integer>> cache) {
        if (counter == items.length) {
            return 0;
        }
        // Check if the value is in the cache
        if (!cache.containsKey(counter)) {
            cache.put(counter, new HashMap<>());
        }
        Integer cached = cache.get(counter).get(W);
        if (cached != null) {
            return cached;
        }
        // Compute the item and add it to the cache
        int toReturn;
        if (W - items[counter].weight < 0) {
            toReturn = knapsack2(items, W, counter + 1, cache);
        } else {
            // include
            int result1 = knapsack2(items, W - items[counter].weight, counter + 1, cache) + items[counter].value;
            // exlude
            int result2 = knapsack2(items, W, counter + 1, cache);
            toReturn = Math.max(result1, result2);
        }
        cache.get(counter).put(W, toReturn);
        return toReturn;
    }
}
