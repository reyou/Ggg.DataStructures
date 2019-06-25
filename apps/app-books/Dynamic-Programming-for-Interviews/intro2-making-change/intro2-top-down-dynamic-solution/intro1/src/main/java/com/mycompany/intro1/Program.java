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
public class Program {

    public static void main(String[] args) {
        int[] coins = new int[]{10, 6, 1};
        Program program = new Program();
        int makeChange = program.makeChange(coins, 13);
        System.out.println("Make change: " + makeChange);
    }

    // Top down dynamic solution. Cache the values
// as we compute them
    public int makeChange(int[] coins, int target) {
// Initialize cache with values as -1
        int[] cache = new int[target + 1];
        for (int i = 1; i < target + 1; i++) {
            cache[i] = -1;
        }
        return makeChange(coins, target, cache);
    }
// Overloaded recursive function

    private int makeChange(int[] coins, int target, int[] cache) {
// Return the value if it’s in the cache
        if (cache[target] >= 0) {
            return cache[target];
        }
        int minCoins = Integer.MAX_VALUE;
// Find the best coin
        for (int coin : coins) {
            if (target - coin >= 0) {
                int currMinCoins = makeChange(coins, target - coin, cache);
                if (currMinCoins < minCoins) {
                    minCoins = currMinCoins;
                }
            }
        }
// Save the value into the cache
        cache[target] = minCoins + 1;
        return cache[target];
    }

}
