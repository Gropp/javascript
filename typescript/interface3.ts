interface IUsuario{
    id: string
    email: string
    //o ? diz que sao opcionais esses valores
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario'
}

function redireciona(usuario: IUsuario){
    if(usuario.cargo) {
        //redirecionar(usuario.cargo)
    }
    // redireciona para outra tela
}