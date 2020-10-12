import React from 'react';
import style from '../styles/components/player.module.scss';

const PlayerComponent = (props) => {
  let gameOverClass = props.is_gameover ? style.isGameOver : '';
  let isTurn = props.is_turn ? style.isTurn : '';
  let playerBoxClass = `${style.playerBox} ${gameOverClass} ${isTurn}`;

  const handleEvent = (index) => {
    if (props.curr_index !== index) {
      const curr_player = props.players[props.curr_index];
      const logs = props.actionLogs.slice();
      props.setCurrMode(0)


      // logs.push(`${owner.name}所有のマスに止まりましたが既に敗北しているため何も起こりませんでした`)

      props.setActionLogs(logs)
      if (props.curr_index + 1 >= props.player_num) {
        props.setIndex(0)
      } else {
        props.setIndex(props.curr_index + 1)
      }
    }
  }

  if (props.curr_mode === 0) {
    return (
      <div className={playerBoxClass}>
        <p>名前: {props.name}</p>
        <p>サイコロ残数: {props.dice_num}</p>
        <p>現在位置: {props.position}</p>
        <p>ゴールまで残り: {props.goal - props.position}マス</p>
      </div>
    )
  } else {
    return (
      <div className={playerBoxClass} onClick={() => {handleEvent(props.index)}}>
        <p>名前: {props.name}</p>
        <p>サイコロ残数: {props.dice_num}</p>
        <p>現在位置: {props.position}</p>
        <p>ゴールまで残り: {props.goal - props.position}マス</p>
      </div>
    )
  }
}

export default PlayerComponent