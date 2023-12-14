import { ChangeEventHandler } from "react"

type DropdownBoxProp = {
    options: string[]
    handleOptionSelect: ChangeEventHandler<HTMLSelectElement>
}

const DropdownBox = ({ options, handleOptionSelect }: DropdownBoxProp) => {
    // Roles need to be set to stop duplicates
    // Logic needs to be in container
    // loop through roles creating options for each
    // handleClick for roles
    // should then loop through team prop passed down to container
    return (
        <select onChange={handleOptionSelect} >
            <option key='All' value="All"> All</option>
            {options.map((option, index) => 
                <option key={`Option ${index}`} value={option}> {option} </option>)}
        </select>
    )
}

export default DropdownBox