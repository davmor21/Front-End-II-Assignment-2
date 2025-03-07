import './App.css'
import Greeting from './Greeting';
import UserInfo from './UserInfo';
import TaskComponent from './TaskComponent';
import Counter from './Counter';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import DigitalClock from './DigitalClock';
import handleAlert from './handleAlert';
import TaskForm from './TaskForm'

function App(){
  return (
    <>
    <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </div>
    
      <div>
        <Greeting name="Davon"/>
        <Greeting name="LeBron" />
        <DigitalClock />
        <UserInfo name="LeBron"
                  job="NBA Player" 
                  handleClick={handleAlert}/>
        <Counter />
        <TaskComponent />
        <TaskForm />
      </div>
    </>
  )
}

export default App