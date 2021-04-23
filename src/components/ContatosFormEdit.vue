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
    <form class="ContatosForm" @submit.prevent="Editar">
      <div class="form-group col-sm-8">
        <label for="Nome"><b id="obrigatorio">*</b>Nome Completo:</label>
        <input
          type="Nome"
          class="form-control"
          id="Nome"
          placeholder="Seu Nome"
          v-model="contatos.nome"
        />
      </div>
      <div class="form-group col-sm-8">
        <label for="Email"><b id="obrigatorio">*</b>Email:</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Seu email"
           v-model="contatos.email"
        />
      </div>
      <div class="form-group col-sm-8">
        <label for="Telefone"><b id="obrigatorio">*</b>Telefone:</label>
        <input
          type="tel"
          class="form-control"
          id="Telefone"
          placeholder="Seu Telefone"
           v-model="contatos.telefone"
        />
      </div>
      <div class="form-group col-sm-8">
        <label for="Sexo"><b id="obrigatorio">*</b>Sexo:</label>
        <select class="form-control" id="sexo"  v-model="contatos.sexo">
          <option>Selecione uma opção</option>
          <option value="1">Masculino</option>
          <option value="2">Feminino</option>
        </select>
      </div>
      <br/>
      <button type="submit" class="btn btn-success" id="btnSalvar">Salvar</button>
    </form>
  </div>
</template>

<script>
import ContatosService from '../service/ContatosService';

export default {
  name: "HelloWorld",
  data(){
    return{
      message: "Editar contato",
      id: window.location.href.split('/'),
      contatos: {
        nome:'',
        email:'',
        telefone:'',
        sexo:''
      }
    }
  },
  created(){
        this.contatosService = new ContatosService();
        
  },
  mounted(){
       
       this.contatosService.getId(this.id[4]).then(response =>{
          this.contatos = response.data;
       })
    },
  props: {
    msg: String,
  },
  methods:{
    Editar(){
      this.contatosService.editar(this.id[4],this.contatos).then(response => {
          if(response.status === 200){
            alert("Contato Editado com sucesso!");
            this.$router.back(-1);
          }
      })
    }
  }
};


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ContatosForm {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
   margin: 0 auto;
  margin-left: 17rem;
  padding: 2rem;
}
  

#btnSalvar{
  margin-left: 28rem;
}

#obrigatorio{
  color: red;
}
</style>
