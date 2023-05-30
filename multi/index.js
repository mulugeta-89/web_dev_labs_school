
function submiting() {
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let multiple = document.getElementById("c")
    let division = document.getElementById("d")

    let multi = a * b
    let divi = a / b  
    multiple.value = multi
    if (b == 0) {
        division.value = "you can't divide a number with zero"
    } else {
        division.value = divi
    }

}
function clearinputs() {
    let a = (document.getElementById("a"))
    let b = (document.getElementById("b"))
    let multiple = document.getElementById("c")
    let division = document.getElementById("d")
    a.value = ""
    b.value = ""
    multiple.value = ""
    division.value = ""
}