import PropsDemo from './components/PropsDemo'
import UseStateDemo1 from './components/UseStateDemo'
import ConditionalRender1 from './components/ConditionalRender1'
import ConditionalRender2 from './components/ConditionalRender2'
import BootstrapDemo from './components/BootstrapDemo'

const App = () => {
  return (
    <>
    <BootstrapDemo/>
      <PropsDemo name='Tom' age={20}/>    
      <UseStateDemo1/>
      <ConditionalRender1 isLoggedIn={false}/>
      <ConditionalRender2 isLoggedIn={true}/>
      
    </>
  )
}

export default App
