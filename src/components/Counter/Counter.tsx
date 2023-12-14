import { useState } from "react"
import minus from '../../assets/minus.svg'
import plus from '../../assets/plus.svg'
import "./Counter.scss"

type CounterProps = {
    label: string;
}

const Counter = ({ label }: CounterProps) => {

    const [count, setCount] = useState<number>(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className="counter">
            <h1>{label}</h1>
            <img className="counter-symbol" id="minus-symbol" src={minus} alt="minus" onClick={handleDecrement}/>
            <p className="counter-count">{count}</p>
            <img className="counter-symbol" id="plus-symbol" src={plus} alt="plus" onClick={handleIncrement}/>
        </div>
    )
}

export default Counter