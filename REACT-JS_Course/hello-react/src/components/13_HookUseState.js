import React, { useState } from 'react'

function HookUseState() {
    //classic approach
    // const startup = useState("Chatnaut")
    // const clickIt = () => {
    //     startup[1]("Chatnaut Cloud Solutions")
    // }

    //modern approach, huh! it's just normal destructuring
    const [startup, newstartup] = useState("Chatnaut")  //second index is the function name----.
    const clickIt = () => {                             //                                     |
        newstartup("Chatnaut Cloud Solutions")          //       <<---------------------------' 
    }

    return (
        <div>
            {startup}
            <button onClick={clickIt}> Change Startup Name?</button>
        </div>
    )
}

export default HookUseState