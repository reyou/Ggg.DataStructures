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

    private int makeChange(int[] coins, int target) {
        int[] cache = new int[target + 1];
        for (int i = 1; i <= target; i++) {
            int minCoins = Integer.MAX_VALUE;
            // Try removing each coin from the total
            // and see which requires the fewest
            // extra coins
            for (int coin : coins) {
                if (i - coin >= 0) {
                    int currCoins = cache[i - coin] + 1;
                    minCoins = Math.min(minCoins, currCoins);
                }
            }
            cache[i] = minCoins;
        }
        return cache[target];
    }

}
