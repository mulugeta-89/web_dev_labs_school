function starti() {
    let a = document.getElementById("year").value
    let res = document.getElementById("res")
    if (a.startsWith("Java")) {
        res.innerHTML = "True"
    } else {
        res.innerHTML = "False"
    }
}