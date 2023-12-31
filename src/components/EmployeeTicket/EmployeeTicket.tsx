import TeamMember from "../../types/TeamMember"
import Counter from "../Counter/Counter"
import './EmployeeTicket.scss'

type EmployeeProps = {
    teamMember: TeamMember
}

const EmployeeTicket = ( {teamMember}: EmployeeProps) => {
    return (
        <div className="employee__ticket">
            <h1 className="employee__ticket-name">{teamMember.name}</h1>
            <h1 className="employee__ticket-role">{teamMember.role}</h1>
            <Counter label="Tickets " />
        </div>
    )
}

export default EmployeeTicket