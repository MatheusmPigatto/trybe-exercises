const quantity = 1000;
const value = 300;
const cost = 90;

function Profit(quantity, value, cost) {

    if(quantity < 0 || value < 0 || cost < 0){
        return console.log('Error: negative number')
    }

    const costTax = (cost * 0.2) + cost
    const profit = (value - costTax) * quantity;

    return profit
}

console.log(Profit(quantity, value, cost))