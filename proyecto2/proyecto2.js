let producto = parseInt(prompt("Ingresa el monto de tu producto"));


if (producto > 0) {
    let cuota = prompt("elija la cantidad de cuotas: \n1- 1 \n3- 3 \n6- 6 \n12- 12 \nprecione X si quiere finalizar");


    while (cuota != "X" && cuota != "x") {
        const valor = (a, b) => a / b; //funcion para las cuotas
        let valor_cuota = valor(producto, cuota);



        switch (cuota) {

            case "1":
                alert("queda en 1 cuota de $" + valor_cuota);
                break;
            case "3":
                alert("te queda en 3 cuotas de $" + valor_cuota);
                break;
            case "6":
                alert("te queda en 6 cuotas de $" + valor_cuota);
                break;
            case "12":
                alert("te queda en 12 cuotas de $" + valor_cuota);
                break;
            default:
                alert("no ingresaste una cantidad valida")
                break;

        }
        cuota = prompt("elija la cantidad de cuotas: \n1- 1 \n3- 3 \n6- 6 \n12- 12 \nprecione X si quiere finalizar");
    }


} else if (producto <= 0) {
    alert("no es un monto valido")
} else {
    alert("adios")
}

alert("adios");