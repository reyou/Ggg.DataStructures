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
public class ProgramWithLogs {

    public static class Item {

        int weight;
        int value;

        public Item(int weight, int value) {
            this.weight = weight;
            this.value = value;
        }
    }

    public static void main(String[] args) {
        ProgramWithLogs program = new ProgramWithLogs();
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
        System.out.println("Function called with: "
                + " counter: " + counter
                + " weight: " + W
                + " cacheSize: " + cache.size());
        if (counter == items.length) {
            System.out.println("Counter is out of border." + " counter: " + counter);
            return 0;
        }
        // Check if the value is in the cache
        if (!cache.containsKey(counter)) {
            System.out.println("Cache does not have key (counter): " + counter);
            cache.put(counter, new HashMap<>());
        }
        System.out.println("Checking if cache(key/counter) exists with Weight.");
        System.out.println("Counter: " + counter);
        System.out.println("W: " + W);
        System.out.println("Result: " + cache.get(counter).get(W));
        Integer cached = cache.get(counter).get(W);
        if (cached != null) {
            System.out.println("Cache found. Return cached value.");
            System.out.println("cached: " + cached);
            return cached;
        }
        // Compute the item and add it to the cache
        int toReturn;
        System.out.println("Checking if we remove current counter weight, if it goes below the zero(0).");
        System.out.println("W - items[counter].weight < 0");
        System.out.println("Weight: " + W);
        System.out.println("items[counter].weight: " + items[counter].weight);
        System.out.println("items[counter].value: " + items[counter].value);
        if (W - items[counter].weight < 0) {
            System.out.println("It goes below the zero. Then just use same Weight but increase the counter.");
            System.out.println("Weight: " + W);
            System.out.println("Counter: " + counter);
            toReturn = knapsack2(items, W, counter + 1, cache);
        } else {
            System.out.println("We still have balance. Check 2 branching decision here.");
            System.out.println("First check what if we include current weight.");
            System.out.println("Current weight: " + items[counter]);
            System.out.println("Calling include:");
            System.out.println("Weight: " + W);
            System.out.println("Counter (will increase): " + counter);
            // include
            int result1 = knapsack2(items, W - items[counter].weight, counter + 1, cache) + items[counter].value;
            System.out.println("Calling exclude:");
            System.out.println("Weight: " + W);
            System.out.println("Counter (will increase): " + counter);
            // exlude
            int result2 = knapsack2(items, W, counter + 1, cache);
            System.out.println("We got results from 2 branches:");
            System.out.println("result1: " + result1);
            System.out.println("result2: " + result2);
            toReturn = Math.max(result1, result2);
        }
        System.out.println("We reached the target. Setting the cache.");
        System.out.println("counter: " + counter);
        System.out.println("Weight: " + W);
        System.out.println("toReturn (max): " + toReturn);
        cache.get(counter).put(W, toReturn);
        return toReturn;
    }
}
