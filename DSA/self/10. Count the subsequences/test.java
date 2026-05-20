public class test {
    public static void main(String[] args) {
        int [] arr = {1, 2, 1};
        int ans= 0;
        int res = countSubseq(0, arr.length, 2, 0, arr, ans);
        System.out.println(res);
    }

    public static int countSubseq (int ind, int n, int target, int sum, int [] arr, int ans) {
        if (ind == n) {
            if (sum == target) return 1;
            else return 0;
        }

        sum += arr[ind];
        int l = countSubseq(ind + 1, n, target, sum, arr, ans);

        sum -= arr[ind];
        int r = countSubseq(ind + 1, n, target, sum, arr, ans);

        return l + r;
    }
}
