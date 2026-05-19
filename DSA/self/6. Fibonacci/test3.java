public class test3 {
    public static void main(String[] args) {
        int n = 5;
        System.out.println(fibbo(n - 1));
    }

    public static int fibbo (int n) {
        if (n <= 1) return n;
        return fibbo (n - 1) + fibbo (n - 2);
    }
}
