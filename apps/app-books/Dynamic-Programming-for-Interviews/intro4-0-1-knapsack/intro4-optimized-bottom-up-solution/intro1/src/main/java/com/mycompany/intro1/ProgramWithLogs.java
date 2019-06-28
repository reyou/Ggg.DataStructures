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

    // Optimized bottom up solution with 1D cache.
    // Same as before but only save the cache of
    // i-1 and not all values of i
    private int knapsack(Item[] items, int W) {
        System.out.println("Program started:");
        System.out.println("items: " + items);
        System.out.println("W: " + W);        
        int[] cache = new int[W + 1];        
        System.out.println("Create Cache: " + cache.length);
        System.out.println("Loop for all items: " + items.length);
        for (Item item : items) {            
            System.out.println("item.weight: " + item.weight);            
            System.out.println("item.value: " + item.value);            
            int[] newCache = new int[W + 1];
            System.out.println("Create New Cache: " + newCache.length);
            System.out.println("Loop for all possible weights: " + W);
            for (int weight = 0; weight <= W; weight++) {
                System.out.println("weight: " + weight);     
                // skip item
                if (item.weight > weight) {
                    System.out.println("skip this item (item.weight > weight): " + (item.weight > weight)); 
                    System.out.println("item.weight: " + item.weight);
                    System.out.println("weight: " + weight);
                    newCache[weight] = cache[weight];
                } else {
                    System.out.println("compare include - exlude"); 
                    // compare include - exlude
                    int excluded = cache[weight];
                    int included = item.value + cache[weight - item.weight];        
                    System.out.println("excluded: " + excluded);
                    System.out.println("included: " + included);
                    newCache[weight] = Math.max(excluded, included);
                    System.out.println("newCache[weight]: " + newCache[weight]);
                    System.out.println("weight: " + weight);
                }
            }
            System.out.println("assign newCache -> cache: " + newCache.length);
            cache = newCache;
        }
        System.out.println("return result (cache[W]): " + cache[W]);
        return cache[W];
    }

}
