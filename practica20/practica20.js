

    function validarTaxi(automovil) {
        let currentYear=2023;
        let years = currentYear-automovil.yearFabricacion;

        if (years<=10){
            
            return (true);
        }
        else {
            return (false);
        }
    }

   

   

   let vehiculo = {
    brand:"Ford",
    model: "Lobo Raptor",
    yearFabricacion: 2023,
    color: "black",
    };

    let result = validarTaxi(vehiculo)
    alert("El resultado de su vehiculo para aprobar como taxi es: "+result);