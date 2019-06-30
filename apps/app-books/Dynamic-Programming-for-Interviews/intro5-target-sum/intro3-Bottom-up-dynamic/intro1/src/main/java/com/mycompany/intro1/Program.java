/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.intro1;

/**
 *
 * @author dj_re intro3-Bottom-up-dynamic
 */
public class Program {

    public static void main(String[] args) {
        Program program = new Program();
        int[] nums = new int[]{1, 1, 1, 1, 1};
        int target = 3;
        int result = program.targetSum(nums, target);
        System.out.println("Number of ways: " + result);
    }

    private int targetSum(int[] nums, int target) {
        int sum = 0;
        // Our cache has to range from -sum(nums) to
        // sum(nums), so we offset everything by sum
        for (int num : nums) {
            sum += num;
        }
        int[][] cache = new int[nums.length + 1][2 * sum + 1];
        if (sum == 0) {
            return 0;
        }
        cache[0][sum] = 1;
        // Initialize over previous row and update the
        // current row
        for (int row = 1; row <= nums.length; row++) {
            for (int col = 0; col < 2 * sum + 1; col++) {
                int prev = cache[row - 1][col];
                if (prev != 0) {
                    // include
                    cache[row][col - nums[row - 1]] += prev;
                    // exlude
                    cache[row][col + nums[row - 1]] += prev;
                }
            }
        }
        return cache[nums.length][sum + target];
    }

}
