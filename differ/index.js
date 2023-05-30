function submiting() {
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let data = document.getElementById("data")
    if (a == 50 || b == 50 || a + b == 50) {
        data.innerHTML = "True"
    } else {
        data.innerHTML = "False"
    }

}