import React, {useState} from 'react';
import s from "./Counter.module.scss"

const Counter = () => {
    const[count,setCount] = useState(0)
    const incr = () => {
        setCount(count + 1)
    }
    const decr = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h1 className={s.title}>{count}</h1>
            <button onClick={incr}>
                plus
            </button>
            <button onClick={decr}>
                minus
            </button>

        </div>
    );
};

export default Counter;