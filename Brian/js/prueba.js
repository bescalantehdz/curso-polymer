
//Ejercicio 1
function ensure(value) {

        if(value){

            return value;

        } else if(value === 'undefined'){

            throw new Error("no hay argumentos");
        }

    }

    console.log(ensure(1));
    console.log(ensure());
    console.log(ensure(""));
}


//Ejercicio2

function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD

}

console.log(formatDate("12/31/2014"));