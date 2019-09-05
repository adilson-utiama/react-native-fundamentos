//Cria tabuleiro e set atributos
const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row: row,
                column: column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0
            }
        })
    })
}

//Espalha as minas aleatoriamente
const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0

    while (minesPlanted < minesAmount) {
        const rowSel = parseInt(Math.random() * rows, 10)
        const columnSel = parseInt(Math.random() * columns, 10)

        if(!board[rowSel][columnSel].mined) {
            board[rowSel][columnSel].mined = true
            minesPlanted++
        }
    }
}

//Cria  tabuleiros com as minas plantadas
const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns)
    spreadMines(board, minesAmount)
    return board
}

//Clona o tabuleiro
const cloneboard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return { ...field }
        })
    })
}

//Verifica as linhas e colunas ao redor do campo
const getNeighbors = (board, row, column) => {
    const neighbors = []
    const rows = [row - 1, row, row + 1]
    const columns = [column - 1, column, column + 1]
    rows.forEach(r => {
        columns.forEach(c => {
            const different = r !== row || c !== column
            const validRow = r >= 0 && r < board.length
            const validColumn = c >= 0 && c < board[0].length
            if(different && validRow && validColumn) {
                neighbors.push(board[r][c])
            }
        })
    })
    return neighbors
}

//Verifica se os campos vizinhos são seguros
const safeNeighborhood = (board, row, column) => {
    const safes = (result, neighbor) => result && !neighbor.mined
    return getNeighbors(board, row, column).reduce(safes, true)
}

//Abre o field e verifica os campos vizinhos
const openField = (board, row, column) => {
    const field = board[row][column]
    if (!field.opened) {
        field.opened = true
        if (field.mined) {
            field.exploded  = true
        } else if (safeNeighborhood(board, row, column)) {
            getNeighbors(board, row, column)
                .forEach(n => openField(board, n.row, n.column))
        } else {
            const neighbors = getNeighbors(board, row, column)
            field.nearMines = neighbors.filter(n => n.mined).length
        }
    }
}

const fields = board => [].concat( ...board )

//Verifica se tem campos minados
const hasExplosion = board => fields(board)
    .filter(field => field.exploded).length > 0

//Verrifica se ha campos nao minados e nao abertos nao descobertos
const pendding = field => (field.mined && !field.flagged) || (!field.mined && !field.opened)

//Verifica se jogador encontrou todos os campos nao minados (WIN)
const wonGame = board => fields(board).filter(pendding).length === 0

//Mostra todos os campos minados (LOSE)
const showMines = board => fields(board).filter(field => field.mined)
    .forEach(field => field.opened = true)

//Marca ou desmarca campo com flag  
const invertFlags = (board, row, column) => {
    const field = board[row][column]
    field.flagged = !field.flagged
}

//Flags usadas
const flagsUsed = board => fields(board)
    .filter(field => field.flagged).length

export { 
    createMinedBoard,
    cloneboard,
    openField,
    hasExplosion,
    wonGame,
    showMines,
    invertFlags,
    flagsUsed
}