import { useState } from 'react'

const UseStateDemo1 = () => {

    const [count, setCount] = useState(0)
    const[title,setTitle] = useState('Click')

    return (
        <div>
            <h1>count : { count }</h1>
            <button onClick={ () => setCount(count + 1) }>Increment</button>
            
            <button onClick={()=>setTitle('Welcome...')}>{title}</button>
        </div>
    )
}

export default UseStateDemo1
