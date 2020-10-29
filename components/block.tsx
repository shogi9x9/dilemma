import style from '../styles/components/block.module.scss';

const Block = (props) => {
    const blockSize = 60;
    const rowNum = 18;
    const midHeight = 2;

    const { position_id } = props
    const quotient = Math.floor(position_id / (rowNum + midHeight))
    const remain = position_id % (rowNum + midHeight)
    let topPos = 0
    let leftPos = 0
    const midAreas = []
    for (let i = rowNum; i < rowNum + midHeight; i++) {
      midAreas.push(i)
    }
    if (midAreas.includes(remain)) {
      // rowとrowの中間
      topPos = quotient * (blockSize * (midHeight + 1)) + (remain - rowNum + 1) * blockSize
      if (quotient % 2 == 0) {
        leftPos = (rowNum - 1) * blockSize
      }
    } else {
      topPos = quotient * (blockSize * (midHeight + 1))
      if (quotient % 2 == 0) {
        leftPos = remain * blockSize
      } else {
        leftPos = blockSize * (rowNum - 1 - remain)
      }
    }

    const blockPos = {
      top: `${topPos}px`,
      left: `${leftPos}px`,
    }

    const blockSizeStyle = {
      height: `${blockSize}px`
    }

    return (
      <div className={style.blockBox} style={blockPos} data-key={position_id}>
        <img src='square.svg' style={blockSizeStyle}/>
      </div>
    )
}

export default Block;