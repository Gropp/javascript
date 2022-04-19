interface IUsuario{
    id: string
    email: string
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor'
}

//testa pelas propriedades das interfaces a que tipo de usuario pertence o usuario
function redirecionamento(usuario: IUsuario | IAdmin) {
    if('cargo' in usuario) {
        //redireciona para a area de administracao
    } else {
        //redireciona para area de usuario
    }
}