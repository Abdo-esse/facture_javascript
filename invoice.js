document.addEventListener('DOMContentLoaded', function() {

    // add initital total calculation first 
        //here
    
    // these are selection helpers
    const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0];
    const invoiceTotal = document.getElementById('invoiceTotal');



    // This function updates the total amount in each row ( item price * Qte )
    


    // This function updates the total amount of the invoice (sum all Item totals)
    function updateInvoiceTotal() {
       
    }


    // Ajouter un nouveau item 
    function addNewItem() {
        

    }


    // If you finish the above functions, consider adding a delete button
    updateItemTotal()
});
let total = 0;
function updateItemTotal(row) {
    let inputquantiter=document.querySelectorAll('.quantity')
    let inputunitPrice=document.querySelectorAll('.unitPrice')
    let itemTotal=document.querySelectorAll('.itemTotal')
    for (let i = 0; i < inputquantiter.length; i++) {
        total=inputquantiter[i].value * inputunitPrice[i].value
        itemTotal[i].textContent=total
        
    }
  
    
   
}