const getBlockPosition = (blockSize: number, rowNum: number, midHeight: number, position_id: number): [number, number] => {
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
  return [topPos, leftPos]
}

export default getBlockPosition