import React, { useState, useTransition } from 'react'

const UseTransition = () => {

    const nameList = [
        { id: 1, name: "Sagar" },
        { id: 2, name: "Vinamra" },
        { id: 3, name: "Rakshit" },
        { id: 4, name: "John" },
        { id: 5, name: "Doe" },
        { id: 6, name: "Alpha" },
        { id: 7, name: "Bravo" },

    ]
    const [isPending, startTransition] = useTransition()
    const [list, setList] = useState(nameList)
    const [name, setName] = useState('')

    // console.log(isPending)          //false
    function handleChange(e) {
        setName(e.target.value)
        startTransition(() => {        //lower priorty state, here list
            // console.log(isPending)  //true
            if (e.target.value === "") setList(nameList)
            else { setList(list.filter((item) => item.name.includes(e.target.value))) }
        })
    }
    return (
        <>
            <h1>UseTransition Hook (search my name)</h1>
            <input type="text" onChange={handleChange} value={name} />
            {isPending ? (
                <div>Writing...</div>
            ) : (
                list.map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))
            )}
        </>
    )
}

export default UseTransition