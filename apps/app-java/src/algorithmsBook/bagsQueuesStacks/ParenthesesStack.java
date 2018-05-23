package algorithmsBook.bagsQueuesStacks;

import algorithmsBook.bookContent.Stack;

public class ParenthesesStack {
    public static void main(String[] args) {
        // true
        String input1 = "[()]{}{[()()]()}";
        // false
        String input2 = "[(])";
        boolean isBalanced1 = isBalanced(input1);
        boolean isBalanced2 = isBalanced(input2);
        System.out.println(isBalanced1);
        System.out.println(isBalanced2);
    }

    private static boolean isBalanced(String input1) {
        char[] chars = input1.toCharArray();
        Stack<String> items = new Stack<>();
        for (char q : chars) {
            String item = String.valueOf(q);
          //  System.out.println("Current item: " + item);
            if (item.equals(")")) {
                String pop = items.pop();
                if (!pop.equals("(")) {
                    return false;
                }
            } else if (item.equals("]")) {
                String pop = items.pop();
                if (!pop.equals("[")) {
                    return false;
                }
            } else if (item.equals("}")) {
                String pop = items.pop();
                if (!pop.equals("{")) {
                    return false;
                }
            } else {
                items.push(item);
            }
        }
        return true;
    }
}
