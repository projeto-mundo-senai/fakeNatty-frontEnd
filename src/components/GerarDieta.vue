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

  <form @submit.prevent="salvarUsuario">
    <div class="cadastraPessoa">
      <div class="mb-3">
        <label for="nome" class="form-label">Nome</label>
        <input type="nome" class="form-control" id="nomeId" aria-describedby="nomeHelp" v-model="dadosDto.pessoaDto.nome">
        <div id="nomeAjuda" class="form-text">Digite seu nome aqui</div>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Endereço de email: </label>
        <input type="email" class="form-control" id="emailId" aria-describedby="emailHelp"
          v-model="dadosDto.pessoaDto.email">
        <div id="emailAjuda" class="form-text">Nós não vamos compartilhar seu email</div>
      </div>


      <div class="mb-3">
        <label for="idade" class="form-label">Idade</label>
        <input type="number" class="form-control" id="idadeId" v-model="dadosDto.pessoaDto.idade">
        <div id="idadeAjuda" class="form-text">Coloque sua idade em anos</div>
      </div>
      <div class="mb-3">
        <label for="altura" class="form-label">Altura</label>
        <input type="number" class="form-control" id="alturaId" v-model="dadosDto.pessoaDto.altura">
        <div id="alturaAjuda" class="form-text">Coloque sua altura em CM</div>
      </div>
      <div class="mb-3">
        <label for="peso" class="form-label">Peso</label>
        <input type="number" class="form-control" id="pesoId" v-model="dadosDto.pessoaDto.peso">
        <div id="pesoAjuda" class="form-text">Peso em KG</div>
      </div>

      <div class="cmb-3">
        <label for="inputState" class="form-label">Genêro</label>
        <select id="inputState" class="form-select" v-model="dadosDto.pessoaDto.genero">

          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="inputState" class="form-label">Pretenção Fisica</label>
        <select id="inputState" class="form-select" v-model="dadosDto.pessoaDto.pretencaoFisica">
          <option value="G">Ganhar Massa</option>
          <option value="M">Manter Massa</option>
          <option value="P">Perder Gordura</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="inputState" class="form-label">Nivel Atividade Fisica</label>
        <select id="inputState" class="form-select" v-model="dadosDto.pessoaDto.nivelAtividadeFisica">
          <option value="S">Sedentário</option>
          <option value="M">Moderado</option>
          <option value="A">Ativo</option>
          <option value="F">FakeNatty</option>
        </select>
      </div>
    </div>

    <div class="alimentacao">

      <div class="mb-3">
        <div class="card-header">Condições Alimentar</div>
        <span>Você é vegetariano?</span>
        <div class="form-check">

        </div>
        <input type="radio" name="vegetariano" value="true" v-model="dadosDto.dietaDto.vegetariano"><span>Sim</span>
        <input type="radio" name="vegetariano" value="false" v-model="dadosDto.dietaDto.vegetariano"><span>Não</span>
      </div>
      <div class="form-check">

        <span>Você é vegano?</span>
      </div>
      <input type="radio" name="vegano" value="true" v-model="dadosDto.dietaDto.vegano"><span>Sim</span>

      <input type="radio" name="vegano" value="false" v-model="dadosDto.dietaDto.vegano"><span>Não</span>
      <div class="form-check">
        <span>Você é Intolerante a Glutem?</span>
      </div>
      <input type="radio" name="glutem" value="true" v-model="dadosDto.dietaDto.glutem"><span>Sim</span>
      <input type="radio" name="glutem" value="false" v-model="dadosDto.dietaDto.glutem"><span>Não</span>
      <div class="form-check">
        <span>Você é Intolerante a Lactose?</span>
      </div>
      <input type="radio" name="lactose" value="true" v-model="dadosDto.dietaDto.lactose"><span>Sim</span>
      <input type="radio" name="lactose" value="false" v-model="dadosDto.dietaDto.lactose"><span>Não</span>
    </div>
    <button type="submit" class="btn btn-primary botao">Retire sua dieta aqui!</button>
  </form>
</template>

<script lang="ts">


import type { Dieta } from '@/interfaces/Dieta';
import type { Pessoa } from '@/interfaces/Pessoa';
import http from '@/http'
import { defineComponent } from 'vue';

export default defineComponent({

  name: 'gerarDieta',
  data() {
    return {
      dadosDto: {
        dietaDto: {
        } as Dieta,
        pessoaDto: {


        } as Pessoa
      }
    }
  },
  methods: {
    async salvarUsuario() {
      const response = await http.post("/fakenatty", this.dadosDto)
      this.$router.push("/mostrarDieta/" + response.data.dietaDto.caminhoArquivo)
    }
  }
})

</script>

<style>
.botao {

  margin-left: 40%;

}

.cadastraPessoa {}

.form-text {

  color: springgreen !important;

}

.separaItensIguais {

  display: flex;
  align-items: center;
  margin: 15px;
  padding: 0%;
}
</style>