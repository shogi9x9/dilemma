import PlayerComponent from '../../components/player';
import PlayerActionsComponent from '../../components/playerActions'
import ActionLogs from '../../components/actionLogs';
import Person from '../../classes/person';
import style from '../../styles/pages/games.module.scss';
import {useState} from 'react';
import dynamic from 'next/dynamic'
const Block = dynamic(() => import("../../components/block"), {
  ssr: false,
});

const PlayerIcon = dynamic(() => import('../../components/playerIcon'), {ssr: false})

const Game = () => {
  const goal = 250;
  const [actionLogs, setActionLogs] = useState(['ゲームを開始します'])
  const [players, setPlayers] = useState(initialize_players(5));
  const [curr_index, setIndex] = useState(0);
  const [curr_mode, setCurrMode] = useState(0);
  const blockSize = 60;
  const rowNum = 15;
  const midHeight = 2;
  const field = initialize_field(goal, blockSize, rowNum, midHeight);

  return (
    <>
      <ActionLogs actionLogs={actionLogs}/>
      <div className={style.playerBox}>
        <div className={style.players}>
          {
            players.map((elm, index) => {
              const player = elm.get_player_summary()
              const is_turn = curr_index == index
              return (
                <PlayerComponent key={player.name} name={player.name} dice_num={player.dice_num}
                position={player.position} goal={goal} is_gameover={player.is_gameover} is_turn={is_turn} 
                curr_mode={curr_mode} setCurrMode={setCurrMode} curr_index={curr_index} setIndex={setIndex} index={index}/>
              )
            })
          }
        </div>
        <PlayerActionsComponent players={players} setPlayers={setPlayers}
        curr_index={curr_index} setIndex={setIndex} player_num ={players.length}
        actionLogs={actionLogs} setActionLogs={setActionLogs} goal={goal} 
        curr_mode={curr_mode} setCurrMode={setCurrMode}/>
      </div>
      <div className={style.fieldBox}>
        {field}
        <PlayerIcon curr_pos={players[0].getPastTwoPos()[0]}
        target_pos={players[0].getPastTwoPos()[1]} blockSize={blockSize}
        rowNum={rowNum} midHeight={midHeight} />
      </div>
    </>
  )
}

function initialize_players(player_num) {
  const players = []
  for (let i = 1; i < player_num + 1; i++) {
    players.push(new Person(`Player${i}`, 7))
  }
  return players
}

function initialize_field(field_size, blockSize, rowNum, midHeight) {
  const field = []
  for (let i = 0; i < field_size; i++) {
    field.push(<Block key={i} position_id={i} blockSize={blockSize}
    rowNum={rowNum} midHeight={midHeight} />)
  }
  return field
}

export default Game