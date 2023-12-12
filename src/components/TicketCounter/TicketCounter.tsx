import { useState } from "react"
import minus from '../../assets/minus.svg'
import plus from '../../assets/plus.svg'

const TicketCounter = () => {

    const [ticketCount, setTicketCount] = useState<number>(0)

    const handleIncrement = () => {
        setTicketCount(ticketCount + 1)
    }

    const handleDecrement = () => {
        if (ticketCount > 0) {
            setTicketCount(ticketCount - 1)
        }
    }

    return (
        <div>
            <h1>Tickets</h1>
            <img src={minus} alt="minus" onClick={handleDecrement}/>
            <p>{ticketCount}</p>
            <img src={plus} alt="minus" onClick={handleIncrement}/>
        </div>
    )
}

export default TicketCounter