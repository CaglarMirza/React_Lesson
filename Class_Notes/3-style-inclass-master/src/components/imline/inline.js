import React from 'react'
import { myStyles } from "./styles"

// const myStyles = {
//     paragraf:{
//         color: "blue",
//         fontSize:"1.2rem",
//         fontWeight:"bolder"
//     },
//     seconddiv:{
//         backgroundColor:"#b0b0b0"
//     }
// }

const Inline = () => {
    return (
        <div style={{backgroundColor:"red", color:"#fff"}}>
            <h1 style={{backgroundColor:"yellow", color:"black"}} >Hello from inline component</h1>
            <p style={myStyles.paragraf} >Inline styling in react</p>
            <div style={myStyles.seconddiv}>
                <p>Second div</p>
            </div>
        </div>
    )
}

export default Inline
