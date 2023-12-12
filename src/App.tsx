import './App.scss'
import team from './data/team'
import EmployeeTicket from './components/EmployeeTicket/EmployeeTicket'
import EmployeeSearch from './container/EmployeeSearch/EmployeeSearch'

function App() {

  return (
    <>
      <div className='app'>
        <section>
          <h1 className='app-heading'> Ticket Tracker</h1>
        </section>

        <section>
          <EmployeeSearch team={team} />
        </section>

        <section className='app-employee__ticket'>
          {team.map(employee => <EmployeeTicket key={employee.id} teamMember={employee} />)}
        </section>

      
      </div>
    </>
  )
}

export default App
