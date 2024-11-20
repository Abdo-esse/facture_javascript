document.addEventListener('DOMContentLoaded', function() {

    // add initital total calculation first 
        //here
    
    // these are selection helpers
    const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0];
    



    
    




    


    // If you finish the above functions, consider adding a delete button
    
});

// This function updates the total amount in each row ( item price * Qte )

function updateItemTotal() {
    let totalItem = 0;
    let inputquantiter=document.querySelectorAll('.quantity')
    let inputunitPrice=document.querySelectorAll('.unitPrice')
    let itemTotal=document.querySelectorAll('.itemTotal')
    for (let i = 0; i < inputquantiter.length; i++) {
        totalItem=inputquantiter[i].value * inputunitPrice[i].value
        itemTotal[i].textContent=totalItem
        
    }
    updateInvoiceTotal() 
}


    // This function updates the total amount of the invoice (sum all Item totals)
    function updateInvoiceTotal() {
       
         
        let  invoiceTotal = document.getElementById('invoiceTotal');
       
        let total = 0;
        // Parcourir tous les totaux des articles
        const itemTotals = document.querySelectorAll(".itemTotal");
        itemTotals.forEach((itemTotal) => {
            total +=parseFloat(itemTotal.textContent);
            
            
        });
       
        
        // Mettre à jour le total de la facture
        invoiceTotal.textContent = total.toFixed(2)
    }
    updateInvoiceTotal()

    // Ajouter un nouveau item 
    let count = 3
    function addNewItem() {
        let invoiceTable = document.getElementById('invoiceTable')
        
        let tableRow = document.createElement('tr')
        
        count++
        
        let td1= document.createElement('td')
        td1.innerHTML=`Article ${count}`
        
        


        let td2= document.createElement('td')
        let td2input= document.createElement('input')
        td2input.setAttribute("class", "quantity")
        td2input.setAttribute("type","number")
        td2input.setAttribute("oninput","updateItemTotal()")
        td2input.setAttribute("min","0")
        td2.appendChild(td2input)


        let td3= document.createElement('td')
        let td3input= document.createElement('input')
        td3input.setAttribute("class", "unitPrice")
        td3input.setAttribute("type","number")
        td3input.setAttribute("step","0.01")
        td3input.setAttribute("oninput","updateItemTotal()")
        td3input.setAttribute("min","0")
        td3.appendChild(td3input)


        let td4= document.createElement('td')
        td4.setAttribute("class","itemTotal")
       
        tableRow.appendChild(td1)
        tableRow.appendChild(td2)
        tableRow.appendChild(td3)
        tableRow.appendChild(td4)
        console.log(tableRow);
        
        invoiceTable.appendChild(tableRow)
    }
    


 
  