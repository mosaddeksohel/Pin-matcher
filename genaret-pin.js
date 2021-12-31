function getPin(){
    const pin  = Math.round(Math.random()* 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}


function genaretPin(){
    const pin = getPin();
    document.getElementById('display').value = pin;

}


function verifyPin(){
    const calc = document.getElementById('key-number').value;
    const pin = document.getElementById('display').value;
    const successmsg = document.getElementById('success');
    const failmsg = document.getElementById('fail');
    if(calc == pin){
    
        successmsg.style.display = 'block';
        failmsg.style.display = 'none';
    }
    else{
        failmsg.style.display = 'block';
        successmsg.style.display = 'none';
    
    }
}


document.getElementById('key').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calc = document.getElementById('key-number'); 
    if(isNaN(number)){
        if(number == 'C'){
            calc.value = '';
        }
    }
    else{
        const prevoiuscalc = calc.value;
        const newNumber = prevoiuscalc + number;
        calc.value = newNumber;
    }
    
})