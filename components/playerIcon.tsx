import style from '../styles/components/playerIcon.module.scss';
import getBlockPosition from '../modules/blocks/blockPositionCalculatorModule';
import { useState, useEffect, useRef } from 'react';

const playerIcon = (props) => {
  let { blockSize, rowNum, midHeight, curr_pos, target_pos } = props
  const [topPos, leftPos] = getBlockPosition(blockSize, rowNum, midHeight, curr_pos)

  const padding = 10;
  const width = blockSize - (2 * padding);
  
  let init_pos = {
    top: `${topPos + padding}px`,
    left: `${leftPos + padding}px`,
    width: `${width}px`,
  }

  const [playerPos, setPlayerPos] = useState(init_pos)
  useEffect(() => {
    const time = 150;
    const timer = setInterval(() => {
      if (curr_pos < target_pos) {
        curr_pos++;
        const pad = 10;
        console.log(curr_pos)
        console.log(target_pos)
        const [topPos, leftPos] = getBlockPosition(blockSize, rowNum, midHeight, curr_pos)
        const newPos = {
          top: `${topPos + pad}px`,
          left: `${leftPos + pad}px`,
          width: `${width}px`,
        }
        setPlayerPos(newPos)
      }
    }, time)
    return () => clearTimeout(timer);
  }, [curr_pos, target_pos])

  

  return (
    <>
      <img src='player.svg' className={`${style.playerIcon} js-player`} style={playerPos} data-key/>
      <script>updatePosition()</script>
    </>
  )
}

export default playerIcon
