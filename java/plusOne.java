class Solution {
    public int[] plusOne(int[] digits) {
       for(int i = digits.length-1; i>=0; i--){
        if(digits[i]<9){
            digits[i]++;
            return digits;
        }
        digits[i]=0; //carry handled by next iteration in for loop
    }
    //didn't return yet so digits were all 9's
    int[] result = new int[digits.length+1];
    result[0] = 1;
    return result;  
    }
}