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
    let curr_player = players[props.curr_index] as Player;
    let logs = props.actionLogs.slice();
    let until_goal;
    if (!curr_player.is_gameover()) {
      switch (action) {
        case Actions.Throw_dice:
          let curr_dice_num = curr_player.get_dice_num();
          let dice_vals = curr_player.throw_dice();
          let sum = dice_vals.reduce((a, x) => a += x, 0);
          until_goal = props.goal - curr_player.get_position();
          logs.push(`${curr_player.name}がサイコロを${curr_dice_num}個投げました`)
          logs.push(`${dice_vals.join(' ')} (計: ${sum}, 残り: ${until_goal}マス)`)
          let curr_pos = curr_player.get_position() % 5
          if (curr_pos != props.curr_index) {
            let owner = players[curr_pos] as Player;
            if (owner.is_gameover()) {
              logs.push(`${owner.name}所有のマスに止まりましたが既に敗北しているため何も起こりませんでした`)
            } else {
              logs.push(`${owner.name}所有のマスに止まったため対決します`)
              if (Math.floor(Math.random() * 2) == 1) {
                logs.push(`${curr_player.name}が勝利したため${owner.name}よりサイコロを1つ奪います`)
                curr_player.receive_dice(owner.pass_dice())
                if (owner.is_gameover()) {
                  logs.push(`${owner.name}がサイコロを全て失ったため敗北しました`)
                }
              } else {
                logs.push(`${owner.name}が勝利したため${curr_player.name}よりサイコロを1つ奪います`)
                owner.receive_dice(curr_player.pass_dice())
              }
              players[curr_pos] = owner
            }
          } else {
            logs.push(`${curr_player.name}自身が所有するマスに止まったため何も起こりませんでした`)
          }
          if (curr_player.is_gameover()) {
            logs.push(`${curr_player.name}がサイコロを全て失ったため敗北しました`)
          }
          break
        case Actions.Stay:
          curr_player.stay()
          until_goal = props.goal - curr_player.get_position();
          logs.push(`${curr_player.name}がその場に留まることを選択しました (残り: ${until_goal}マス)`)
          break
        case Actions.Teaming:
          curr_player.askForTeaming()
          props.setCurrMode(1)
          logs.push(`${curr_player.name}がチームへの参加を依頼中です`)
          return
          break
      }
    } else {
      logs.push(`${curr_player.name}は既に敗北しています`)
    }

    players[props.curr_index] = curr_player
    props.setPlayers(players)
    props.setActionLogs(logs)

    if (props.curr_index + 1 >= props.player_num) {
      props.setIndex(0)
    } else {
      props.setIndex(props.curr_index + 1)
    }
  }

  if (props.curr_mode === 0) {
    return (
      <div className={style.actionBtnBox}>
        <button className={style.actionBtn} onClick={() => {updateIndex(Actions.Throw_dice)}}>サイコロを振る</button>
        <button className={style.actionBtn} onClick={() => {updateIndex(Actions.Stay)}}>現在の位置に留まる</button>
        <button className={style.actionBtn} onClick={() => {updateIndex(Actions.Teaming)}}>チームへの参加を依頼する</button>
      </div>
    )
  } else {
    return (
      <div className={style.actionBtnBox}>
        Playerを選択してください
      </div>
    )
  }
}

export default PlayerActions