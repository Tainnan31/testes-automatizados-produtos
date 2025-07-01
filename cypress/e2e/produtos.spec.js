describe('Testes de Cadastro de Produtos', () => {
  beforeEach(() => {
    cy.visit('login.html')
    cy.get('input[type=email]').type('admin@admin.com')
    cy.get('input[type=password]').type('admin@123')
    cy.get('button[type=submit]').click()
  })

  it('CT004 - Cadastro de produto com dados válidos', () => {
    cy.get('#nome').type('Caneta')
    cy.get('#categoria').type('Papelaria')
    cy.get('#preco').type('2.50')
    cy.get('#quantidade').type('10')
    cy.get('#btn-salvar').click()
    cy.contains('Caneta').should('exist')
  })

  it('CT005 - Cadastro com nome vazio', () => {
    cy.get('#categoria').type('Papelaria')
    cy.get('#preco').type('3.00')
    cy.get('#quantidade').type('5')
    cy.get('#btn-salvar').click()
    cy.contains('Nome é obrigatório').should('exist')
  })

  it('CT006 - Cadastro com preço negativo', () => {
    cy.get('#nome').type('Borracha')
    cy.get('#categoria').type('Papelaria')
    cy.get('#preco').type('-1')
    cy.get('#quantidade').type('10')
    cy.get('#btn-salvar').click()
    cy.contains('Preço inválido').should('exist')
  })

  it('CT007 - Edição de produto', () => {
    cy.contains('Editar').first().click()
    cy.get('#nome').clear().type('Caneta Azul')
    cy.get('#btn-salvar').click()
    cy.contains('Caneta Azul').should('exist')
  })

  it('CT008 - Exclusão de produto', () => {
    cy.contains('Excluir').first().click()
    cy.on('window:confirm', () => true)
  })

  it('CT009 - Cadastro com quantidade não numérica', () => {
    cy.get('#nome').type('Cola')
    cy.get('#categoria').type('Papelaria')
    cy.get('#preco').type('4.00')
    cy.get('#quantidade').type('dez')
    cy.get('#btn-salvar').click()
    cy.contains('Quantidade inválida').should('exist')
  })

  it('CT010 - Cadastro com todos os campos vazios', () => {
    cy.get('#btn-salvar').click()
    cy.contains('Preencha todos os campos').should('exist')
  })
})
