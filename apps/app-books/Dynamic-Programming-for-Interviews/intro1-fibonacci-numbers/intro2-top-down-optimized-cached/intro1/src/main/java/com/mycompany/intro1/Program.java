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
        int fib = program.fib(10);
        System.out.println(fib);
    }

    public int fib(int n) {
        if (n == 0) {
            return 0;
        }
        if (n == 1) {
            return 1;
        }
        // Create cache and initialize to -1
        int[] cache = new int[n+1];
        for(int i = 0; i < cache.length; i++){
            cache[i] = -1;
        }
        // Fill initial values in cache
        cache[0] = 0;
        cache[1] = 1;
        return fib(n,cache);
    }

    private int fib(int n, int[] cache) {
        // If value is set in cache, return
        if(cache[n] != -1){
            return cache[n];
        }
        // Compute and add to cache before returning
        cache[n] = fib(n-1,cache) + fib(n-2,cache);
        return cache[n];
    }
}
