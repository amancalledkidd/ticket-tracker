import { ChangeEventHandler } from "react"
import './DropdownBox.scss'

type DropdownBoxProp = {
    options: string[]
    handleOptionSelect: ChangeEventHandler<HTMLSelectElement>
    label: string;
}

const DropdownBox = ({ label, options, handleOptionSelect }: DropdownBoxProp) => {
    // Roles need to be set to stop duplicates
    // Logic needs to be in container
    // loop through roles creating options for each
    // handleClick for roles
    // should then loop through team prop passed down to container
    return (
        <div className="dropdown-box">
            <label className='dropdown-box__title'>
                    {label} Search: 
                </label>
            <select className='dropdown-box__select' onChange={handleOptionSelect} >
                <option className='dropdown-box__option' key='All' value="All"> All</option>

                {options.map((option, index) => 
                    <option 
                        className='dropdown-box__option'
                        key={`Option ${index}`} 
                        value={option}> 
                        {option} 
                    </option>)}
            </select>
        </div>
    
    )
}

export default DropdownBox