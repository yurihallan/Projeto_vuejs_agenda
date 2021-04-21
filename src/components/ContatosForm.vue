<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-2">
        <router-link to="/" class="btn btn-primary">Voltar</router-link>
      </div>
      <div class="col-sm-8">
        <h1>{{ message }}</h1>
      </div>
    </div>
    <form class="ContatosForm">
      <div class="form-group col-sm-6">
        <label for="Nome">Nome Completo:</label>
        <input
          type="Nome"
          class="form-control"
          id="Nome"
          placeholder="Seu Nome"
        />
      </div>
      <div class="form-group col-sm-6">
        <label for="Email">Email:</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Seu email"
        />
      </div>
      <div class="form-group col-sm-6">
        <label for="Telefone">Telefone:</label>
        <input
          type="tel"
          class="form-control"
          id="Telefone"
          placeholder="Seu Telefone"
        />
      </div>
      <div class="form-group col-sm-6">
        <label for="Sexo">Sexo:</label>
        <select class="form-control" id="sexo">
          <option>Selecione uma opção</option>
          <option>Masculino</option>
          <option>Feminino</option>
        </select>
      </div>

      <button type="submit" class="btn btn-success">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data(){
    return{
      message: "Novo contato"
    }
  },
  props: {
    msg: String,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ContatosForm {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
