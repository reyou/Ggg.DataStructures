/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.intro1;

import java.util.Arrays;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Set;

/**
 *
 * @author dj_re
 */
public class Program {

    public static void main(String[] args) {
        Program program = new Program();
        String beginWord = "hit";
        String endWord = "cog";
        Set<String> wordList = new HashSet<>(Arrays.asList("hot", "dot", "dog", "lot", "log", "cog"));
        int result = program.ladderLength(beginWord, endWord, wordList);
        System.out.format("Result is %s", result);
    }

    private int ladderLength(String beginWord, String endWord, Set<String> wordDict) {
        LinkedList<WordNode> queue = new LinkedList<WordNode>();
        queue.add(new WordNode(beginWord, 1));
        // since wordDict is a set, duplicates will be eliminated.
        wordDict.add(endWord);

        while (true) {
            if (queue.isEmpty()) {
                break;
            }
            WordNode top = queue.remove();
            String word = top.word;

            if (word.equals(endWord)) {
                return top.numSteps;
            }

            char[] arr = word.toCharArray();
            // ['h','i','t']
            for (int i = 0; i < arr.length; i++) {
                // generate all single step neighbours of 'hit'
                for (char c = 'a'; c <= 'z'; c++) {
                    char temp = arr[i];
                    if (arr[i] != c) {
                        arr[i] = c;
                    }
                    String newWord = new String(arr);
                    if (wordDict.contains(newWord)) {
                        queue.add(new WordNode(newWord, top.numSteps + 1));
                        wordDict.remove(newWord);
                    }
                    arr[i] = temp;
                }
            }
        }
        return 0;
    }

}
