// Complete the twoArrays function below.
function twoArrays(k, A, B) {

  let sortABySmallestA = A.sort(function(a,b){return a-b});
  let sortBySmallestB = B.sort(function(a,b){return a-b});

    
    
  for (let i =0, j=sortBySmallestB.length - 1; i < sortABySmallestA.length, j >=0; i++,j--){
    let bValue = k - sortABySmallestA[i];
  console.log(sortABySmallestA[i],sortBySmallestB[j])
    if (sortBySmallestB[j] >= bValue){
      let removeBVal = sortBySmallestB.splice(j,1); 
    }
;
    
  }

  if (B.length > 0){
    return "NO"
  } else {
    return "YES";
  }  

}
const arrA = [4,4,3,2,1,4,4,3,2,4];
const arrB = [2,3,0,1,1,3,1,0,0,2]; 
const value = 4;




twoArrays(value,arrA,arrB);
 
// make sure that adding B[i] and A[i] would be >= k 

// human being, look at array one and compare to array two, if two match to add up to be larger than move onto the next one, at the minute that this isnt possible say no.

// once you go through all of the values in the array, return yes 

// developer. 


//  k- a[n] look for that value or greater. if not found return no, continue until end of the array then return true 