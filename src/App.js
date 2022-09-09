import './App.css';

const Hola = (props)=>{
  return (
    <div>
      <h1>HOLA {props.names}</h1>
    </div>
  )
}
const Chau = (props)=>{
  return(
    <div>
      <h1>CHAU {props.name}</h1>
    </div>
  )
}

function App() {
  const resu = prompt('text a number',1);
  return (
    <div className="App">
      {resu==='1' ? <Hola name = 'Tobias'/> : <Chau name='Mareco'/>}
    </div>
  );
}

export default App;

