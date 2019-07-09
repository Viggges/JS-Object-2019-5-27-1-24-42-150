var fruit = {
apple: 20,
pear: 20,
peach: 10
};
// write your code here...
var sum = 0;
for(var i in fruit){
    sum+=fruit[i];
}
console.log(sum);
