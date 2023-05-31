function starti() {
    let a = document.getElementById("year").value
    let b = document.getElementById("res")
    if (a.slice(4, 10) == "Script") {
        let res = ""
        for (let i = 0; i < 4; i++){
            res += a[i]
        }
        b.innerHTML = res
    } else {
        b.innerHTML = a
    }

}