function printElement(array) {
    let newArray=[];
    let step = array.pop();

for (let i=0; i<array.length;i+= +step){
    
    newArray.push(array[i]);
}
console.log(newArray.join(` the next Element with step ${step} from first array  is:`));
}
printElement(['5', '20', '31', '4', '20', '2']);
//printElement(['dsa', 'asd', 'test', 'test', '2']);
//printElement(['1', '2', '3', '4', '5', '6']);