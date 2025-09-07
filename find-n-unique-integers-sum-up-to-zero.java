class Solution {
    public int[] sumZero(int n) {
        if(n == 1) return new int[]{0};

        int counter = 0, ans[]= new int[n];

        for(int i=1;i<=(int)(n/2);i++){
            ans[counter++]= i;
            ans[counter++] = -i;
        }

        if(n%2 == 1) ans[counter++] = 0;

        return ans;
    }
}
