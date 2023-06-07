function multi() {
    var a = parseInt(document.getElementById("year").value)
    let b = document.getElementById("res")
    if (a % 3 == 0 || a % 7 == 0) {
        b.innerHTML = "True"
    } else {
        b.innerHTML = "False"
    }
}