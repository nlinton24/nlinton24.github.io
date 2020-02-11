

function myfunc() {
    n = document.getElementById("n").value
    r = document.getElementById("r").value
    s = document.getElementById("s").value
    units = document.getElementById("units").value

    if (units = 'SI') {
        valNum = 1 / n * r ^ (2 / 3) * s ^ (.5)+' m/s';
    } else {
        valNum = 1.49 / n * r ^ (2 / 3) * s ^ (.5)+' ft/s';
    }

    document.getElementById('outResult').innerHTML = valNum;
}
