import DropdownBox from "../../components/DropdownBox/DropdownBox"
import EmployeeTicket from "../../components/EmployeeTicket/EmployeeTicket"
import TeamMember from "../../types/TeamMember"
import { ChangeEvent } from "react"

type RoleSearchProps = {
    team: TeamMember[];
    role: string;
    setRole: (role: string) => void;
    setSearchName: (searchName: string) => void;
}

const RoleSearch = ({ team, role, setRole, setSearchName }: RoleSearchProps) => {

    // Uses map to turn team object into an array of roles
    // Then turn a set to remove duplicates
    const filteredRoles = Array.from(new Set(team.map(employee => employee.role)))
    
    // Handle role select switch
    // TODO: Add option for All roles on the list
    const handleRoleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedRole = (event.currentTarget.value)
        setRole(selectedRole)
        setSearchName("")
    }

    // Uses the selected role stored in State to filter employees into array
    const employeesByRole = team.filter(employee => employee.role === role)

    return (
        <>
            <DropdownBox options={filteredRoles} handleOptionSelect={handleRoleSelect}/>
            {role != 'All' && employeesByRole.map(employee => <EmployeeTicket key={employee.id} teamMember={employee} />)}
        </>
    )

}

export default RoleSearch