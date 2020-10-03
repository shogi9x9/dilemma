import PlayerComponent from '../../components/player';
import PlayerActionsComponent from '../../components/playerActions'
import Person from '../../classes/person';
import style from '../../styles/pages/games.module.scss';
import {useState} from 'react';
import player from '../../components/player';

const Game = () => {
  const goal = 250;
  const [players, setPlayers] = useState(initialize_players(5));
  const [curr_index, setIndex] = useState(0);

  return (
    <div>
      <div className={style.players}>
        {
          players.map((elm, index) => {
            const player = elm.get_player_summary()
            const is_turn = curr_index == index
            return (
              <PlayerComponent key={player.name} name={player.name} dice_num={player.dice_num}
              position={player.position} goal={goal} is_gameover={player.is_gameover} is_turn={is_turn}/>
            )
          })
        }
      </div>
      <PlayerActionsComponent players={players} setPlayers={setPlayers}
      curr_index={curr_index} setIndex={setIndex} player_num ={players.length} />
    </div>
  )
}

function initialize_players(player_num) {
  const players = []
  for (let i = 1; i < player_num + 1; i++) {
    players.push(new Person(`Player${i}`, 7))
  }
  return players
}

export default Game