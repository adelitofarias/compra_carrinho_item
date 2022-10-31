class CadastroLocator {


    fazerLogin = () => { return '#nav-link-accountList-nav-line-1'}

    criarConta = () => {return '#createAccountSubmit'}

    //Campos de preenchimento
    campoNome = () => {return ' #ap_customer_name'}
    campoEmail = () => {return '#ap_email'}
    campoSenha = () => {return '#ap_password'}
    campoConfirmacaoSenha = () => {return '#ap_password_check'}

    
    botaoContinuar = () => {return ''}

    verificarEmail = () => {return '.email-text'}

}

export default CadastroLocator;