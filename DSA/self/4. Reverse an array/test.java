public class test {
    public static void main(String[] args) {
        int [] arr = {4, 3, 2, 1, 2, 6};
        reverse(arr, 0, 5);

        for (int i = 0; i < 6; i ++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println("");
    }

    public static void reverse (int[] arr, int l, int r) {
        if (l == r || l + 1 == r) return;
        int temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        reverse (arr, l + 1, r - 1);
    }
}
