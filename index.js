const boardArray = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const body = document.body;

const board = document.createElement(`table`);

const createCell = (index) => {
  console.log(`creating cells`)
  const cell = document.createElement(`td`);
  cell.className = index % 2 === 0 ? `dark` : `light`;
  return cell;
}

const createRow = (rowArray, index) => {
  const row = document.createElement(`tr`);
  row.className = index % 2 === 0 ? `even` : `odd`;
  rowArray.forEach((cell, cellIndex) => {
    if (row.className === `even`) {
      row.appendChild(createCell(cellIndex));
    } else {
      row.appendChild(createCell(cellIndex + 1));
    }
  })
  return row;
}

const appendRows = () => {
  boardArray.forEach((row, index) => {
    board.appendChild(createRow(row, index));
  })
};

appendRows();
body.appendChild(board);
