// instalar extensao do vscode que cria todo componente:Snippet ES7
import React from 'react'

export const MyNavbar = () => {

// criar um array com json onde vou colocar as infor q precisa ter na minha navBar
    const menus = [
        {
            nome:'Produtos',
            link:'/produtos'
        },
        {
            nome:'Usuarios',
            link:'/usuarios'
        },{
            nome:'Categorias'
            link:'/categorias'
        }
    ]
  const gerarMenus = () =>{
    //pq usar o MAP e nao FOREACH? Pq quero gerar uma nova lista, o foreach altera a lista original
    menus.map() //Gerar elementos de Li automatico.
  }

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
