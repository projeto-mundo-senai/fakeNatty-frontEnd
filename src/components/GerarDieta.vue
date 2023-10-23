<template>

<div class="menu">
    
    <nav class="navbar border-bottom border-body" data-bs-theme="dark">
      <div class="container-fluid">
        <div class="justificarNavBar">
          <RouterLink class="navbar-brand item" to="/"> 
            <img src="./imagens/logo-branca.png" alt="aa" width="120" height="80">
          </RouterLink>
          
          <nav class="navbar border-body">
            <div class="container-fluid">
              <RouterLink class="navbar-brand" to="/gerarDieta">Faça seu plano aqui!</RouterLink>
            </div>
          </nav>
          
        </div>
        
        
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
    </nav>

</div>

<div class="mb-3">
    <label for="nome" class="form-label">Nome </label>
    <input type="nome" class="form-control" id="nomeId" aria-describedby="nomeHelp" v-model="dadosDto.pessoaDto.nome">
    <div id="nomeAjuda" class="form-text">Digite seu nome aqui</div>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Endereço de email: </label>
    <input type="email" class="form-control" id="emailId" aria-describedby="emailHelp">
    <div id="emailAjuda" class="form-text">Nós não vamos compartilhar seu email</div>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>

</template>
  
  

<script lang="ts">

import type { Dieta } from '@/interfaces/Dieta';
import type { Pessoa } from '@/interfaces/Pessoa';
import {defineComponent} from 'vue';

export default defineComponent ({

    name:'gerarDieta',
    data(){

return {


    dadosDto: {

        dietaDto: {



        } as Dieta ,

        pessoaDto: {



        } as Pessoa

    }
    


}


    }


})

</script>

