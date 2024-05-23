const gerarSenha = ()=>{
    let senha: string = ''
    const padrao: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*?'

    for (let i = 0; i < 8; i++) {
        senha+=padrao.charAt(Math.floor(Math.random()*padrao.length))
    }
    return senha
}

export default gerarSenha