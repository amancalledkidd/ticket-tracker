import './App.scss'
import TeamMember from './types/TeamMember'
import team from './data/team'
import EmployeeTicket from './components/EmployeeTicket/EmployeeTicket'

function App() {

  const testTeamMember: TeamMember = {
    id: 5,
    name: "Kumani",
    role: "Chief Joy officer"
  }

  return (
    <>
      <div className='app'>
      {team.map(employee => <EmployeeTicket key={employee.id} teamMember={employee} />)}
      
      <EmployeeTicket teamMember={testTeamMember}/>
      </div>
    </>
  )
}

export default App
