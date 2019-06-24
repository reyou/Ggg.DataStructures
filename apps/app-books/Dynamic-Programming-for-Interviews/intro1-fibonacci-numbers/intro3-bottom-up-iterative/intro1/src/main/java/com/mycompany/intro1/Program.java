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

    // Compute the nth Fibonacci number iteratively
    public int fib(int n) {
        if(n < 2){
            return n;
        }
        // Initialize cache
        int[] cache = new int[n+1];
        cache[0] = 0;
        cache[1] = 1;
        
        // Fill cache iteratively
        for(int i = 2; i <= n; i++){
            cache[i] = cache[i-1] + cache[i-2];
        }
        return cache[n];
    }

    
}
