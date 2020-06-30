import React, { useState, useEffect } from 'react'

const friends = [
    { id: 1, name: 'ddd11' },
    { id: 2, name: 'ddd22' },
    { id: 3, name: 'ddd33' },
]

export default function Test() {
    const [idfriend, setIdfriend] = useState(1)
    const isFriendOnline = useFriendStatus(idfriend)

    const [count, setCount] = useState(0)
    const [surname, setSurname] = useState('surname')
   
    useEffect(() => {
        document.title = ` ewfe ${count}`
    }, [count])

    useEffect(function setLocal() {
        localStorage.setItem('wef', surname)
    })

    function useFriendStatus() {
       
    }

    return (
        <>
        <div>
            <p color={isFriendOnline ? 'red' : 'green'}></p>
            <select name="" id="" value={idfriend} onChange={e => setIdfriend(Number(e.target.value))}>

            {friends.map(friend => (
                <option key={friend.id} value="friend.id">{friend.name}</option>
            ))}
</select>
            {surname !== '' ?
                <div>{surname + count}</div> :
                <div>{surname}</div>
            }
    
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>bb</button>
            <button onClick={() => setCount(count - 1)}>bb</button>
        </div>
        </>
    )
}
