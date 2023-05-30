function includi() {
    let a = document.getElementById("year").value
    let res = document.getElementById("res")
    if (a.includes("Py")) {
        res.innerHTML = a
    } else {
        let total = "Py".concat(a)
        res.innerHTML = total
    }
}