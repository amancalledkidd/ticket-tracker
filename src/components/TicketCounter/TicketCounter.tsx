import { useState } from "react"
import minus from '../../assets/minus.svg'
import plus from '../../assets/plus.svg'
import "./TicketCounter.scss"

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
        <div className="ticket__counter">
            <h1>Tickets</h1>
            <img className="ticket__counter-symbol" id="minus-symbol" src={minus} alt="minus" onClick={handleDecrement}/>
            <p className="ticket__counter-count">{ticketCount}</p>
            <img className="ticket__counter-symbol" id="plus-symbol" src={plus} alt="plus" onClick={handleIncrement}/>
        </div>
    )
}

export default TicketCounter