import React, { useRef, useEffect } from 'react';
import style from '../styles/components/actionLogs.module.scss';

const ActionLogs = ({ actionLogs }) => {
  const logsEndRef = useRef(null)

  const scrollToBottom = () => {
    logsEndRef.current.scrollIntoView({ behavior: "auto" })
  }

  useEffect(scrollToBottom, [actionLogs]);

  return (
    <div className={style.actionLogs}>
      {
        actionLogs.map((log, index) => {
          return (
            <p key={`log_${index}`}>{`${index + 1}`}: {log}</p>
          )
        })
      }
      <div ref={logsEndRef} />
    </div>
  )
}

export default ActionLogs