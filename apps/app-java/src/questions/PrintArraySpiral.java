package questions;

// https://www.interviewbit.com/problems/spiral-order-matrix-i/
// Print 2-D array in spiral order
// https://www.youtube.com/watch?v=siKFOI8PNKM
public class PrintArraySpiral {
    public static void arrayInSpiralOrder(int[][] multi, int rowCount, int colCount) {
        int topMost = 0;
        int bottomMost = rowCount - 1;
        int leftMost = 0;
        int rightMost = colCount - 1;
        int direction = 0;
        while (topMost <= bottomMost && leftMost <= rightMost) {
            if (direction == 0) {
                for (int i = leftMost; i <= rightMost; i++) {
                    System.out.print(multi[topMost][i] + ", ");
                }
                topMost++;
                direction = 1;
            } else if (direction == 1) {
                for (int i = topMost; i <= bottomMost; i++) {
                    System.out.print(multi[i][rightMost] + ", ");
                }
                rightMost--;
                direction = 2;
            } else if (direction == 2) {
                for (int i = rightMost; i >= leftMost; i--) {
                    System.out.print(multi[bottomMost][i] + ", ");
                }
                bottomMost--;
                direction = 3;
            } else if (direction == 3) {
                for (int i = bottomMost; i >= topMost; i--) {
                    System.out.print(multi[i][leftMost] + ", ");
                }
                leftMost++;
                direction = 0;
            }

        }
    }

    public static void main(String[] args) {
        // https://stackoverflow.com/questions/12231453/syntax-for-creating-a-two-dimensional-array
        int[][] multi = new int[4][4];
        // row 0
        multi[0][0] = 2;
        multi[0][1] = 4;
        multi[0][2] = 6;
        multi[0][3] = 8;
        //
        multi[1][0] = 5;
        multi[1][1] = 9;
        multi[1][2] = 12;
        multi[1][3] = 16;
        //
        multi[2][0] = 2;
        multi[2][1] = 11;
        multi[2][2] = 5;
        multi[2][3] = 9;
        //
        multi[3][0] = 3;
        multi[3][1] = 2;
        multi[3][2] = 1;
        multi[3][3] = 8;
//
        arrayInSpiralOrder(multi, 4, 4);
    }
}

