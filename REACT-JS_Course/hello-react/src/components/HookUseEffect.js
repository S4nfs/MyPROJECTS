import React, { useState, useEffect } from 'react'

function HookUseEffect() {
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

    const [investors, addinvestors] = useState(0);
    const [founders, addfounders] = useState(0);

    const Increment = () => {
        addinvestors(investors + 1)
    }
    const Decrement = () => {
        addfounders(founders + 1)
    }

    useEffect(() => {                                   //useEffect is similer to componentDidUpdate as it renders 
        console.log("Hit")
    }, [founders])                                     //you might not want to run the effect on every change taking place in DOM, so array parameter tells which component you want to hit after update, empty array == componentDidMount

    return (
        <div>
            {startup}
            <button onClick={clickIt}> Change Startup Name?</button>
            <button onClick={Increment}> Investors {investors}</button>
            <button onClick={Decrement}> Founders {founders}</button>

        </div>
    )
}

export default HookUseEffect