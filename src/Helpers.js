
let Helper = function () {
    //EN ESTE CASO NO VA A SER NECESARIO, PERO ME PARECE BUENA PRÁCTICA TENER ESTA CLASE DE HELPERS PARA MANTENER LOS COMPONENTES MÁS LIMPIOS


    function _calcularDiferenciaDias(fecha1, fecha2) {

        let f1 = fecha1.split("/");
        f1 = "" + f1[1] + "/" + f1[0] + "/" + f1[2];
        f1 = new Date(f1);

        let f2 = new Date();
        if (fecha2) {
            f2 = fecha2.split("/");
            f2 = "" + f2[1] + "/" + f2[0] + "/" + f2[2];
            f2 = new Date(f2);
        }

        return parseInt(((f2 - f1) / (1000 * 3600 * 24)))
    }

    return {
        CalcularDiferenciaDias: function (fecha1, fecha2) { return _calcularDiferenciaDias(fecha1, fecha2) }
    }
}


let helper = new Helper();
export default helper;