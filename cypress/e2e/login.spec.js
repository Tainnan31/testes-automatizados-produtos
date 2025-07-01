describe('Testes de Login', () => {
  beforeEach(() => {
    cy.visit('login.html')
  })

  it('CT001 - Login com credenciais válidas', () => {
    cy.get('input[type=email]').type('admin@admin.com')
    cy.get('input[type=password]').type('admin@123')
    cy.get('button[type=submit]').click()
    cy.url().should('include', 'produtos.html')
  })

  it('CT002 - Login com email incorreto', () => {
    cy.get('input[type=email]').type('errado@admin.com')
    cy.get('input[type=password]').type('admin@123')
    cy.get('button[type=submit]').click()
    cy.contains('Usuário ou senha inválidos').should('exist')
  })

  it('CT003 - Login com senha incorreta', () => {
    cy.get('input[type=email]').type('admin@admin.com')
    cy.get('input[type=password]').type('errado123')
    cy.get('button[type=submit]').click()
    cy.contains('Usuário ou senha inválidos').should('exist')
  })
})
