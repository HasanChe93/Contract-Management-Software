import './App.css';
import Alert from './components/alert';
import Counter from './components/count';
import Func from './components/Func';
import Geg from './components/greet2';
import Greeting from './components/greeting';
import Message from './components/message';
import Testm from './components/test';
// import dgreeting from './components/greetingex';






function App() {
  return (
    <>
    <Counter />
  <div className='container-fluid'>
  <Alert />
  </div>

    
    <Message />
    
    <Func />
   
    <div className="App">
      <h1> Hasan</h1>
    </div>
 <Testm holding ="cheka"/>

 <Greeting />
 <Geg />
<Testm  name = "Hasan" holding ="tesA" />
<Testm  name = "Test 1" holding ="test b"/>
<Testm  name = "Test 2"/>



{/* <dgreeting name= "hasan" /> 
 <dgreeting name ="test" />
 <dgreeting name ="test2" /> */}

    </>
    
  );
}

export default App;
