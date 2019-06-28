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
        Program program = new Program();
        int[] nums = new int[]{1, 1, 1, 1, 1};
        int target = 3;
        int result = program.targetSum(nums, target);
        System.out.println("Number of ways: " + result);
    }

    // Naive brute force solution. Find every combo
    private int targetSum(int[] nums, int target) {
        int counter = 0;
        int sum = 0;
        return targetSum(nums, target, counter, sum);
    }

    // Overloaded recursive function
    private int targetSum(int[] nums, int target, int counter, int sum) {
        // When we've gone through every item, see 
        // if we've reached our target sum
        if (counter == nums.length) {
            if (sum == target) {
                return 1;
            }
            return 0;
        }
        // Combine the possibilites by adding and
        // subtracting the current value
        int include = targetSum(nums, target, counter + 1, sum + nums[counter]);
        int exclude = targetSum(nums, target, counter + 1, sum - nums[counter]);
        int result = include + exclude;
        return result;
    }
}
