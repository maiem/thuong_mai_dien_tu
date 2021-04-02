var count = 1;
var countElement = document.getElementById("plus-minus");

function plus() {
    count++;
    countElement.value = count;
}

function minus() {
    if (count > 1) {
        count--;
        countElement.value = count;
    }
}
