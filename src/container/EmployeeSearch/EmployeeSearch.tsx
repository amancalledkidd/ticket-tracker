import EmployeeTicket from "../../components/EmployeeTicket/EmployeeTicket"
import SearchBox from "../../components/SearchBox/SearchBox"
import TeamMember from "../../types/TeamMember"
import { useState, FormEvent } from "react"

type EmployeeSearchProps = {
    team: TeamMember[]
}

const EmployeeSearch = ({ team }: EmployeeSearchProps) => {
    const [searchedName, setSearchedName] = useState<string>("")

    const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
        const input = event.currentTarget.value.toLowerCase()
        setSearchedName(input)
    }

    const employee = team.find(employee => 
        employee.name.toLowerCase().includes(searchedName)
    )

    const errorMsg = <p>Employee not found, please check spelling and try again!</p>

    return (
        <div>
            <SearchBox searchedName={searchedName} handleSearchInput={handleSearchInput} />

            {employee && searchedName.length > 3 && <EmployeeTicket teamMember={employee} />}
            {!employee && errorMsg}
            
        </div>
    )
}

export default EmployeeSearch