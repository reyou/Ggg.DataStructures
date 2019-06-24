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
    // with constant space. We only need to save
    // the two most recently computed values
    public int fib(int n) {
        if (n < 2) {
            return n;
        }

        int n1 = 1;
        int n2 = 0;

        for (int i = 2; i < n; i++) {
            int current = n1 + n2;
            n2 = n1;
            n1 = current;
        }
        return n1 + n2;
    }

}
