import EmployeeTicket from "../../../components/EmployeeTicket/EmployeeTicket"
import SearchBox from "../../../components/SearchBox/SearchBox"
import TeamMember from "../../../types/TeamMember"
import { FormEvent } from "react"

type EmployeeSearchProps = {
    team: TeamMember[];
    searchName: string;
    setSearchName: (searchName: string) => void;
    setRole: (role: string) => void;
}

const EmployeeSearch = ({ team, searchName, setSearchName, setRole }: EmployeeSearchProps) => {
    

    const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
        const input = event.currentTarget.value.toLowerCase()
        setSearchName(input)
        setRole('All')
    }

    const employee = team.find(employee => 
        employee.name.toLowerCase().includes(searchName)
    )

    const errorMsg = <p>No employees not found, please check spelling and try again!</p>

    return (
        <div>
            <SearchBox searchedName={searchName} handleSearchInput={handleSearchInput} />

            {employee && searchName.length > 0 && <EmployeeTicket teamMember={employee} />}
            {!employee && errorMsg}
            
        </div>
    )
}

export default EmployeeSearch