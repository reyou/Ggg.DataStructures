/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.intro1;

/**
 *
 * @author dj_re \intro4-0-1-knapsack\intro1-brute-force
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

    // Naive brute force solution. Recursively
    // include or exlude each item to try every
    // possible combination
    private int knapsack(Item[] items, int W) {
        return knapsack2(items, W, 0);
    }

    // Overloaded recursive function
    private int knapsack2(Item[] items, int W, int counter) {
        // If we've gone through all the items, return
        if (counter == items.length) {
            return 0;
        }
        // If the item is too big to fill the 
        // remaining space, skip it
        if (W - items[counter].weight < 0) {
            return knapsack2(items, W, counter + 1);
        }

        // Find the maximum of including and not
        // including the current item
        // include
        int result1 = knapsack2(items, W - items[counter].weight, counter + 1) + items[counter].value;
        // exlude
        int result2 = knapsack2(items, W, counter + 1);
        return Math.max(result1, result2);
    }
}
