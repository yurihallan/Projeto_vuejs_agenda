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
    <form class="ContatosForm btn btn-secondary"  @submit.prevent="Editar">
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
         <select v-model="selected" class="form-control">
          <option v-for="option in options" :value="option.value" :key="option.value" >
          {{ option.text }}
          </option>
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
      id: this.$route.params.id,
      contatos: {
        nome:'',
        email:'',
        telefone:'',
        sexo:''
      },
       selected: "0",
      options:[
        {text: "Selecione uma opção", value: "0"},
        {text: "Masculino", value: "1"},
        {text: "Feminino", value: "2"}
      ]
    }
  },
  created(){
        this.contatosService = new ContatosService();
        
  },
  mounted(){
       
       this.contatosService.getId(this.id).then(response =>{
          this.contatos = response.data;
          this.selected = response.data.sexo;
       })
    },
  props: {
    msg: String,
  },
  methods:{
    Editar(){
      this.contatosService.editar(this.id,this.contatos).then(response => {
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
  
   
  margin: 0 auto;
  margin-left: 17rem;
  margin-right: 17rem;
  padding: 2rem;
}
  

#btnSalvar{
  margin-left: 28rem;
}

#obrigatorio{
  color: red;
}
</style>
