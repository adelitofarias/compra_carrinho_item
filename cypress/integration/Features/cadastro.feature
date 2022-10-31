Feature: Cadastrar novo usario na plataforma

    Como potencial cliente
    Quero realizar o cadastro
    Para comprar produtos da plataforma

  
    Scenario: Preencher os dados de novo usuario na plataforma
    Given a pagina da Amazon ecommerce esteja no menu principal
    And acione o menu de cadastro
    When prencher os valores
    Then todos os campos estaram preenchidos