import React, { useState } from 'react';
import Link from 'next/link';
import style from '../../styles/components/home/loginForm.module.scss';

const loginForm = () => {
  const [btnDisabled, setBtnDisabled] = useState(true);

  const trimInput = (e, limit, changeState, onlyNumber) => {
    if (onlyNumber) {
      // 数字以外をトリミング
      e.target.value = e.target.value.replace(/[^0-9]/, '');
    }

    const { value } = e.target;
    const length = value.length;
    if (length > limit) {
      // 指定文字数を超える場合はトリミング
      e.target.value = value.slice(0, limit) 
    }

    if (changeState) {
      // 有効の場合のみボタンのdisabledを変更可能にする
      if (length > 0) {
        setBtnDisabled(false);
      } else {
        setBtnDisabled(true)
      }
    }
  }

  return (
    <div className={style.loginForm}>
      <h2 className={style.title}>プレイヤー名入力（最大10文字）</h2>
      <div className={style.inputContainer}>
        <div className={style.inputBackGround}></div>
        <input type="text" placeholder="Nick Name" className={style.input} 
        onChange={(e) => trimInput(e, 10, true, false)}/>
      </div>
      <h2 className={style.title}>ルームID（任意6ケタの数字）</h2>
      <div className={style.inputContainer}>
        <div className={style.inputBackGround}></div>
        <input type="text" placeholder="Room ID" className={style.input} 
        onChange={(e) => trimInput(e, 6, false, true)}/>
      </div>
      <div className={style.buttonContainer}>
        <div className={style.buttonBox}>
          <div className={style.buttonBackGround}></div>
          <Link href="/games">
            <button className={style.button} disabled={btnDisabled}>ルーム作成</button>
          </Link>
        </div>
        <div className={style.buttonBox}>
          <div className={style.buttonBackGround}></div>
          <Link href="/games">
            <button className={style.button} disabled={btnDisabled}>ゲームに参加</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default loginForm
