import React, { useState, useEffect } from 'react'
import axios from 'axios';

import PlayerList from './Player/PlayerList';
import PlayerSingle from './Player/PlayerSingle';
import PlayerForm from './Player/PlayerForm';

function App() {

  const url = 'http://localhost:3001/players';

  const [players, updatePlayers] = useState([]);

  const [currPlayer, updateCurrPlayer] = useState({});

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        const data = res.data;
        updatePlayers(res.data);
        data.length > 0 && updateCurrPlayer(res.data[0]);
      })
      .catch(e => console.error(e))

  }, []);


  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col s12'>
          <nav>
            <div className="nav-wrapper purple darken-3">
              <a href="#" className="brand-logo">Soccer Manangement</a>

            </div>
          </nav>

        </div>
      </div>
      <div className='row'>
        <div className='col s3'><PlayerList players={players} updatePlayer={updateCurrPlayer} /></div>
        <div className='col s9'><PlayerSingle player={currPlayer} /></div>
      </div>
      <div className='row'>
        <div className='col s12'><PlayerForm /></div>
      </div>

    </div>
  )
}

export default App;
