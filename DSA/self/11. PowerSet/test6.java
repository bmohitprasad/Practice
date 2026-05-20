public class test6 {
    public static void main(String[] args) {
        String str = "abc";
        runner (str, 0, str.length(), "");
    }

    public static void runner(String str, int ind, int n, String s) {
        if (ind == n) {
            if (s.equals("")) {
                System.out.println("\"\"");
                return;
            }
            System.out.println(s);
            return;
        }

        s += str.charAt(ind);
        runner(str, ind + 1, n, s);
        s = s.substring(0, s.length() - 1);
        runner(str, ind + 1, n, s);
    }
}
