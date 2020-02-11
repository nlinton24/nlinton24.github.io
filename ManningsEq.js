

function myfunc() {
    n = document.getElementById("n").value
    d = document.getElementById("d").value
    w = document.getElementById("w").value
    s = document.getElementById("s").value
    if (n<0) {
        alert('n Cannot Be Negative')
    }
    if(n>1){
        alert('n Cannot Be Greater Than One')
    }
    if(s<0){
         alert('Slope Cannot Be Negative')
    }
    if(s>1){
         alert('Slope Cannot Be Greater Than One')
    }
    else {
        units = document.getElementById("units").value
        str2='Computed flow velocity, v, is '
        s2 = Math.sqrt(s);
        r = d * 2 + w
        if (units == 'SI') {
            str = " m/s"
            valNum =str2 + 1 / n * r ** (2 / 3) * s2 + str
        } else {
            str = ' ft/s'
            valNum =str2 + 1.49 / n * r ** (2 / 3) * s2 + str
        }
    }
    document.getElementById('outResult').innerHTML = valNum;


}
