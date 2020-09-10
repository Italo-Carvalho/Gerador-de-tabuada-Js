function tabu(){
    var nu = document.getElementById('numero')
    if(nu.value.length == 0){
        window.alert('Preencha o campo')
    }else{
        var n = Number(nu.value)
        var c = 1
        result.innerHTML = ''
            while(c <= 10){
                var lista = document.createElement('option')
                result.appendChild(lista)
                lista.text = `${n} x ${c} = ${n*c}`
                
                c++
            }


    }
}