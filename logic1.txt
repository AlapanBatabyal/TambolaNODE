
class Node {
    constructor() {
      this.A = new Array(3).fill(0).map(() => new Array(9).fill(0));
    }
  
    getRowCount(r) {
      let count = 0;
      for (let i = 0; i < 9; i++) {
        if (this.A[r][i] !== 0)
          count++;
      }
  
      return count;
    }
  
    getColCount(c) {
      let count = 0;
      for (let i = 0; i < 3; i++) {
        if (this.A[i][c] !== 0)
          count++;
      }
  
      return count;
    }
  
    getEmptyCellInCol(c) {
      for (let i = 0; i < 3; i++) {
        if (this.A[i][c] === 0)
          return i;
      }
  
      return -1;
    }
  
    sortColumnWithThreeNumbers(c) {
      const emptyCell = this.getEmptyCellInCol(c);
      if (emptyCell !== -1) {
        throw new Error("Hey! your column has <3 cells filled, invalid function called");
      }
  
      const tempArr = [this.A[0][c], this.A[1][c], this.A[2][c]];
      tempArr.sort();
  
      for (let r = 0; r < 3; r++) {
        this.A[r][c] = tempArr[r];
      }
    }
  
    sortColumnWithTwoNumbers(c) {
      const emptyCell = this.getEmptyCellInCol(c);
      if (emptyCell === -1) {
        throw new Error("Hey! your column has 3 cells filled, invalid function called");
      }
  
      let cell1, cell2;
      if (emptyCell === 0) {
        cell1 = 1;
        cell2 = 2;
      } else if (emptyCell === 1) {
        cell1 = 0;
        cell2 = 2;
      } else { // emptyCell === 2
        cell1 = 0;
        cell2 = 1;
      }
  
      if (this.A[cell1][c] < this.A[cell2][c]) {
        return;
      } else {
        // swap
        const temp = this.A[cell1][c];
        this.A[cell1][c] = this.A[cell2][c];
        this.A[cell2][c] = temp;
      }
    }
  
    sortColumn(c) {
      if (this.getColCount(c) === 1) {
        return;
      } else if (this.getColCount(c) === 2) {
        this.sortColumnWithTwoNumbers(c);
      } else {
        this.sortColumnWithThreeNumbers(c);
      }
    }
  
