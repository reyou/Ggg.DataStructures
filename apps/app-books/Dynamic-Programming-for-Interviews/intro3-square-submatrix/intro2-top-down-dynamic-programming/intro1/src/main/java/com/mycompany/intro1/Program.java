/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.intro1;

import java.util.Random;

/**
 *
 * Top down dynamic programming solution
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
        // Initialize cache. Don't need to initialize
        // to -1 because the only cells that will be 
        // 0 are ones that are false and we want to 
        // skip those one anyway
        int[][] cache = new int[matrix.length][matrix[0].length];
        int max = 0;
        // Compute for each cell the biggest subarray
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[0].length; col++) {
                if (matrix[row][col] == true) {
                    int result = squareSubMatrix2(matrix, cache, row, col);
                    max = Math.max(max, result);
                }
            }
        }
        return max;
    }

    // Overloaded recursive function
    private int squareSubMatrix2(boolean[][] matrix, int cache[][], int row, int col) {
        // Base case at bottom or right of the matrix
        if (row == matrix.length || col == matrix[0].length) {
            return 0;
        }
        // if the cell is false the it's no part of a valid submatrix
        if (matrix[row][col] == false) {
            return 0;
        }
        
        // check if solution in cache
        if (cache[row][col] > 0) {
            return cache[row][col];
        }
        // Find the size of the right, bottom, and
        // bottom-right submatrices and add 1 to the
        // minimum of those 3 to get the result
        int rightStep = squareSubMatrix2(matrix, cache, row, col + 1);
        int bottomStep = squareSubMatrix2(matrix, cache, row + 1, col);
        int bottomRightStep = squareSubMatrix2(matrix, cache, row + 1, col + 1);
        int result = 1 + Math.min(Math.min(rightStep, bottomStep), bottomRightStep);
        cache[row][col] = result;
        return result;
    }

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
