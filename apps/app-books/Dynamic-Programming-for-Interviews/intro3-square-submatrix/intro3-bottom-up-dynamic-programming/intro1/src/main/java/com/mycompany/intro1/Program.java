/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.intro1;

import java.util.Random;

/**
 *
 * intro3-bottom-up-dynamic-programming
 */
public class Program {

    public static void main(String[] args) {
        Program program = new Program();
        boolean[][] matrix = new boolean[50][50];
        program.fillTheMatrix(matrix);
        int result = program.squareSubMatrix(matrix);
        System.out.println("Biggest Square SubMatrix: " + result);
    }

    // Top down dynamic programming solution. Cache
    // the values to avoid repeating computations.
    private int squareSubMatrix(boolean[][] matrix) {
        int max = 0;
        // Initialize cache
        int[][] cache = new int[matrix.length][matrix[0].length];
        // Iterate over matrix to compute each value
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[0].length; col++) {
                // If we're in the first row/column then
                // the value is just 1 if that cell is
                // true and 0 otherwise. In other rows and
                // columns need to look up and to the left
                if (row == 0 || col == 0) {
                    if (matrix[row][col] == true) {
                        cache[row][col] = 1;
                    } else {
                        cache[row][col] = 0;
                    }
                } else if (matrix[row][col] == true) {
                    int leftStep = cache[row][col - 1];
                    int upStep = cache[row - 1][col];
                    int leftUpStep = cache[row - 1][col - 1];
                    int result = Math.min(Math.min(leftStep, upStep), leftUpStep);
                    cache[row][col] = result + 1;
                }
                max = Math.max(max, cache[row][col]);
            }
        }
        return max;
    }

    // Overloaded recursive function
    private void fillTheMatrix(boolean[][] matrix) {
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[0].length; col++) {
                Random randomno = new Random();
                boolean randomBoolean = randomno.nextBoolean() || randomno.nextBoolean();
                matrix[row][col] = randomBoolean;
            }
        }
    }
}
