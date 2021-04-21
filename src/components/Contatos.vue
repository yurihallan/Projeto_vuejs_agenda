<template>
    <div>
        <div class="container-sm">
            <div class="row">
                <div class="col-sm-2">
                    <router-link to="/ContatosForm" class="btn btn-primary" >Novo contato</router-link>
                </div>
                <div class="col-sm-8">
                    <h1 >{{ message }}</h1>
                </div>
            </div>
        </div>
        <table class="container table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
                <th scope="col">Sexo</th>
                <th scope="col">Telefone</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in contatos" v-bind:key="index">
                <th scope="row">{{item.id}}</th>
                <td>{{item.nome}}</td>
                <td>{{item.email}}</td>
                <td>{{item.sexo == 1 ? 'Masculino' : 'Feminino'}}</td>
                <td>{{item.telefone}}</td>
                <td><button type="button" class="btn btn-warning">Editar</button></td>
                <td><button type="button" class="btn btn-danger" @click.prevent="deletar(item.id)">Excluir</button></td>
            </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
import ContatosService from '../service/ContatosService';
export default {
    data(){
        return {
            message: 'Lista de Contato',
            contatos: null
        }
    },
    contatosService: null,
    
    created(){
        this.contatosService = new ContatosService();
    },
    mounted(){
        this.getAll();
    },
    methods: {
       
        getAll(){
            this.contatosService.getAll().then(data => {
            this.contatos = data.data;
            
             })
        },

        deletar:function(id){
            console.log(id);
            this.contatosService.delete(id).then(data =>{
                if(data.status === 200){
                    alert("Contato excluido com sucesso!");
                }
            }).catch(err => {
                this.erro = 'Erro ao apagar - ' + err
                alert(this.erro);
            })
        }
    }
};
</script>

<style>
</style>