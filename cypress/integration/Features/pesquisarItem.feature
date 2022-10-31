Feature: Adicionar item ao carrinho de compras

    Como um cliente
    Quero pesquisar um produto
    Para adicionar no carrinho de compras

  
    Scenario Outline: Selecionar item para inclusão no carrinho de compras
    Given que eu acesse a página da Amazon ecommerce
    And insira um "<item>" no campo pesquisa
    And acione o botão de pesquisar
    And clicar no item
    When adicionar ao carrinho de compras
    Then o item deverá ser incluído no carrinho com sucesso

    Examples:
        | item     |
        | panetone |



    Scenario Outline: Selecionar 3 quantidades do item para inclusão no carrinho de compras
    Given que eu acesse a página da Amazon ecommerce
    And insira um "<item>" no campo pesquisa
    And acione o botão de pesquisar
    And clicar no item
    And selecionar 3 quantidades
    When adicionar ao carrinho de compras
    Then o valor total do carrinho deverá ser equivatente a quantidade de itens

    Examples:
        | item     |
        | panetone |