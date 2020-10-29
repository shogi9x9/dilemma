import React, { useRef, useEffect } from 'react';
import style from '../styles/components/persona.module.scss';
import logStyle from '../styles/components/actionLogs.module.scss'

const ActionLogs = ({ actionLogs }) => {
  const logsEndRef = useRef(null)

  const scrollToBottom = () => {
    logsEndRef.current.scrollIntoView({ behavior: "auto" })
  }

  useEffect(scrollToBottom, [actionLogs]);

  return (
    <div className={logStyle.actionLogs}>
      {actionLogs.map((log, index) => {
        return (
          <div className={style.messageWindow} key={`log_${index}`}>
            <div className={style.messageArea}>
              <div className={style.content}>
                <div className={style.arrowWhite}></div>
                <div className={style.arrowBlack}></div>
                <div className={style.backgroundWhite}></div>
                <div className={style.backgroundBlack}></div>
                <div className={style.textArea}>
                  <div key={`log_${index}`}>{`${index + 1}`}: {log}</div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      <div ref={logsEndRef} />
    </div>
  )
}

export default ActionLogs