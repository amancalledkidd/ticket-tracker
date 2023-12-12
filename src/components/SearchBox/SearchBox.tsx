import { FormEventHandler } from 'react'
import './SearchBox.scss'

type SearchBoxProps = {
    searchedName: string
    handleSearchInput: FormEventHandler<HTMLInputElement>
}

const SearchBox = ({ searchedName, handleSearchInput}: SearchBoxProps) => {

    return (
        <div className='search-box'>
            <label className='search-box__title'>
                Search Employee: 
            </label>
            
            <input 
                className='search-box__input'
                type="text"
                value={searchedName}
                onInput={handleSearchInput}
            />
        </div>
    )
}

export default SearchBox