import java.lang.module.FindException;

public class App {

    static public int bin(int[] arr, int find) {

        int l = 0, m, h = arr.length - 1;

        while (l <= h) {
            m = (l + h) / 2;
            if (find < arr[m])
                h = m - 1;
            else if (arr[m] < find)
                l = m + 1;
            else
                return m;
        }

        return h + 1;
    }

    static public void delete(int[] arr, int index) {
        for (int i = index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
    }

    static public void insert(int[] arr, int in, int index) {
        for (int i = arr.length - 1; (i >= 0 && arr[i] > in); i--)
            arr[i] = arr[i - 1];
        arr[index] = in;
    }

    static public int[] replace(int[] arr, int out, int in) {
        delete(arr, bin(arr, out));
        insert(arr, in, bin(arr, in));

        return arr;
    }

    public static void printArray(int arr[]) {
        int n = arr.length;
        for (int i = 0; i < n; ++i)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    public static void main(String args[]) {
        int arr[] = { 1, 3, 4, 5, 6, 7, 8, 9, 10 };
        replace(arr, 9, 2);
        System.out.println("Sorted array");
        printArray(arr);
    }
}
