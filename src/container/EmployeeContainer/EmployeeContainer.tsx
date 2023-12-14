import TeamMember from "../../types/TeamMember"
import EmployeeTicket from "../../components/EmployeeTicket/EmployeeTicket"

type EmployeeContainerProps = {
    team: TeamMember[]
}

const EmployeeContainer = ({ team }: EmployeeContainerProps) => {
    return (
        <>
            {team.map(employee => <EmployeeTicket key={employee.id} teamMember={employee} />)}
        </>
    )
}

export default EmployeeContainer