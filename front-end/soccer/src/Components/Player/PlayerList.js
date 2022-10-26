import React from 'react'

const PlayerList = ({ players, updatePlayer }) => {
    return (<div>
        <ul className='collection with-header'>
            <li className='collection-header'><h4>Players</h4></li>
            {
                players.map(item => {
                    return (
                        <a href="#!" key={item._id} className='collection-item' onClick={() => updatePlayer(item)}>
                            {item.firstName}
                        </a>
                    )
                })
            }
        </ul>
    </div>);
}

export default PlayerList;