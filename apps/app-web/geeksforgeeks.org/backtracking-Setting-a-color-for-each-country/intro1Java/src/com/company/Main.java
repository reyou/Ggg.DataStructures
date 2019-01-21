package com.company;

public class Main {

    static final int NONE = 0;
    static final int RED = 1;
    static final int YELLOW = 2;
    static final int GREEN = 3;
    static final int BLUE = 4;
    public static void main(String[] args) {
	// write your code here
        System.out.println("Setting a color for each country:");
        ColoredMap m  = new ColoredMap();
        m.createMap();
        boolean result = m.explore(0, RED);
        System.out.println(result);
        m.printMap();
    }



}
