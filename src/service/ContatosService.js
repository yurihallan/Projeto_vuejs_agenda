import axios from 'axios';

export default class ContatosService{

    url = "http://localhost:8080/contatos";

    //buscando todos os registro de contatos
    getAll(){
        return axios.get(this.url);
    }
    getId(id){
        return axios.get(this.url+'/'+id);
    }

    delete(id){
        return axios.delete(this.url+'/'+id);
    }

    salvar(contatos){
        return axios.post(this.url,contatos);
    }


    editar(id,contatos){
        return axios.put(this.url+'/'+id,contatos);
    }

    ///contatos/{id} - getById - 1 registro
    // /contatos - Post - inserindo novo registro
    //  /contatos/{id} - Put - Alternado um registro
    //  /contatos/{id} - Delete - excluindo um registro

}