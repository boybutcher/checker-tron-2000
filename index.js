const boardArray = [
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 2, 0, 2, 0, 2],
  [2, 0, 2, 0, 2, 0, 2, 0],
  [0, 2, 0, 2, 0, 2, 0, 2],
];

const body = document.body;

const board = document.createElement(`table`);

const createPiece = (playerId) => {
  const piece = document.createElement(`div`);
  piece.className = playerId === 1 ? `piece player1` : `piece player2`;
  return piece;
};

const createCell = (cellValue, index) => {
  const cell = document.createElement(`td`);
  cell.className = index % 2 === 0 ? `dark` : `light`;
  if (cellValue > 0) {
    cell.appendChild(createPiece(cellValue));
  }
  return cell;
};

const createRow = (rowArray, index) => {
  const row = document.createElement(`tr`);
  row.className = index % 2 === 0 ? `even` : `odd`;
  rowArray.map((cell, cellIndex) => {
    if (row.className === `even`) {
      row.appendChild(createCell(cell, cellIndex));
    } else {
      row.appendChild(createCell(cell, cellIndex + 1));
    }
  })
  return row;
};

const appendRows = () => {
  boardArray.map((row, index) => {
    board.appendChild(createRow(row, index));
  })
};

appendRows();
body.appendChild(board);

console.log(boardArray);