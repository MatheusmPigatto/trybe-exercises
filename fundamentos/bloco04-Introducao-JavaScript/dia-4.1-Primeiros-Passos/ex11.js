const beforeTax = 7000;

function taxCalculator(beforeTax) {

    let INSSTax
    let IRTax
    
    if(beforeTax > 5189.82) {

        INSSTax = beforeTax - 570.88;

    } else if(beforeTax > 2594.92) {

        INSSTax =  beforeTax - (beforeTax * 0.11);

    } else if(beforeTax > 1556.94) {

        INSSTax = beforeTax - (beforeTax * 0.9);

    } else if(beforeTax <= 1556.94) {

        INSSTax = beforeTax - (beforeTax * 0.8);

    }

    if(INSSTax > 4664.68) {

       IRTax = (INSSTax * 0.275) - 869.36

    } else if(INSSTax > 3751.05) {

        IRTax = (INSSTax * 0.225) - 636.13

    } else if(INSSTax > 2826.65) {

        IRTax = (INSSTax * 0.15) - 354.80

    } else if(INSSTax > 1903.98) {

        IRTax = (INSSTax * 0.075) - 142.80

    } else if(INSSTax <= 1903.98) {
        
        IRTax = INSSTax

    }

    const salary = INSSTax - IRTax

    return salary
 
}

console.log(taxCalculator(beforeTax))