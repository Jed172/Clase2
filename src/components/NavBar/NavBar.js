import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import React from "react"
const NavBar = () => {
return (
  <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
       <img src="images/guitarlogo.png" alt="logo guitarra" class="logoGuitarra" />
    <a class="navbar-brand" href="#"><h1>Vildhjarta</h1>
 
        <h6>Instrumentos Musicales</h6> <h6>Audio Profesional</h6></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sobre Nosotros</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Catálogo
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Guitarras</a>
          <a class="dropdown-item" href="#">Bajos</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Parlantes</a>
          <a class="dropdown-item" href="#">Consolas</a>
        </div>
      </li>
    </ul>
    <CartWidget/>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder=" " aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
    </form>
  </div>
</nav>

)
}
export default NavBar