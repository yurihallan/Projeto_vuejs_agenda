import Vue from 'vue';
import Router from 'vue-router';

import Home from "@/components/Contatos";
import Novo from "@/components/ContatosForm";
import Editar from "@/components/ContatosFormEdit";

Vue.use(Router);

const routes = [
    {
        name: 'home',
        path:'/',
        component: Home
    },
    {
        nome: 'novo',
        path:'/ContatosForm',
        component: Novo
        
    },
    {
        nome: 'Editar',
        path:'/ContatosFormEdit/:id',
        component: Editar,
        
        
        
    },
]

const router = new Router({ routes, mode: 'history' });

export default router;