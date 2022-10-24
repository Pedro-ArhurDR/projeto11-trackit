import { useContext, useEffect } from "react"
import { CircularProgressbar,buildStyles } from "react-circular-progressbar"
import MyContext from "../contexts/myContext"
export default function CircularBar({progress}) {
    const {setProgress,datas} = useContext(MyContext)
    console.log('SUAS DATAS',datas)
    return(
        <CircularProgressbar
        value={[progress]}
        text={'Hoje'}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent",
          text:{
            position:'center',
          }
        })}
      />
    )
}