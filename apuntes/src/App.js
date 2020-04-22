import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConditionalSections from './section/conditional'
import cats from './data/cats.json'
//Una manera de hacerlo
function Primercompo(props){
  return  <p> { props.title }</p>
}
// Solo con una linea 
const Primercompounalinea = (props )=> <p> { props.title }</p>

//COMPONENTE con CLASSE
class PrimerComonenteClasse extends Component{

  render(){
    return  <h2> { this.props.title }</h2>
  }

}

class Text extends Component{

  render(){
    //Estructuracion para no repetir this.props
    //Los valores de la prop no se pueden modificar
    const {isActivated,boolean,arrayOfitems,multiplicar,objectconInfo,title}=this.props;
    const textoSegunBol = boolean ? 'Cierto':'Falso';
    const activadoo = isActivated ? 'On':'Off';
    //function para doblar elementos

    const doblarElemnts = arrayOfitems.map(n=>n*2)

      //fuynction con funcion en props
      const doblarElemntsprops = arrayOfitems.map(multiplicar)

    return  (
    
    <div>

          <p> { this.props.text }</p>
          <p> { this.props.number }</p>
          <p> { textoSegunBol }</p>
          <p> { activadoo }</p>
          <p> { doblarElemnts.join(',')  }</p>
          <p> { objectconInfo.key }</p>
          <p> { doblarElemntsprops.join(',') }</p>
          {title}

    </div>

    
    )
  }

}

class Contador extends Component{
  //Obtenemos los valores de las props en el constructor para poder acceder a ellas
  constructor(props){
    super(props)
    //PARA MODIFICAR ELEMENTOS DEL STATE HACE FALTA PONER EL .SETINTERVAL , cada segundo suma +1 al contador
    this.state={contador:this.props.contadorInicial}
    setInterval(()=>{
      this.setState({contador:this.state.contador+1})
    },1000)
  }
  render(){
    return <ContadorNumero numero = {this.state.contador}></ContadorNumero>
  }
}

//OBTENEMOS LOS ITEMS DEL JSON Y LOS ENVIAMOS AL COMPONENTE DETALLES
class ARRAYDEITEMS extends Component{
  
  render(){

    return(
      <div>
        <h4>LISTA DE ELEMENTOS</h4>
        <ul>{
          cats.map(cat=>{
            return <ARRAYDETALLES key={cat.id} cat={cat}/>
          })
        }
        </ul>
      </div>
    );  
  }

}

//Pasamos el elemento del array para ver el objeto y su detalle
class ARRAYDETALLES extends Component{
  render(){
    const {cat} = this.props
    return(<li>
      <p> <strong>Nombre: </strong>{cat.name}</p>
      <p> <strong>Nombre: </strong>{cat.company}</p>
      
      </li>
   )
  }


}
//Creamos los valores de default de las props
Contador.defaultProps={
  contadorInicial:0
}
//Obtenemeos el estate del contador.
class ContadorNumero extends Component{
 
  render(){
    //Ver si el componento esta cargando y actualizando 
    console.log('ContadorNumero render()')
    return <span>{this.props.numero}</span>
  }
}

class ListadeArrays extends Component{
 
  render(){
    const number = [1,1,3,4,5]
    //Ver si el componento esta cargando y actualizando 
    
    return <span>{number.map((number,index)=>{
    return <p key={index}> Soy el numero  {number} </p>
    })}</span>
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Primercompo title="Priemr componente con react con props" ></Primercompo>
        <Primercompounalinea title="COMPONENTE 1 LIENA"/>
        <PrimerComonenteClasse title="CLASSE CON COMPONENTE"></PrimerComonenteClasse>
        
        <Text 
        //Las props se ordenaran de manera alfabéticamente
        arrayOfitems={[2,3,50]}
        objectconInfo={{key:'prueba' ,key2:'Jordi' }}
        boolean={true} 
        isActivated
        multiplicar={ (number) => number*4 }
        text="una clase con texto es <p></p> " 
        number={10} 
        title={<h1>PRUEBA DE ENVIAR DATOS CON HTML</h1>}
        
        >
      
        </Text>
      <Contador  contadorInicial={10}></Contador>

      <ConditionalSections></ConditionalSections>
      <ListadeArrays></ListadeArrays>
      <ARRAYDEITEMS></ARRAYDEITEMS>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
