function somar() {
    var n1 = document.getElementById('txtn1').value
    var n2 = document.getElementById('txtn2').value
    var res = document.getElementById('res')
    var resposta = Number(n1) + Number(n2)
    res.innerHTML = `O resultado entre ${n1} + ${n2} é ${resposta}`
}