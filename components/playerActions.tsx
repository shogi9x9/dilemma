import React from 'react';
import Player from '../classes/player';
import style from '../styles/components/playerActions.module.scss';

enum Actions {
  Throw_dice,
  Stay,
  Teaming
}

const PlayerActions = (props) => {
  const updateIndex = (action) => {
    let players = props.players.slice();
    let curr_player = players[props.curr_index]
    switch (action) {
      case Actions.Throw_dice:
        curr_player.throw_dice()
        break
      case Actions.Stay:
        curr_player.stay()
        break
      case Actions.Teaming:
        curr_player.askForTeaming()
        break
    }

    players[props.curr_index] = curr_player
    props.setPlayers(players)

    if (props.curr_index + 1 >= props.player_num) {
      props.setIndex(0)
    } else {
      props.setIndex(props.curr_index + 1)
    }
  }

  return (
    <div className={style.actionBtnBox}>
      <button className={style.actionBtn} onClick={() => {updateIndex(Actions.Throw_dice)}}>サイコロを振る</button>
      <button className={style.actionBtn} onClick={() => {updateIndex(Actions.Stay)}}>現在の位置に留まる</button>
      <button className={style.actionBtn} onClick={() => {updateIndex(Actions.Teaming)}}>チームへの参加を依頼する</button>
    </div>
  )
}

export default PlayerActions