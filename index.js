const boardArray = [
  [ , , , , , , , ],
  [ , , , , , , , ],
  [ , , , , , , , ],
  [ , , , , , , , ],
  [ , , , , , , , ],
  [ , , , , , , , ],
  [ , , , , , , , ],
  [ , , , , , , , ],
];

const body = document.body;

const board = document.createElement(`table`);

const createRow = () => {
  const row = document.createElement(`tr`);
  row.innerHTML = `row`;
  return row;
}

const appendRows = () => {
  boardArray.map(row => {
    board.appendChild(createRow());
  })
  return board;
};

appendRows();
body.appendChild(board);
