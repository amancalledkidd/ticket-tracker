import { useState } from "react"

const TicketCounter = () => {

    const [ticketCount, setTicketCount] = useState<number>(0)

    const increment = () => {
        setTicketCount(ticketCount + 1)
    }

    const decrement = () => {
        setTicketCount(ticketCount - 1)
    }

    return (
        <div>
            <h1>Counter</h1>
        </div>
    )
}

export default TicketCounter