<template>
  <div class="container" >
    <div class="row">
      <div class="col-sm-2">
        <router-link to="/" class="btn btn-primary">Voltar</router-link>
      </div>
      <div class="col-sm-8">
        <h1>{{ message }}</h1>
      </div>
    </div>
    <form class="ContatosForm btn btn-secondary" @submit.prevent="salvar">
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
        <label for="Sexo"> <b id="obrigatorio">*</b>Sexo:</label>
        <select v-model="selected" class="form-control">
          <option v-for="option in options" :value="option.value" :key="option.value" >
          {{ option.text }}
          </option>
        </select>
        
      </div>
      <br />
      <button type="submit" class="btn btn-success" id="btnSalvar">
        Salvar
      </button>
    </form>
  </div>
</template>

<script>
import ContatosService from "../service/ContatosService";

export default {
  name: "HelloWorld",
  data() {
    return {
      message: "Novo contato",
      contatos: {
        nome: "",
        email: "",
        telefone: "",
        sexo: "",
      },
      selected: "0",
      options:[
        {text: "Selecione uma opção", value: "0"},
        {text: "Masculino", value: "1"},
        {text: "Feminino", value: "2"}
      ]
    };
  },
  created() {
    this.contatosService = new ContatosService();
    
  },
  props: {
    msg: String,
  },
  methods: {
    salvar() {
      if (
        this.contatos.nome === "" &&
        this.contatos.email === "" &&
        this.contatos.telefone === "" &&
        this.contatos.sexo === ""
      ) {
        alert("Preencha os campos obrigatórios");
        return false;
      } 
      if (
        this.contatos.nome === "" &&
        this.contatos.email === "" &&
        this.contatos.telefone === "" &&
        this.contatos.sexo === 0
      ) {
        alert("Preencha os campos obrigatórios");
        return false;
      } 


      if (
        this.contatos.nome === ""       
      ) {
        alert("Preencha o campo Nome.");
        return false;
      } 

      if (
        this.contatos.email === ""
      ) {
        alert("Preencha o campo Email.");
        return false;
      } 

      if (
        this.contatos.telefone === ""
      ) {
        alert("Preencha o campo Telefone.");
        return false;
      } 
      
      if (
        this.selected === 0
      ) {
        alert("Preencha o campo Sexo.");
        return false;
      } 
      
      this.contatos.sexo = this.selected;
      
        this.contatosService.salvar(this.contatos).then((resposta) => {
            if (resposta.status === 200) {
              alert("Contato inserido com sucesso!");
              this.$router.back(-1);
            }
        }).catch((err) => {
            this.erro = "Erro ao - " + err;
            alert(this.erro);
        });
      
    },
  },
};
</script>

<style scoped>
.ContatosForm {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  
 
  margin: 0 auto;
  margin-left: 17rem;
  margin-right: 17rem;
  padding: 2rem;
}

#btnSalvar {
  margin-left: 28rem;
}


#obrigatorio {
  color: red;
}
</style>
