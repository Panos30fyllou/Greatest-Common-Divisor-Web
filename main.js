
function executeMkdAlgorithm(x, y) {
    if (!valuesAreValid(x,y)) { 
        return
    }
    document.getElementById("alert").hidden = true;
    var startTime = performance.now();
    if (x > y) {
        z = y;
    }
    else {
        z = x;
    }
    while (x % z !== 0 || y % z !== 0) {
        z = z - 1;
    }
    document.getElementById('mkdResult').innerText = z;
    var endTime = performance.now();
    document.getElementById("execTimeMkd").innerText = endTime - startTime + 'ms';
    showConclusion();
}


function executeEuclideanAlgorithm(x, y) {
    if (!valuesAreValid(x,y)) { 
        return
    }
    document.getElementById("alert").hidden = true;
    var startTime = performance.now();
    var z = y;
    while (z != 0) {
        z = x % y;
        x = y;
        y = z;
    }
    document.getElementById('euclideanResult').innerText = x;
    var endTime = performance.now();
    document.getElementById("execTimeEuclides").innerText = endTime - startTime + 'ms';
    showConclusion();

}

function valuesAreValid(x, y) {
    if (x == "" || y == "") {
        document.getElementById("alert").hidden = false;
        return false;
    }
    return true;
}

function showConclusion() {
    if (document.getElementById("execTimeMkd").innerText !== "-" && document.getElementById("execTimeEuclides").innerText !== "-") {
        document.getElementById("footer").hidden = false;
    }
}