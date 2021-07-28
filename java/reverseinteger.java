class Solution {
    public int reverse(int x) {
        int y=0;
        while(x!=0){
            int temp = y*10 + x%10;
            if((temp - x%10)/10 != y ){
                return 0;
            }
            y = temp;
            x = x/10;
        }
        return y;
    }
}


class Solution {
    public boolean isPalindrome(int x) {
         // Base condition
        if (x < 0) {
            return false;
        }
        // Store the number in a variable
        int number = x;
        // This will store the reverse of the number
        int reverse = 0;
        while (number > 0) {
            reverse = reverse * 10 + number % 10;
            number /= 10;
        }
        return x == reverse;
    }
}