import React, { Component } from "react";

class LoginButton extends Component {
  render() {
    return <button>Iniciar Sesion</button>;
  }
}

class LogoutButton extends Component {
  render() {
    return (
      <div>
        <p>Bienvenido, usuario</p>
        <button> Cerrar sesion </button>
      </div>
    );
  }
}

function useConditionalRendering(MostrarA) {
  if (MostrarA) {
    return <LogoutButton></LogoutButton>;
  } else {
    return <LoginButton></LoginButton>;
  }
}

export default class ConditionalSections extends Component {
  constructor() {
    super();
    this.state = { isUserLogged: true };
  }

  render() {
    //Nomral
    //const Resultadodelacomprobacion = useConditionalRendering(this.state.MostrarA);
    //Ternaria
    const Resultadodelacomprobacion = this.state.isUserLogged ? (
      <LogoutButton />
    ) : (
      <LoginButton />
    );
    return (
      <div>
        <h4> CONDICIONALES</h4>

        {Resultadodelacomprobacion}
        {/* SIN LA CONSTANTE TAMBIEN SE PUEDE EJEMPLO */}

        {this.state.isUserLogged ? <LogoutButton /> : <LoginButton />}
      </div>
    );
  }
}
