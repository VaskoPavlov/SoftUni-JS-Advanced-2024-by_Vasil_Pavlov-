function solve(moves) {
    const board = [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ];
   
    for (let i = 0; i < moves.length; i++) {
      const [arr, row] = moves[i].split(" ")
   
      if (board[arr][row]) {
        console.log(`This place is already taken. Please choose another!`);
        moves.splice(i, 1);
        i -= 1;
        continue;
      } else {
        if (i % 2 === 0) {
          //player X
          board[arr][row] = "X";
        } else {
          //player O
          board[arr][row] = "O";
        }
      }
      if (isThereWinner(board) === "X" || isThereWinner(board) === "O") {
        console.log(`Player ${isThereWinner(board)} wins!`);
        break;
      }
      if (isFull(board)) {
        console.log(`The game ended! Nobody wins :(`);
        break;
      }
    }
    console.log(dashboard(board));
   
    function isThereWinner(matrix) {
      let winner = "";
      for (let i = 0; i < matrix.length; i++) {
        //across
        if (matrix[i].every((x) => x === matrix[i][0] && x !== false)) {
          //op
          if (matrix[i][0] === "X") {
            winner += "X";
          } else {
            winner += "O";
          }
        }
      }
      // down
      for (let m = 0; m < matrix.length; m++) {
        let down = "";
        for (let n = 0; n < matrix.length; n++) {
          down += matrix[n][m];
        }
        if (down === "XXX") {
          winner += "X";
        } else if (down === "OOO") {
          winner += "O";
        }
      }
   
      //diagonals
      let diagonal1 = "";
      for (let z = 0; z < matrix.length; z++) {
        // MAIN DIAGONAL = [0][0]+[1][1]+[2][2] AND SO ON....
        diagonal1 += matrix[z][z];
      }
      let diagonal2 = "";
      for (let y = 0; y < matrix.length; y++) {
        // SECONDARY DIAGONAL = [index][ARRAY.LENGTH - index - 1] FOR THE WHOLE LENGTH;
        // example = [0][2]+[1][1]+[2][0] WHEN INDEX GETS HIGHER SECOND NUMBER IN [] GETS LOWER
        diagonal2 += matrix[y][matrix.length - y - 1];
      }
      if (diagonal1 === "XXX" || diagonal2 === "XXX") {
        winner += "X";
      } else if (diagonal1 === "OOO" || diagonal2 === "OOO") {
        winner += "O";
      }
      return winner;
    }
   
    function isFull(matrix) {
      let isReallyFull = false;
      for (let i = 0; i < matrix.length; i++) {
        isReallyFull = matrix[i].every((x) => x !== false); //op
      }
      return isReallyFull;
    }
   
    function dashboard(matrix) {
      let dash = "";
      for (let i = 0; i < matrix.length; i++) {
        for (let m = 0; m < matrix[i].length; m++) {
          if ((m + 1) % 3 === 0) {
            dash += matrix[i][m] + "\n";
          } else {
            dash += matrix[i][m] + "\t";
          }
        }
      }
      return dash;
    }
  }

  solve(["0 1",
  "0 0",
  "2 2", 
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "0 2",
  "2 1",
  "0 0"] 
 )