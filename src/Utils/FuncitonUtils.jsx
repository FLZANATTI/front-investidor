
function getMoney( str )
{
        return parseInt( str.replace(/[\D]+/g,'') );
}

function formatReal(number, options = {}) {
    const { moneySign = true } = options;

    if(Number.isNaN(number) || !number) return "R$ 0,00";

    if(typeof number === "string") { // n1
        number = Number(number);
    }

    let res;

    const config = moneySign ? {style: 'currency', currency: 'BRL'} : {minimumFractionDigits: 2};

    moneySign
    ? res = number.toLocaleString('pt-BR', config)
    : res = number.toLocaleString('pt-BR', config)

    const needComma = number => number <= 1000;
    if(needComma(number)) {
        res = res.toString().replace(".", ",");
    }

    return res; // n2
}

export {
    getMoney,
    formatReal
}