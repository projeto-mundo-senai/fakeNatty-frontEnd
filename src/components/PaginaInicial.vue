<template>
  <div class="menu">
    
    <nav class="navbar border-bottom border-body" data-bs-theme="dark">
      <div class="container-fluid">
        <div class="justificarNavBar">
          <a class="navbar-brand item" href="./GerarDieta.vue">
            <img src="./imagens/logo-branca.png" alt="aa" width="80" height="80">
          </a>
          
          <nav class="navbar border-body">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Faça seu plano aqui!</a>
            </div>
          </nav>
          
        </div>
        
        
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
    </nav>
    
    <div class="alinhaImagemETexto">
      
      <img class="imagemEsquerda" src="./imagens/aristotelesSemFundo.png" alt="penis" width="360" height="360"> 
      <p class="fonte">
        
          Nenhum cidadão tem o direito de ser um amador em matéria de 
        treinamento físico. Que desgraça é para o homem 
        envelhecer sem nunca ver a beleza e a força do que o seu corpo é 
        capaz. 
        
        

                
      </p>

      
        <p class="item">

            Sócrates.

        </p>
      
      
    </div>
    
    
    
    <img src="./imagens/logo-branca.png" alt="logo site" class="alinhaImagemETexto">
    <h1 class="item">Quem nós somos?</h1>
    
      <p>
        Nós somos a Fake Natty e vamos te fazer parecer um monstro!. Nossa empresa nasceu do desejo de ajudar você a conseguir o que deseja do jeito
        mais simples possivel e facil possivel. Com nossa ajuda, você pode montar um plano alimentar 
        que se encaixe no seu estilo de vida seguindo os objetivos que você deseja alcançar.
      </p>
  
    
    
  </div>
</template>

<style>

.alinhaImagemETexto{
  
  max-width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  max-width: 100%;
  margin-bottom: 0%;
  
  
}

.justificarNavBar{
  
  
  color: rgb(132, 17, 116);
  justify-content: left;
  display: flex;
  padding-bottom: 2px;
  
}

.item {
  
  
  padding: 100px;
  margin-bottom: 5px;

}

.fonte{
  
  max-width: 50%  
}

.imagemEsquerda{

  max-width: 50%; 
  margin-right: 10px;

}
</style>

