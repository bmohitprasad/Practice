public class test2 {
    public static void main(String[] args) {
        String str = "MADDAM";
        System.out.println(check(str, 0, str.length() -1));
    }

    public static boolean check (String str, int l, int r) {
        if (l == r || l +1 == r) return true;
        if (str.charAt(l) != str.charAt(r)) {
            return false;
        } 
        return check (str, l + 1, r - 1);
    }
}
