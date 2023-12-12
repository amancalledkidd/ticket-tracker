import './App.scss'
import team from './data/team'
import EmployeeTicket from './components/EmployeeTicket/EmployeeTicket'

function App() {

  return (
    <>
      <div className='app'>
        <section>
          <h1 className='app-heading'> Ticket Tracker</h1>
        </section>
        
        <section className='app-employee__ticket'>
          {team.map(employee => <EmployeeTicket key={employee.id} teamMember={employee} />)}
        </section>
      
      </div>
    </>
  )
}

export default App
