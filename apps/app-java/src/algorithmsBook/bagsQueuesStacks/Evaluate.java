package algorithmsBook.bagsQueuesStacks;

import algorithmsBook.bookContent.Queue;
import algorithmsBook.bookContent.Stack;
import algorithmsBook.bookContent.StdIn;
import algorithmsBook.bookContent.StdOut;

// Dijkstra's Two-Stack Algorithm for Expression Evaluation
// This Stack client uses two stacks to evaluate arithmetic expressions.
// ( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )
public class Evaluate {
    public static void main(String[] args) {
        // EvaluateFromInput();
        EvaluateFromString();
    }

    private static void EvaluateFromString() {
        String expression = "(1+((2+3)*(4*5)))";
        char[] expressionArray = expression.toCharArray();
        Stack<Double> vals = new Stack<>();
        Stack<String> ops = new Stack<>();
        char[] chars = expression.toCharArray();
        Queue<String> charQueue = new Queue<>();
        for (char c : chars) {
            System.out.println("char: " + c);
            charQueue.enqueue(String.valueOf(c));
        }
        double v = 0.0;
        while (charQueue.isEmpty() == false) {
            String s = charQueue.dequeue();
            if (s.equals("(")) ;
            else if (s.equals("+")) ops.push(s);
            else if (s.equals("-")) ops.push(s);
            else if (s.equals("*")) ops.push(s);
            else if (s.equals("/")) ops.push(s);
            else if (s.equals("sqrt")) ops.push(s);
            else if (s.equals(")")) {
                // Pop, evaluate, and push result if token is ")".
                String op = ops.pop();
                v = vals.pop();
                if (op.equals("+")) v = vals.pop() + v;
                else if (op.equals("-")) v = vals.pop() - v;
                else if (op.equals("*")) v = vals.pop() * v;
                else if (op.equals("/")) v = vals.pop() / v;
                else if (op.equals("sqrt")) v = Math.sqrt(v);
                vals.push(v);
            }
            else {
                vals.push(Double.parseDouble(s));
            }
        }
        System.out.println(v);
    }

    private static void EvaluateFromString2() {
        String expression = "(1+((2+3)*(4*5)))";
        char[] expressionArray = expression.toCharArray();
        Stack<Double> vals = new Stack<>();
        Stack<String> ops = new Stack<String>();
        char[] chars = expression.toCharArray();
        for (char c : chars) {
            System.out.println("char: " + c);
            if (c == '(') ;
            else if (c == '+') ops.push(String.valueOf(c));
            else if (c == '-') ops.push(String.valueOf(c));
            else if (c == '*') ops.push(String.valueOf(c));
            else if (c == '/') ops.push(String.valueOf(c));
            else if (c == ')') ops.push(String.valueOf(c));
            else {
                double doubleVal = Double.parseDouble(String.valueOf(c));
                vals.push(doubleVal);
            }
        }
        double result = 0.0;
        for (int i = 0; i < expressionArray.length; i++) {
            char item = expressionArray[i];
            if (item == ')') {
                String op = ops.pop();
                double val = vals.pop();
                if (op.equals("+")) result = val + vals.pop();
                else if (op.equals("-")) result = val - vals.pop();
                else if (op.equals("*")) result = val * vals.pop();
                else if (op.equals("/")) result = val / vals.pop();
            }
        }
        System.out.println("Result: " + result);
    }

    private static void EvaluateFromInput() {
        Stack<String> ops = new Stack<>();
        Stack<Double> vals = new Stack<>();
        while (!StdIn.isEmpty()) {
            // Read token, push if operator.
            String s = StdIn.readString();
            if (s.equals("(")) ;
            else if (s.equals("+")) ops.push(s);
            else if (s.equals("-")) ops.push(s);
            else if (s.equals("*")) ops.push(s);
            else if (s.equals("/")) ops.push(s);
            else if (s.equals("sqrt")) ops.push(s);
            else if (s.equals(")")) {
                // Pop, evaluate, and push result if token is ")".
                String op = ops.pop();
                double v = vals.pop();
                if (op.equals("+")) v = vals.pop() + v;
                else if (op.equals("-")) v = vals.pop() - v;
                else if (op.equals("*")) v = vals.pop() * v;
                else if (op.equals("/")) v = vals.pop() / v;
                else if (op.equals("sqrt")) v = Math.sqrt(v);
                vals.push(v);
            }
            // Token not operator or paren: push double value.
            else vals.push(Double.parseDouble(s));
        }
        StdOut.println(vals.pop());
    }
}
