public class MagicSquare {
    final int square[][];
    final boolean used[];
    final int n;
    final int magicSum;

    public MagicSquare(int n) {
        square = new int[n][n];
        this.n = n;
        used = new boolean[n * n + 1];
        magicSum = n * (n * n + 1) / 2;
    }

    boolean isValid() {
        int sumD1 = 0;
        int sumD2 = 0;
        for (int i = 0; i < n; i++) {
            int sumR = 0;
            int sumC = 0;
            sumD1 += square[i][i];
            sumD2 += square[i][n - i - 1];
            for (int j = 0; j < n; j++) {
                sumR += square[i][j];
                sumC += square[j][i];
            }
            if (sumR != magicSum || sumC != magicSum) {
                return false;
            }
        }

        // diagonals
        return (sumD1 == magicSum && sumD2 == magicSum);
    }

    String depth = "-";

    boolean solve(int step) {
        System.out.println(depth + step);
        if (step == n * n) {
            depth = depth.substring(1);
            return isValid();
        }

        for (int val = 1; val <= n * n; val++) {
            if (used[val]) {
                continue;
            }

            used[val] = true;
            square[step / n][step % n] = val;
            depth = depth + "-";
            if (solve(step + 1)) {
                depth = depth.substring(1);
                return true;
            }
            square[step / n][step % n] = 0;
            used[val] = false;
        }
        depth = depth.substring(1);
        return false;
    }

    boolean validUpTo(int step) {
        for (int r = 0; r < n; r++) {
            if (step == (r + 1) * n - 1) {
                int sum = 0;
                for (int c = 0; c < n; c++) {
                    sum += square[r][c];
                }
                return (sum == magicSum);
            }
        }
        for (int c = 0; c < n; c++) {
            if (step == n * (n - 1) + c) {
                int sum = 0;
                for (int r = 0; r < n; r++) {
                    sum += square[r][c];
                }
                return (sum == magicSum);
            }
        }
        return true;
    }

    public void outputSolution() {
        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                System.out.print(square[r][c]);
                System.out.print(' ');
            }
            System.out.println();
        }
        System.out.println();
    }
}
