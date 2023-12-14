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
    
    // Handles search input and resets Role State
    const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
        const input = event.currentTarget.value.toLowerCase()
        setSearchName(input)
        setRole('All')
    }
    // Employee
    const employee = team.find(employee => 
        employee.name.toLowerCase().includes(searchName)
    )

    const errorMsg = <p>No employees found, please check spelling and try again!</p>

    return (
        <div>
            <SearchBox label='Employee'searchedName={searchName} handleSearchInput={handleSearchInput} />

            {employee && searchName.length > 0 && 
                <div className="app__employee-ticket"> 
                    <EmployeeTicket teamMember={employee} />
                </div>
            }
            {!employee && errorMsg}
            
        </div>
    )
}

export default EmployeeSearch