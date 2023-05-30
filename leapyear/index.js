function leap() {
    let inputi = parseInt(document.getElementById("year").value)
    let res = document.getElementById("res")
    if ((inputi % 4 == 0 && inputi%100 != 0) || inputi%400 == 0) {
        res.innerHTML = "The year is a Leap Year"
        console.log("The year is a Leap Year")
    } else {
        res.innerHTML = "The year is not a Leap Year"
        console.log("the year is not")
    }
    console.log(inputi)
}
leap(2024)