import {useState} from 'react'

export default function Player({initialName, symbol, isActive}) {

    const [playerName, setPlayerName] = useState(initialName)
    const [isEdit, setIsEdit] = useState(false)

    let editPlayerName = <span className="player-name">{playerName}</span>

    function handeEdit(){
        setIsEdit((editing) => !editing)
    }

    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    if (isEdit) {
        editPlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handeEdit}>{isEdit ? 'Save' : 'Edit'}</button>
          </li>
    )
}