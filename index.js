arr=[1,'cat',2.35,true]
for(i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

//length
console.log("Length of arr -> "+arr.length);

//pop
arr.pop()

console.log("after pop => "+arr);

//push

arr.push("Anudeep Durishetty")
console.log("after push => "+arr);

c=arr.pop();
console.log("after pop => "+c);

//shift=> removes 1st element from array

p=arr.shift();
console.log("after shift => "+c);
console.log(" shifted array is => "+arr);

//unshift=> adds 1st element to array

arr.unshift("Anudeep Durishetty");
console.log("after unshift => "+arr);