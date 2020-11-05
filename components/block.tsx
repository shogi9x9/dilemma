import style from '../styles/components/block.module.scss';
import getBlockPosition from '../modules/blocks/blockPositionCalculatorModule';

const Block = (props) => {
  const { blockSize, rowNum, midHeight, position_id } = props
  const [topPos, leftPos] = getBlockPosition(blockSize, rowNum, midHeight, position_id)

  const blockPos = {
    top: `${topPos}px`,
    left: `${leftPos}px`,
  }

  let blockNumPos = {}
  if (position_id + 1 < 10) {
    blockNumPos = {
      top: `${topPos + 17}px`,
      left: `${leftPos + 24}px`,
    }

  } else if (position_id + 1 < 100) {
    blockNumPos = {
      top: `${topPos + 17}px`,
      left: `${leftPos + 18}px`,
    }
  } else {
    blockNumPos = {
      top: `${topPos + 17}px`,
      left: `${leftPos + 12}px`,
    }
  }

  const blockSizeStyle = {
    width: `${blockSize}px`
  }

  return (
    <div>
      <div className={style.blockBox} style={blockPos} data-key={position_id}>
        <img src='circle.svg' className={`js-pos${position_id}`} style={blockSizeStyle}/>
      </div>
      <span className={style.blockId} style={blockNumPos}>{position_id}</span>
    </div>
  )
}

export default Block;