//your code here
() => { 
    cy.visit(baseUrl + "/main.html"); 
    
    // Use '#summary' to target the element with the id 'summary'
    cy.get('#summary').then(ans => { 
        expect(ans.text().trim().length).to.gt(0); 
    }); 
}
