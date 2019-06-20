/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.intro1;

import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;
import java.util.Set;

/**
 *
 * @author dj_re https://leetcode.com/problems/alien-dictionary/
 */
public class Program {

    /*
    input: ["wrt", "wrf", "er", "ett", "rftt"]
    output: wertf
    input invalid: ["ztk", "ztl", "las", "kes"]
     */
    public static void main(String[] arr) {
        String[] arr1 = new String[]{"wrt", "wrf", "er", "ett", "rftt"};
        RunValid(arr1);
        String[] arr2 = new String[]{"wrt", "wrf", "er", "ett", "rftt", "te"};
        RunValid(arr2);
        RunInvalid();
    }

    private static void RunValid(String[] arr1) {
        Program program = new Program();

        String alienOrder = program.alienOrder(arr1);
        System.out.println("Valid: " + alienOrder);
    }

    private static void RunInvalid() {
        Program program = new Program();
        String[] arr1 = new String[]{"ztk", "ztl", "las", "kes"};
        String alienOrder = program.alienOrder(arr1);
        System.out.println("Invalid: " + alienOrder);
    }

    public String alienOrder(String[] words) {
        Map<Character, Set<Character>> graph = new HashMap<>();
        int[] inDegrees = new int[26];
        buildGraph(words, graph, inDegrees);
        String order = topologicalSort(graph, inDegrees);
        if (order.length() == graph.size()) {
            return order;
        }
        return "";
    }

    private void buildGraph(String[] words, Map<Character, Set<Character>> graph, int[] inDegrees) {
        // a map of character -> set of character.
        for (String word : words) {
            for (char c : word.toCharArray()) {
                // creating full unique base set of chars
                graph.put(c, new HashSet<>());
            }
        }
        // Also get in-degrees for each character. 
        // In-degrees will be a map of character -> integer.
        for (int i = 1; i < words.length; i++) {
            String first = words[i - 1];
            String second = words[i];
            int length = Math.min(first.length(), second.length());
            for (int j = 0; j < length; j++) {
                char parent = first.charAt(j);
                char child = second.charAt(j);
                if (parent != child) {
                    if (!graph.get(parent).contains(child)) {
                        graph.get(parent).add(child);
                        inDegrees[child - 'a']++;
                    }
                    break;
                }
            }

        }

    }

    private String topologicalSort(Map<Character, Set<Character>> graph, int[] inDegrees) {
        Queue<Character> queue = new LinkedList<>();
        for (char c : graph.keySet()) {
            if (inDegrees[c - 'a'] == 0) {
                queue.offer(c);
            }
        }
        StringBuilder builder = new StringBuilder();
        while (!queue.isEmpty()) {
            char c = queue.poll();
            builder.append(c);
            for (char neighbor : graph.get(c)) {
                inDegrees[neighbor - 'a']--;
                if (inDegrees[neighbor - 'a'] == 0) {
                    queue.offer(neighbor);
                }
            }
        }
        return builder.toString();
    }
}
