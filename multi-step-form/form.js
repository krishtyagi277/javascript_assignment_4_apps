var fieldset = document.getElementsByTagName("fieldset");

function next(v) {
    fieldset[v - 1].style.display = "none";
    fieldset[v].style.display = "block";
}

function prev(v) {

    fieldset[v].style.display = "none";
    fieldset[v - 1].style.display = "block";
}

function lastdiv(v) {
    fieldset[v].style.display = "none";
    document.getElementById("SuccessContainer").style.display = "block";
}