window.onload = () => {
    // TODO :: can all be consts
    let products = document.querySelectorAll('.tabeldeel1 tbody tr'); // nice use of query selector
    let productP = document.getElementsByClassName('productPrice');
    let subT = document.getElementsByClassName('productTotalCost');
    let productQ = document.getElementsByClassName('productQuantity');
    let productN = document.getElementsByClassName('productnaam');
    // TODO :: try using an array with objects, instead of multiple arrays
    let price = []
    let subTotal = [];
    let prodQuantity = [];
    let productNamen = [];

    // TODO :: try to work the other way around. Define products in here and place them in the html
    // TODO :: can combine these 4 for loops
    for (let i = 0; i < productP.length; i++) {
        price[i] = parseFloat(productP[i].innerHTML).toFixed(2);
    }

    for(let i = 0; i < subT.length; i++) {
        subTotal[i] = parseFloat(subT[i].innerHTML).toFixed(2);
    }

    for(let i = 0; i < productQ.length; i++) {
        prodQuantity[i] = parseInt(productQ[i].innerHTML);
    }

    for (let i = 0; i < productN.length; i++) {
        productNamen[i] = productN[i].innerHTML;
    }

    console.log('Productprijzen:'+ price);
    console.log('SubTotalen:'+ subTotal);
    console.log('Product aantallen'+ prodQuantity);
    console.log('Product namen'+ productNamen);

    products.forEach( element => {
        element.querySelector('.min').addEventListener('click', minProduct);
        element.querySelector('.plus').addEventListener('click', plusProduct);
    });


    // TODO :: min and plus uses a lot of the same code, you could put that in a function to reduce the amount of code

    function minProduct(event) {
        console.log(event)
        // TODO :: use const where possible
        let total = 0;
        let tableRowParent = event.target.parentElement.parentElement;
        let productNaam = tableRowParent.id;
        let indexInArray = productNamen.indexOf(productNaam);
        let quantity = tableRowParent.querySelector('.productQuantity');
        let subTotalElement = tableRowParent.querySelector('.productTotalCost');
        let totals = document.getElementById('totalCost');

        if (prodQuantity[indexInArray] > 0) {
            prodQuantity[indexInArray]--;
            subTotal[indexInArray] = (price[indexInArray] * prodQuantity[indexInArray]).toFixed(2);
            quantity.innerHTML = prodQuantity[indexInArray];
            subTotalElement.innerHTML = subTotal[indexInArray];

            for (let i = 0; i < subTotal.length; i++) {
                total += parseFloat(subTotal[i]);
            }
            
            totals.innerHTML = total.toFixed(2);
        }
    }

    function plusProduct(event) {
        // TODO :: use const where possible
        let total = 0;
        let tableRowParent = event.target.parentElement.parentElement;
        let productNaam = tableRowParent.id;
        let indexInArray = productNamen.indexOf(productNaam);
        let quantity = tableRowParent.querySelector('.productQuantity');
        let subTotalElement = tableRowParent.querySelector('.productTotalCost');
        let totals = document.getElementById('totalCost');

        prodQuantity[indexInArray]++;
        subTotal[indexInArray] = (price[indexInArray] * prodQuantity[indexInArray]).toFixed(2);

        quantity.innerHTML = prodQuantity[indexInArray];
        subTotalElement.innerHTML = subTotal[indexInArray];
    
        for (let i = 0; i < subTotal.length; i++) {
            total += parseFloat(subTotal[i]);
        }
        
        totals.innerHTML = total.toFixed(2);
    }

}