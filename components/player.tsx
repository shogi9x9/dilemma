import React from 'react';
import style from '../styles/components/player.module.scss';

const PlayerComponent = (props) => {
  let gameOverClass = props.is_gameover ? style.isGameOver : '';
  let isTurn = props.is_turn ? style.isTurn : '';
  let playerBoxClass = `${style.playerBox} ${gameOverClass} ${isTurn}`;
  return (
    <div className={playerBoxClass}>
      <p>名前: {props.name}</p>
      <p>サイコロ残数: {props.dice_num}</p>
      <p>現在位置: {props.position}</p>
      <p>ゴールまで残り: {props.goal - props.position}マス</p>
    </div>
  )
}

export default PlayerComponent