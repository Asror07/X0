import Player from './components/player.jsx'
import GameBoard from './components/gameBoard.jsx'
import Log from './components/log.jsx'
import GameOver from './components/gameOver.jsx'
import { useState } from 'react'
import { WINNING_COMBINATIONS } from './winning-combination.js'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function deriveActivePlayer(gameTurns){
  let currentplayer = 'X'
      
      if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
        currentplayer = '0'
      }

      return currentplayer;
}
function App() {

  const [gameTurns, setGameTurns] = useState([])
  // const [activePlayer, setActivePlater] = useState('X')

  const activePlayer = deriveActivePlayer(gameTurns)

  let gameBoard = [...initialGameBoard.map(array => [...array])]

  let winner;

    for ( const turn of gameTurns){
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    for ( const combination of  WINNING_COMBINATIONS) {
      const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
      const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
      const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

      if ( firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
        winner = firstSquareSymbol;
      }
    }

    const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlater((curActivePlayer) => curActivePlayer === 'X' ? '0' : 'X')
    setGameTurns((preTurns) => {
      const currentplayer = deriveActivePlayer(preTurns)

      const updateTurns = [
        { square: {row: rowIndex, col: colIndex}, player: currentplayer }, ...preTurns
      ] 

      return updateTurns;
    })
  }

  function handleRestart(){
    setGameTurns([])
  }
  return (
    <main>
      <div id='game-container'>
        <ol id="players" className='highlight-player'>
          <Player initialName='Palyer 1' symbol='X' isActive={activePlayer === 'X'}/>
          <Player initialName='Palyer 2' symbol='0' isActive={activePlayer === '0'}/>
        </ol>
        {(winner || hasDraw ) && <GameOver winner={winner} onClick={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
