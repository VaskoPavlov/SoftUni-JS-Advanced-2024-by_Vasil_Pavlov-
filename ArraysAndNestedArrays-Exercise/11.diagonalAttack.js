function diagonalAttack(array){
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let finalArr = [];
    for (let index = 0; index < array.length; index++) {
        let row = array[index].split(' ');
        for (let i = 0; i < row.length; i++) {
            let element = row[i];
            if(index === i){
                firstDiagonal += Number(element);
            } 
            if (index + i === (array.length - 1)){
                secondDiagonal += Number(element);
            }
        }
    }

    for (let k = 0; k < array.length; k++) {
        let row = array[k].split(' ');
        let finalRow = [];
        for (let j = 0; j < row.length; j++) {
            let element = row[j];

            if(firstDiagonal === secondDiagonal){
                if (k !== j && k + j !== (array.length - 1)){
                    finalRow.push(firstDiagonal);
                } else {
                    if(k === j){
                        finalRow.push(Number(element));
                        continue;
                    }
                    if (k + j === (array.length - 1)){
                        finalRow.push(Number(element));
                    }
                }
            } else {
                finalRow.push(Number(element));
            }
        }
        let finalRowJoined = finalRow.join(' ');
        finalArr.push(finalRowJoined);
    } 
    console.log(finalArr.join('\n'));
}
diagonalAttack(
    ['1 1 1',
    '1 1 1',
    '1 1 0']
    );