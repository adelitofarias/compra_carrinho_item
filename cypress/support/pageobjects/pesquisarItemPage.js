import PesquisaItemLocator from '../locators/pesquisarItemLocator'
const pesquisaItemLocator = new PesquisaItemLocator
const url = Cypress.config("baseUrl")

class PesquisaItemPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }
   
    // Preencher o conteúdo do intem
    inserirConteudoItem(item){
       console.log(item);
       cy.get(pesquisaItemLocator.campoPesquisa()).should('be.visible').type(item);
    }
    
    // Acionar pesquisa
    clickBotaoPesquisaItem(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.get(pesquisaItemLocator.botaoPesquisar()).click();
    }

    //Clica no item listado
    clickItem(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.get(pesquisaItemLocator.itemListado()).click();      
    }

    //Adciona ao carrinho
    clickAddItem(){
        cy.get(pesquisaItemLocator.addCarrinho()).click();      
    }

    // Verificar se os dados foram enviados com sucesso 
    visualizarSucesso() {
        cy.get(pesquisaItemLocator.checkAdicionado()).should('contain', 'Adicionado ao carrinho') 
        cy.get(pesquisaItemLocator.checkAdicionadoCarrinho()).should('contain', 1) 

    }

    qtdeItem(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.get(pesquisaItemLocator.selecionarQtdeItem()).select('3');      
    }

    visualizarValorTotal(){

       cy.get(pesquisaItemLocator.valorTotal()).contains("R$ 119,70")
       // cy.get(pesquisaItemLocator.valorTotal()).should('contains',"R$ 119,70")
       //cy.get(pesquisaItemLocator.valorTotal()).invoke("text").then((text) => text.trim()).contains('R$ 119,70');
       //cy.get(pesquisaItemLocator.valorTotal()).invoke("text").should("eq", '\nR$ 119,70\n');
       /*
        cy.get(pesquisaItemLocator.valorTotal())
        .invoke('text')
        .should((valor) => {
            expect("R$ 119,70").to.eq(valor.trim())
        })
       
        cy.get(pesquisaItemLocator.valorTotal())
        .invoke('text')
        .should('eq', 'RS 119,70')
        
        cy.get(pesquisaItemLocator.valorTotal()).invoke('text').then(($value) => {
            cy.log($value)
            //const num1 = parseFloat($value.text())
            var valor = $value.text();
            const num2 = parseFloat(valor);
            console.log(num2)
            const valor = $($value).val();
            console.log(valor)         
        })*/
    }   
}

export default PesquisaItemPage;