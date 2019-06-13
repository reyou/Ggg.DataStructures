using System;

namespace intro1
{
    class Program
    {
        // Driver Code 
        public static void Main()
        {
            int[] coins = { 9, 6, 5, 1 };

            int target = 11;
            Console.Write("Minimum coins required is " +
                          MinCoins(coins, target));
            Console.ReadLine();
        }

        static int MinCoins(int[] coins, int target)
        {
            // base case 
            if (target == 0)
            {
                return 0;
            }

            // Initialize result 
            int totalCoins = int.MaxValue;

            // Try every coin that has 
            // smaller value than V 
            foreach (int coin in coins)
            {
                if (coin <= target)
                {
                    int subResult = MinCoins(coins, target - coin);

                    // Check for INT_MAX to 
                    // avoid overflow and see 
                    // if result can minimized 
                    if (subResult != int.MaxValue && subResult + 1 < totalCoins)
                    {
                        totalCoins = subResult + 1;
                    }
                }
            }
            return totalCoins;
        }
    }
}
