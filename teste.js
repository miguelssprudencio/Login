function between(valor, min, max) {
    return valor >= min && valor <= max;
}

const objects = {
    "smartphone": { preço: 2099, desconto: true },
    "notebook": { preço: 1299, desconto: false },
    "tablet": { preço: 1599, desconto: true },
    "computador": { preço: 2999, desconto: false },
    "tv": { preço: 4999, desconto: true },
    "fogao": { preço: 1499, desconto: false },
    "geladeira": { preço: 2999, desconto: true },
    "microondas": { preço: 999, desconto: false },
    "refrigerador": { preço: 3999, desconto: true },
    "maquina de lavar": { preço: 1999, desconto: false }
};

const keys = Object.keys(objects);
const values = Object.values(objects);

for (const key of keys) {
    if (between(objects[key].preço, 1500, 2500)) {
        if (objects[key].desconto) {
            const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(objects[key].preço);
            const realComDesconto = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format((objects[key].preço * 0.9).toFixed(2));
            console.log(`O preço do ${key} é médio. R$ ${real}. Promoção! Desconto de 10%: R$ ${realComDesconto}.`);
        } else {
            const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(objects[key].preço);
            console.log(`O preço do ${key} é médio. R$ ${real}. Não tem promoção.`);
        }
    } else if (objects[key].preço < 1500) {
        if (objects[key].desconto) {
            const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(objects[key].preço);
            const realComDesconto = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format((objects[key].preço * 0.9).toFixed(2));
            console.log(`O preço do ${key} é baixo. R$ ${real}. Promoção! Desconto de 10%: R$ ${realComDesconto}.`);
        } else {
            const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(objects[key].preço);
            console.log(`O preço do ${key} é baixo. R$ ${real}. Não tem promoção.`);
        }
    } else if (objects[key].preço > 2500) {
        if (objects[key].desconto) {
            const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(objects[key].preço);
            const realComDesconto = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format((objects[key].preço * 0.9).toFixed(2));
            console.log(`O preço do ${key} é alto. R$ ${real}. Promoção! Desconto de 10%: R$ ${realComDesconto}.`);
        } else {
            const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(objects[key].preço);
            console.log(`O preço do ${key} é alto. R$ ${real}. Não tem promoção.`);
        }
    } else if (objects[key].desconto) {
        const real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(objects[key].preço);
        const realComDesconto = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format((objects[key].preço * 0.9).toFixed(2));
        console.log(`O preço do ${key} é ${objects[key].preço}. R$ ${real}. Promoção! Desconto de 10%: R$ ${realComDesconto}.`);
    }
}