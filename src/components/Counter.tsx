import { useState } from "react";
import classes from './counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <div className={classes.counter}>
            <h1>{count}</h1>
            <button onClick={handleClick}>clack</button>
        </div>
    )
}

export default Counter;