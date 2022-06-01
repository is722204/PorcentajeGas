

function rawToPercent(caratula, valor) {
    porcentaje = 0
    let valores = [0, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80, 89, 90, 95, 100] //valores en porcentaje

    //CARÁTULAS
    let re = [54, 428, 687, 948, 1149, 1517, 1810, 2067, 2320, 2591, 2909, 3117, 3386, 3692, 3994] //Rochester Estandar
    let rrr = [34,239,659,849,1097,1382,1698,1977,2264,2538,2838,3051,3312,3735,3988] //Rochester Remote Ready
    let ingusa = [218,459,736,1003,1184,1533,1806,2067,2316,2583,2929,3127,3395,3705,3867] //Ingusa

    //VALORES
    
    if (caratula == "re") { //Rochester Estandar
        if(valor<=re[0]){
            return 0;
        }
        else if(valor>=re[re.length-1]){
            return 100;
        }

        re.push(valor)
        re = re.sort(function (a, b) {
            return a - b
        })
        let index = re.indexOf(valor)
        valores.splice(index, 0, "x")
        
        porcentaje = ((valores[index + 1] - valores[index - 1]) / (re[index + 1] - re[index - 1])) * (valor - re[index - 1]) + valores[index-1]

    } else if (caratula == "rrr") {
        if(valor<=rrr[0]){
            return 0;
        }
        else if(valor>=rrr[rrr.length-1]){
            return 100;
        }
        rrr.push(valor)
        rrr = rrr.sort(function (a, b) {
            return a - b
        })
        let index = rrr.indexOf(valor)
        valores.splice(index, 0, "x")
        porcentaje = ((valores[index + 1] - valores[index - 1]) / (rrr[index + 1] - rrr[index - 1])) * (valor - rrr[index - 1]) + valores[index-1] 
    } else if (caratula == "ingusa") {
        if(valor<=ingusa[0]){
            return 0;
        }
        else if(valor>=ingusa[ingusa.length-1]){
            return 100;
        }
        ingusa.push(valor)
        ingusa = ingusa.sort(function (a, b) {
            return a - b
        })
        let index = ingusa.indexOf(valor)
        valores.splice(index, 0, "x")
        porcentaje = ((valores[index + 1] - valores[index - 1]) / (ingusa[index + 1] - ingusa[index - 1])) * (valor - ingusa[index - 1]) + valores[index-1]
    }

    return porcentaje
}

