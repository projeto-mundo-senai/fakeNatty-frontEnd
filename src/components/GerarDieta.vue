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

<<<<<<< HEAD
  </div>
  <form @submit.prevent="salvarUsuario">
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
  </form>
=======
</div>

<div class="cadastraPessoa">

  <div class="mb-3">
    <label for="nome" class="form-label">Nome </label>
    <input type="nome" class="form-control" id="nomeId" aria-describedby="nomeHelp" v-model="dadosDto.pessoaDto.nome">
    <div id="nomeAjuda" class="form-text">Digite seu nome aqui</div>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Endereço de email: </label>
    <input type="email" class="form-control" id="emailId" aria-describedby="emailHelp" v-model="dadosDto.pessoaDto.email">
    <div id="emailAjuda" class="form-text">Nós não vamos compartilhar seu email</div>
  </div>
  <div>
<label for="cars">Intensidade atividade fisica: </label>
<select name="cars" id="cars">
  <option value="leve">Leve</option>
  <option value="moderado">Moderado</option>
  <option value="alto">Intenso=</option>
  <option value="intenso">FakeNatty (Muito Intenso)</option>
</select>
</div>
</div>
  <button type="submit" class="btn btn-primary">Retire sua dieta aqui!</button>
>>>>>>> a4f1139d454f07a1f440645596dd9da0cd572742
</template>
<script lang="ts">

import type { Dieta } from '@/interfaces/Dieta';
import type { Pessoa } from '@/interfaces/Pessoa';
import http from '../http';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'gerarDieta',
  data() {
    return {
      dadosDto: {
        dietaDto: {
        } as Dieta,
        pessoaDto: {
          peso: 80,
          altura: 170,
          idade: 20
        } as Pessoa
      }
    }
  },
  methods: {
    async salvarUsuario() {
      await http.post("/fakenatty", this.dadosDto)
    }
  }
})
</script>

<style>

.cadastraPessoa{


  


}

.form-text {

  
color: springgreen !important  ;

}

</style>