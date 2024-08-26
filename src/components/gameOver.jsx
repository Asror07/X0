export default function GameOver({winner, onClick}) {
    return <div id="game-over">
        <h2>Game over!</h2>
        {winner && <p>{winner} won!</p>}
        {!winner && <p>It is a draw!</p>}
        <p><button onClick={onClick}>Rematch!</button></p>
    </div>
}