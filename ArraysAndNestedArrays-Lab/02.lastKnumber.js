function lastKseq(n, k){
    // let n = perimeters[0];
    // let k = perimeters[1];
    let array = [1];
    for(let i = 1; i < n; i++){
        //Calculate the sum of previous k elements
        let sum = 0;
        //! CREATE A FOR LOOP where {j}:
        //!  - STRATS FROM 1 ELEMENT BACK
        //!  -         {j} >= i - k             &&      {j} >= 0 
        //! This condition ensures that we only consider the previous k elements if they exist
        //!  - SUBTRACT {j} by ONE for every iteration of the loop!!!

        for(let j = i - 1; j >= i-k && j >= 0; j--){
            sum += array[j];
        }
        array.push(sum);
    }
    return array;
}