function calcular(){
    let numero = document.querySelector('input#numero')
    let tabuada = document.querySelector('textarea#restabuada')
    
    if(tabuada.value.length!=0){
        tabuada.innerHTML=''
    }
    
    if(numero.value.length==0){
        alert('[ERRO]-Favor digitar um numero maior que "Zero"')
    }else{
        let n = Number(numero.value)

        for(let i=0; i<=10; i++){
            let calc = i*n
            tabuada.innerHTML+=`${n}x${i}=${calc} \n`
        }
    }
    

  





}