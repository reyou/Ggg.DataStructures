/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.intro1;

import java.util.PriorityQueue;

/**
 *
 * @author dj_re
 */
public class Program {

    public static void main(String[] args) {
        Program program = new Program();
        int[] nums = {3, 2, 1, 5, 6, 4};
        int k = 2;
        int result = program.findKthLargest(nums, k);
        System.out.format("%sth largest element is %s", k, result);
    }

    private int findKthLargest(int[] nums, int k) {
        // init heap 'the smallest element first'
        PriorityQueue<Integer> heap = new PriorityQueue<Integer>((o1, o2) -> {
            return o1 - o2;
        });

        // keep k largest element  in the heap
        for (int n : nums) {
            heap.offer(n);
            if (heap.size() > k) {
                heap.poll();
            }
        }
        // output
        return heap.poll();
    }
}
