import React, { useState } from 'react';
import Link from 'next/link';
import style from '../../styles/components/home/loginForm.module.scss';
import Player from '../../classes/player';

const loginForm = () => {
  const [btnDisabled, setBtnDisabled] = useState(true);

  const trimInput = (e) => {
    const { value } = e.target;
    const length = value.length;
    if (length > 10) {
      e.target.value = value.slice(0, 10) 
    }
    if (length > 0) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true)
    }
  }

  return (
    <div className={style.loginForm}>
      <h2 className={style.title}>プレイヤー名入力(最大10文字)</h2>
      <div className={style.inputContainer}>
        <div className={style.inputBackGround}></div>
        <input type="text" placeholder="Nick Name" className={style.input} 
        onChange={(e) => trimInput(e)}/>
      </div>
      <div className={style.buttonContainer}>
        <div className={style.buttonBackGround}></div>
        <Link href="/games">
          <button className={style.button} disabled={btnDisabled}>ゲームに参加</button>
        </Link>
      </div>
    </div>
  )
}

export default loginForm
