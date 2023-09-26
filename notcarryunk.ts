enum tipoDeUsuario {
    admin,
    aluno,
    professor,
    convidado
}

function verificarTipoDeUsuario(tipo: tipoDeUsuario): void {

    switch(tipo) {
        case tipoDeUsuario.admin:
            console.log("Funções de administradores desbloqueadas");
            break
        case tipoDeUsuario.aluno:
            console.log("Olá aluno, a plataforma está liberada.");
            break;
        case tipoDeUsuario.professor:
            console.log("Olá professor, as suas funções já estão liberadas!");
            break;
        case tipoDeUsuario.convidado:
            console.log("Ola convidado, bom passeio pelo sistema!");
            break;
        default:
            break;
    }
}
verificarTipoDeUsuario(tipoDeUsuario.convidado)