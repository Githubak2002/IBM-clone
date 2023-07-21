
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './nav.jsx';
import Left from './left.jsx';
import Section from './section.jsx';

import { FiMenu } from "react-icons/Fi";


function App() {
  return (
    <div className='bg-black'>
      
      <Nav />
      <Left />
      <Section />
      
    </div>
  )
}

export default App
