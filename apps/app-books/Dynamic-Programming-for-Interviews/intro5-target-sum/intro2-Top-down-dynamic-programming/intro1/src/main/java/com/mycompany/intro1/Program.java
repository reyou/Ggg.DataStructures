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
 * @author dj_re intro2-Top-down-dynamic-programming
 */
public class Program {

    public static void main(String[] args) {
        Program program = new Program();
        int[] nums = new int[]{1, 1, 1, 1, 1};
        int target = 3;
        int result = program.targetSum(nums, target);
        System.out.println("Number of ways: " + result);
    }

    // Top down dynamic programming solution.
    // Like 0-1 Knapsack, we use a HashMap to save space
    private int targetSum(int[] nums, int target) {
        // Map: counter -> sum -> value
        Map<Integer, Map<Integer, Integer>> cache = new HashMap<>();
        int counter = 0;
        int sum = 0;
        return targetSum(nums, target, counter, sum, cache);
    }

    // Overloaded recursive function
    private int targetSum(int[] nums, int target, int counter, int sum, Map<Integer, Map<Integer, Integer>> cache) {
        // When we've gone through every item, see
        // if we've reached our target sum
        if (counter == nums.length) {
            if (sum == target) {
                return 1;
            }
            return 0;
        }
        // Check the cache and return if we get a hit
        if (cache.containsKey(counter) == false) {
            cache.put(counter, new HashMap<>());
        }
        Integer cached = cache.get(counter).get(sum);
        if (cached != null) {
            return cached;
        }
        // Combine the possibilites by adding and
        // subtracting the current value
        int include = targetSum(nums, target, counter + 1, sum + nums[counter], cache);
        int exclude = targetSum(nums, target, counter + 1, sum - nums[counter], cache);
        int result = include + exclude;
        cache.get(counter).put(sum, result);
        return result;
    }
}
