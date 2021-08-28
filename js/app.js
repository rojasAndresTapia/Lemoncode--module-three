

const product = {
    count: 3,
    price: 12.55,
    type: "ropa"
};

let total = (product.count <= 0) ? 0 : product.count * product.price;

if (product.type != "alimentación" && product.type != "libro") {
    iva = total * 0.21;
   
} else if (product.type == "alimentación") {
    iva = total * 0.1;

} else {
    iva = total * 0.04;

};

totalPrice = total + iva;
console.log("El precio es: " + total + "€");
console.log("El IVA es: " + iva + "€");
console.log("El precio total es: " + totalPrice + "€");

//EJERCICIO 1.2 getTotal con funcion con parametro
console.log("EJERCICIO 1.2 getTotal con funcion con parametro");
const product2 = {
    count: 3,
    price: 12.55,
    type: "libro"
};




function getTotal(productName) {
    let total2 = (productName.count <= 0) ? 0 : productName.count * productName.price;

if (productName.type != "alimentación" && productName.type != "libro") {
    iva2 = total2 * 0.21;
   
} else if (productName.type == "alimentación") {
    iva2 = total2 * 0.1;

} else {
    iva2 = total2 * 0.04;

};

totalPrice2 = total2 + iva2;
console.log("El precio es: " + total2 + "€");
console.log("El IVA es: " + iva2 + "€");
console.log("El precio total es: " + totalPrice2 + "€");

};

getTotal(product2);

function getVat(productName) {
    type = productName.type;
    switch (type) {
        case "ropa":
            iva3 = (productName.count/productName.count) * productName.price * 0.21;
            break;
        case "alimentación":
            iva3 = (productName.count/productName.count) * productName.price * 0.1;
            break; 
        default:
            iva3 = (productName.count/productName.count) * productName.price * 0.04;
    }
    
    return iva3;
};
console.log("El IVA por unidad de " + product2.type + " es: " + getVat(product2) + "€");

getVat(product2);


//EJERCICIO 2 calcular iva total
console.log("EJERCICIO 2 calcular iva total");

function getTotalVat(productName) {
    let totalIva = (productName.count >= 0) ? productName.count * getVat(productName) : 0 ;
    return totalIva;
    
};
console.log("El IVA total los productos " + product2.type + " es: " + getTotalVat(product2) + "€");

getTotalVat(product2);

//EJERCICIO 2 calcular sueldo en nomina
console.log("EJERCICIO 2 calcular sueldo en nomina");

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14,
  };

  
 
  let retencion = 0;

  function getSalary(empleadoName) {
    const salario = empleadoName.bruto;
    const retencionPadres = (empleadoName.hijos > 0 ) ? -2 : 0 ;
    switch (true) {
        case (salario > 12000 && salario < 24000):
        retencion = 8 + retencionPadres;
        totalRetencion = salario * (retencion / 100);
        break;
        case (salario > 24000 && salario < 34000):
        retencion = 16 + retencionPadres;
        totalRetencion = salario * (retencion / 100);
        break;
        case (salario > 34000):
        retencion = 30 + retencionPadres;
        totalRetencion = salario * (retencion / 100);
        break;
        default:
        retencion = 0 + retencionPadres;
        totalRetencion = salario * (retencion / 100);
        break;
    }
    return totalRetencion;
    

  }
  getSalary(empleado);
 
 function getAnualSalaryNeto () {
     const anualSalary = empleado.bruto;
     const anualSalaryNeto = anualSalary - totalRetencion;
     
     return anualSalaryNeto;
 }

 console.log("El salario anual neto es de: " + getAnualSalaryNeto() + "€");

 getAnualSalaryNeto();

 function getMonthlySalary() {
     const totalPays = empleado.pagas;
    const monthlySalary = getAnualSalaryNeto() / totalPays;
    return monthlySalary;
    

 }
 console.log("El salario mensual neto es de: " + getMonthlySalary() + "€");

 getMonthlySalary();