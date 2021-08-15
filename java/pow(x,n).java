class Solution {
    public double myPow(double x, int n) {
          if (x == 0) return 0;
        if (n == 0) return 1.0;
        if (n == -1) return 1.0/x;
        if (n == 1) return x;
        double half = myPow(x, n/2);
        double full = half * half;
        if (n % 2 != 0) {
            if (n > 0) {
                full *= x;
            } else {
                full /= x;
            }
        }
        return full;
    }
}