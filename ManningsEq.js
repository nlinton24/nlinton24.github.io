

function myfunc() {
    n = document.getElementById("n").value
    r = document.getElementById("r").value
    s = document.getElementById("s").value
    units = document.getElementById("units").value

    if (units =='SI') {
        str="m/s"
        valNum =1 / n * r ^ (2 / 3) * s ^ (.5) + "m/s"
    } else {
        str="ft/s"
        valNum =1.49 / n * r ^ (2 / 3) * s ^ (.5) + str
    }

    document.getElementById('outResult').innerHTML = valNum;
    document.getElementById('sout').innerHTML = s
    document.getElementById('nout').innerHTML = n
    document.getElementById('unitsout').innerHTML = units
    document.getElementById('rout').innerHTML = r
}
