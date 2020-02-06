
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
            output = valNum * 1+ ' Feet';
            break;
        case 'feet' + 'ometers':
            output = valNum * .3048+' Meters';
            break;
        case 'feet' + 'oinches':
            output = valNum * 12+' Inches';
            break;
        case 'feet' + 'okilometer':
            output = valNum / 3280.84+' Kilometers';
            break;
        case 'feet' + 'omiles':
            output = valNum / 5280+' Miles';
            break;
        case 'feet' + 'oyards':
            output = valNum / 3+' Yards';
            break;


        case 'meters' + 'ofeet':
            output = valNum * 3+' Feet';
            break;
        case 'meters' + 'ometers':
            output = valNum * 1+' Meters';
            break;
        case 'meters' + 'oinches':
            output = valNum * 39.3701+' Inches';
            break;
        case 'meters' + 'okilometer':
            output = valNum / 1000+' Kilometers';
            break;
        case 'meters' + 'omiles':
            output = valNum / 1609.34+' Miles';
            break;
        case 'meters' + 'oyards':
            output = valNum / 0.9144+' Yards';
            break;


            case 'inches' + 'ofeet':
            output = valNum /12+ ' Feet';
            break;
        case 'inches' + 'ometers':
            output = valNum /39.3701+' Meters';
            break;
        case 'inches' + 'oinches':
            output = valNum * 1+' Inches';
            break;
        case 'inches' + 'okilometer':
            output = valNum / 39370.1+' Kilometers';
            break;
        case 'inches' + 'omiles':
            output = valNum / 63360.0342144+' Miles';
            break;
        case 'inches' + 'oyards':
            output = valNum / 36.00001944+' Yards';
            break;



            case 'kilometer' + 'ofeet':
            output = valNum *3280.84+' Feet';
            break;
        case 'kilometer' + 'ometers':
            output = valNum *1000+' Meters';
            break;
        case 'kilometer' + 'oinches':
            output = valNum *39370.08+' Inches';
            break;
        case 'kilometer' + 'okilometer':
            output = valNum *1+' Kilometers';
            break;
        case 'kilometer' + 'omiles':
            output = valNum *0.62137121212121+' Miles';
            break;
        case 'kilometer' + 'oyards':
            output = valNum *1093.6133333333295923+' Yards';
            break;



        case 'miles' + 'ofeet':
            output = valNum *5280+' Feet';
            break;
        case 'miles' + 'ometers':
            output = valNum *1609.34+' Meters';
            break;
        case 'miles' + 'oinches':
            output = valNum *63359.84251872+' Inches' ;
            break;
        case 'miles' + 'okilometer':
            output = valNum *1.6093399999754878227+' Kilometers';
            break;
        case 'miles' + 'omiles':
            output = valNum *1 + ' Miles';
            break;
        case 'miles' + 'oyards':
            output = valNum *1759.9956255199999759 + ' Yards';
            break;



        case 'yards' + 'ofeet':
            output = valNum /3+' Feet';
            break;
        case 'yards' + 'ometers':
            output = valNum /0.91439772725879986393+' Meters';
            break;
        case 'yards' + 'oinches':
            output = valNum *35.999910521999993307+' Inches' ;
            break;
        case 'yards' + 'okilometer':
            output = valNum *0.0009143977272587997928+' Kilometers';
            break;
        case 'yards' + 'omiles':
            output = valNum *0.00056818040596590894519+' Miles';
            break;
        case 'yards' + 'oyards':
            output = valNum *1+' Yards';
            break;
    }
    document.getElementById('outResult').innerHTML = output;
}