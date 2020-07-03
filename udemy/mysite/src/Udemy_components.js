import React, { Component } from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: 'Daniel',
            contador: 0
        }

        this.aumentar = this.aumentar.bind(this); //Faz-se isso para que ele seja acessado
        this.diminuir = this.diminuir.bind(this);
    }
    aumentar(){
        let state = this.state;
        state.contador += 1;
        
        this.setState(state);
    }

    diminuir(){
        let state = this.state;
        state.contador -= 1;

        this.setState(state);
    }
    
    render(){
        return(
            <div>
                <h2>Contador</h2>
                <h3>
                    <button onClick={this.diminuir}>-</button>
                    {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h3>
            </div>
        )
    }
}

/*
class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} />
                <Social fb={this.props.facebook} tw={this.props.twitter}/>
                <hr/>
            </div>
        )
    }
}
class Sobre extends Component{
    render(){
        return(
            <div>
                <h2>Olá, sou o {this.props.nome}</h2>
                <h3>Cargo: {this.props.cargo}</h3>
                <h3>Idade: {this.props.idade}</h3>
            </div>
        )
    }
}
const Social = (props) => {
    return(
        <div>
            <a href={props.fb}>Facebook</a><br/>
            <a href={props.tw}>Twitter</a><br/>
        </div>
    )
}

function App(){
    return(
        <div>
            <h1>Conheça nossa equipe</h1> 
            <Equipe nome='Daniel' cargo='Programador' idade='21' facebook='https://www.facebook.com'/>
            <Equipe nome='Eduardo' cargo='Desenvolvedor' idade='30' twitter='https://www.twitter.com'/>
        </div>
    )
}
 */


export default App;
