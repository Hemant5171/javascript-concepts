function mapForEach(arr,fn){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        newArr.push(fn(arr[i]))
    };
    return newArr;
}

var arr=[10,20,30];
console.log(arr);

var arr2=mapForEach(arr,function(item){
    return item*2;
});

console.log(arr2);