function threeSum(arr, target) {
// write your code here
	let n=arr.length;
	let ans=Infinity;
	for(let i=0;i<n-2;i++){
		for(let j=i+1;j<n-1;j++){
			for(let k=j+1;k<n;k++){
				let sum=arr[i]+arr[j]+arr[k];
				if(Math.abs(sum-target)<Math.abs(ans-target)){
					ans=sum;
				}
			}
		}
	}
	return ans;
  
}

module.exports = threeSum;
