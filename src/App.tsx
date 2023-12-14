import './App.scss'
import team from './data/team'
import EmployeeSearch from './container/EmployeeSearch/EmployeeSearch/EmployeeSearch'
import EmployeeContainer from './container/EmployeeContainer/EmployeeContainer'
import RoleSearch from './container/RoleSearch/RoleSearch'
import { useState } from 'react'

function App() {
  const [role, setRole] = useState<string>('All')
  const [searchName, setSearchName] = useState<string>("")

  return (
    <>
      <div className='app'>
        <section>
          <h1 className='app-heading'> Ticket Tracker</h1>
        </section>

        <section className='app__employee-search'>
          <EmployeeSearch searchName={searchName} setSearchName={setSearchName} setRole={setRole} team={team} />
        </section>

        <section className='app__role-search'>
          <RoleSearch role={role} setRole={setRole} setSearchName={setSearchName} team={team}/>
        </section>

        <section className='app__employee-ticket'>
          {searchName === "" && role === "All" && <EmployeeContainer team={team}/>}
        </section>

      
      </div>
    </>
  )
}

export default App