    sortColumns() {
      for (let c = 0; c < 9; c++) {
        this.sortColumn(c);
      }
    }
  }

  function getRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getNumberOfElementsInSet(set) {
    let count = 0;
    for (let i = 0; i < set.length; i++) {
      count += set[i].length;
    }
    return count;
  }

  module.exports  = (userNo) => {
    console.log(userNo);
    class Node {
      constructor() {
        this.A = new Array(3).fill(0).map(() => new Array(9).fill(0));
      }
  
      getRowCount(r) {
        let count = 0;
        for (let i = 0; i < 9; i++) {
          if (this.A[r][i] !== 0) {
            count++;
          }
        }
        return count;
      }
  
      getColCount(c) {
        let count = 0;
        for (let i = 0; i < 3; i++) {
          if (this.A[i][c] !== 0) {
            count++;
          }
        }
        return count;
      }
  
      getEmptyCellInCol(c) {
        for (let i = 0; i < 3; i++) {
          if (this.A[i][c] === 0) {
            return i;
          }
        }
        return -1;
      }
  
      sortColumnWithThreeNumbers(c) {
        const emptyCell = this.getEmptyCellInCol(c);
        if (emptyCell !== -1) {
          throw new Error("Hey! your column has <3 cells filled, invalid function called");
        }
  
        const tempArr = [this.A[0][c], this.A[1][c], this.A[2][c]];
        tempArr.sort();
  
        for (let r = 0; r < 3; r++) {
          this.A[r][c] = tempArr[r];
        }
      }
  
      sortColumnWithTwoNumbers(c) {
        const emptyCell = this.getEmptyCellInCol(c);
        if (emptyCell === -1) {
          throw new Error("Hey! your column has 3 cells filled, invalid function called");
        }
  
        let cell1, cell2;
        if (emptyCell === 0) {
          cell1 = 1;
          cell2 = 2;
        } else if (emptyCell === 1) {
          cell1 = 0;
          cell2 = 2;
        } else { // emptyCell === 2
          cell1 = 0;
          cell2 = 1;
        }
  
        if (this.A[cell1][c] < this.A[cell2][c]) {
          return;
        } else {
          const temp = this.A[cell1][c];
          this.A[cell1][c] = this.A[cell2][c];
          this.A[cell2][c] = temp;
        }
      }
  
      sortColumn(c) {
        if (this.getColCount(c) === 1) {
          return;
        } else if (this.getColCount(c) === 2) {
          this.sortColumnWithTwoNumbers(c);
        } else {
          this.sortColumnWithThreeNumbers(c);
        }
      }
  
      sortColumns() {
        for (let c = 0; c < 9; c++) {
          this.sortColumn(c);
        }
      }
    }
  
    function getRand(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    function getNumberOfElementsInSet(set) {
      let count = 0;
      for (let i = 0; i < set.length; i++) {
        count += set[i].length;
      }
      return count;
    }
      
    const nodes = new Array(userNo).fill(0).map(() => new Node());
  
    const l1 = [];
    for (let i = 1; i <= 9; i++) {
      l1.push(i);
    }
  
    const l2 = [];
    for (let i = 10; i <= 19; i++) {
      l2.push(i);
    }
  
    const l3 = [];
    for (let i = 20; i <= 29; i++) {
      l3.push(i);
    }
  
    const l4 = [];
    for (let i = 30; i <= 39; i++) {
      l4.push(i);
    }
  
    const l5 = [];
    for (let i = 40; i <= 49; i++) {
      l5.push(i);
    }
  
    const l6 = [];
    for (let i = 50; i <= 59; i++) {
      l6.push(i);
    }
  
    const l7 = [];
    for (let i = 60; i <= 69; i++) {
      l7.push(i);
    }
  
    const l8 = [];
    for (let i = 70; i <= 79; i++) {
      l8.push(i);
    }
  
    const l9 = [];
    for (let i = 80; i <= 90; i++) {
      l9.push(i);
    }
  
    const columns = [l1, l2, l3, l4, l5, l6, l7, l8, l9];
  
    const sets = new Array;

    for(let j=0; j<userNo; j++)
        sets[j] = [];

    for (let i = 0; i < 9; i++) {
        for(let j=0; j<userNo; j++)
            sets[j].push([]);
    }
  
    // assigning elements to each set for each column
    for (let i = 0; i < 9; i++) {
      const li = columns[i];
      for (let j = 0; j < userNo; j++) {
        const randNumIndex = getRand(0, li.length - 1);
        const randNum = li[randNumIndex];
  
        const set = sets[j][i];
        set.push(randNum);
  
        li.splice(randNumIndex, 1);
      }
    }
  
    // assign element from last column to random set
    const lastCol = columns[8];
    const randNumIndex = getRand(0, lastCol.length - 1);
    const randNum = lastCol[randNumIndex];
  
    const randSetIndex = getRand(0, sets.length - 1);
    const randSet = sets[randSetIndex][8];
    randSet.push(randNum);
  
    lastCol.splice(randNumIndex, 1);
  
    // console.log("--\n"+sets);
    // 3 passes over the remaining columns
    for (let pass = 0; pass < 3; pass++) {
      for (let i = 0; i < 9; i++) {
        const col = columns[i];
        if (col.length === 0) {
          continue;
        }
  
        const randNumIndex_p = getRand(0, col.length - 1);
        const randNum_p = col[randNumIndex_p];
  
        let vacantSetFound = false;
        while (!vacantSetFound) {
          const randSetIndex_p = getRand(0, sets.length - 1);
          const randSet_p = sets[randSetIndex_p];
  
          if (getNumberOfElementsInSet(randSet_p) === 15 || randSet_p[i].length === 2) {
            continue;
          }
  
          vacantSetFound = true;
          randSet_p[i].push(randNum_p);
  
          col.splice(randNumIndex_p, 1);
        }
      }
    }
    console.log("--\n"+sets);
  
    // one more pass over the remaining columns
    for (let i = 0; i < 9; i++) {
      const col = columns[i];
      if (col.length === 0) {
        continue;
      }
  
      const randNumIndex_p = getRand(0, col.length - 1);
      const randNum_p = col[randNumIndex_p];
  
      let vacantSetFound = false;
      while (!vacantSetFound) {
        const randSetIndex_p = getRand(0, sets.length - 1);
        const randSet_p = sets[randSetIndex_p];
  
        if (getNumberOfElementsInSet(randSet_p) === 15 || randSet_p[i].length === 3) {
          continue;
        }
  
        vacantSetFound = true;
        randSet_p[i].push(randNum_p);
  
        col.splice(randNumIndex_p, 1);
      }
    }
  
    // sort the internal sets
    for (let i = 0; i < userNo; i++) {
      for (let j = 0; j < 9; j++) {
        sets[i][j].sort();
      }
    }
  
    // got the sets - need to arrange in tickets now
    for (let setIndex = 0; setIndex < userNo; setIndex++) {
      const currSet = sets[setIndex];
      const currTicket = nodes[setIndex];
  
      // fill first row
      for (let size = 3; size > 0; size--) {
        if (currTicket.getRowCount(0) === 5) {
          break;
        }
        for (let colIndex = 0; colIndex < 9; colIndex++) {
          if (currTicket.getRowCount(0) === 5) {
            break;
          }
          if (currTicket.A[0][colIndex] !== 0) {
            continue;
          }
  
          const currSetCol = currSet[colIndex];
          if (currSetCol.length !== size) {
            continue;
          }
  
          currTicket.A[0][colIndex] = currSetCol.shift();
        }
      }
  
      // fill second row
      for (let size = 2; size > 0; size--) {
        if (currTicket.getRowCount(1) === 5) {
          break;
        }
        for (let colIndex = 0; colIndex < 9; colIndex++) {
          if (currTicket.getRowCount(1) === 5) {
            break;
          }
          if (currTicket.A[1][colIndex] !== 0) {
            continue;
          }
  
          const currSetCol = currSet[colIndex];
          if (currSetCol.length !== size) {
            continue;
          }
  
          currTicket.A[1][colIndex] = currSetCol.shift();
        }
      }
  
      // fill third row
      for (let size = 1; size > 0; size--) {
        if (currTicket.getRowCount(2) === 5) {
          break;
        }
        for (let colIndex = 0; colIndex < 9; colIndex++) {
          if (currTicket.getRowCount(2) === 5) {
            break;
          }
          if (currTicket.A[2][colIndex] !== 0) {
            continue;
          }
  
          const currSetCol = currSet[colIndex];
          if (currSetCol.length !== size) {
            continue;
          }
  
          currTicket.A[2][colIndex] = currSetCol.shift();
        }
      }
  
      // sort columns of the ticket
      currTicket.sortColumns();
    }
  
    //--unique ticket id

    const currentDate = new Date();

    // Get the date 
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');

    // Get the time 
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    const id = `${year}${month}${day}${hours}${minutes}${seconds}`;

    console.log(id);
      var data1 = "";
    // print the tickets - console
    for (let i = 0; i < userNo; i++) {
      const currTicket = nodes[i];
      // console.log("Ticket " + (i + 1) + ":\n");
      data1 = data1 + "<h5>Ticket No: " + (i+1) + "</h5><br>\n";
      for (let j = 0; j < 3; j++) {
        // for (let k = 0; k < 9; k++) {
        // }
        // console.log(currTicket.A[j]);
        data1 =  data1 + currTicket.A[j] + "<br>\n";
      }
      data1 = data1 + "<br>\n";
    }
    console.log("\n");
    
    const arr = [id, data1]; //returns the  id and ticket data
    return(arr);
    //--end MAIN
  }
    