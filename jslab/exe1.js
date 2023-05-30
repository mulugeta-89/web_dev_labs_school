
function submiting() {
    var a = parseInt(document.getElementById("a").value)
    var b = parseInt(document.getElementById("b").value)
    var c = parseInt(document.getElementById("c").value)
    var d = document.getElementById("d")
    
    var s = (a + b + c) / 2
    var soli = (s-a)*(s-b)*(s-c)
    var sol = Math.sqrt(s*soli)
    d.value = sol
}



