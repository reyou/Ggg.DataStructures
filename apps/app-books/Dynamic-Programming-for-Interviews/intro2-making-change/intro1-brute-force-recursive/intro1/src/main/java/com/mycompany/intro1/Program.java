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

    public int makeChange(int[] coins, int c) {
        if (c == 0) {
            return 0;
        }
        int minCoins = Integer.MAX_VALUE;
        // Try removing each coin from the total and
        // see how many more coins are required
        for (int coin : coins) {
            // Skip a coin if it's value is greater
            // than the amount remaining
            if (c - coin >= 0) {
                int currMinCoins = makeChange(coins, c - coin);
                if (currMinCoins < minCoins) {
                    minCoins = currMinCoins;
                }
            }
        }
        // Add back the coin removed recursively
        return minCoins + 1;
    }

}
