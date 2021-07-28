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