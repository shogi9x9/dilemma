import style from '../styles/components/block.module.scss';
import dynamic from "next/dynamic";

const Block = (props) => {
    const radian = props.position_id * 96 / 360
    const left = (window.innerWidth - 300) / 2 + Math.sin(radian) * 200
    const blockStyle = {
      marginLeft: left - 50
    }

    return (
      <div className={style.block} style={blockStyle}>
        <img src='pentagon.svg'/>
      </div>
    )
}

export default Block;