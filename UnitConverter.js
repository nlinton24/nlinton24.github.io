
var inputunit = document.getElementById("inputunits").value
var outputunit = document.getElementById("outputunits").value
var valNum = document.getElementById("input").value
var output=output

function myFunction() {
    inputunit = document.getElementById("inputunits").value
    outputunit = document.getElementById("outputunits").value
    valNum = document.getElementById("input").value

    switch (inputunit + outputunit) {
        case 'feet' + 'ofeet':
            output = valNum * 1;
            break;
        case 'feet' + 'ometers':
            output = valNum * .3048;
            break;
        case 'feet' + 'oinches':
            output = valNum * 12;
            break;
        case 'feet' + 'okilometer':
            output = valNum / 3280.84;
            break;
        case 'feet' + 'omiles':
            output = valNum / 5280;
            break;
        case 'feet' + 'oyards':
            output = valNum / 3;
            break;


        case 'meters' + 'ofeet':
            output = valNum * 3;
            break;
        case 'meters' + 'ometers':
            output = valNum * 1;
            break;
        case 'meters' + 'oinches':
            output = valNum * 39.3701;
            break;
        case 'meters' + 'okilometer':
            output = valNum / 1000;
            break;
        case 'meters' + 'omiles':
            output = valNum / 1609.34;
            break;
        case 'meters' + 'oyards':
            output = valNum / 0.9144;
            break;


            case 'inches' + 'ofeet':
            output = valNum /12;
            break;
        case 'inches' + 'ometers':
            output = valNum /39.3701;
            break;
        case 'inches' + 'oinches':
            output = valNum * 1;
            break;
        case 'inches' + 'okilometer':
            output = valNum / 39370.1;
            break;
        case 'inches' + 'omiles':
            output = valNum / 63360.0342144;
            break;
        case 'inches' + 'oyards':
            output = valNum / 36.00001944;
            break;



            case 'kilometer' + 'ofeet':
            output = valNum *3280.84;
            break;
        case 'kilometer' + 'ometers':
            output = valNum *1000;
            break;
        case 'kilometer' + 'oinches':
            output = valNum *39370.08 ;
            break;
        case 'kilometer' + 'okilometer':
            output = valNum *1;
            break;
        case 'kilometer' + 'omiles':
            output = valNum *0.62137121212121;
            break;
        case 'kilometer' + 'oyards':
            output = valNum *1093.6133333333295923;
            break;



        case 'miles' + 'ofeet':
            output = valNum *5280;
            break;
        case 'miles' + 'ometers':
            output = valNum *1609.34;
            break;
        case 'miles' + 'oinches':
            output = valNum *63359.84251872 ;
            break;
        case 'miles' + 'okilometer':
            output = valNum *1.6093399999754878227;
            break;
        case 'miles' + 'omiles':
            output = valNum *1;
            break;
        case 'miles' + 'oyards':
            output = valNum *1759.9956255199999759;
            break;



        case 'yards' + 'ofeet':
            output = valNum /3;
            break;
        case 'yards' + 'ometers':
            output = valNum /0.91439772725879986393;
            break;
        case 'yards' + 'oinches':
            output = valNum *35.999910521999993307 ;
            break;
        case 'yards' + 'okilometer':
            output = valNum *0.0009143977272587997928;
            break;
        case 'yards' + 'omiles':
            output = valNum *0.00056818040596590894519;
            break;
        case 'yards' + 'oyards':
            output = valNum *1;
            break;
    }
    document.getElementById('outResult').innerHTML = output;
}