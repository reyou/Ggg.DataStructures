using System;

namespace Intro1
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] elements = new[] { -1, 2, 4, 21, -43, 7, 9, 65, 24 };
            int k = 3;
            int[] result = KSmallestElements(elements, k);
            Console.WriteLine(result);
        }

        private static int[] KSmallestElements(int[] elements, int k)
        {
            return elements;
        }
    }
}
