let button = document.getElementById('btn1');

button.addEventListener('click', () => {
    const height = parseInt (document.getElementById('height').value);
    const weight = parseInt (document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;

    if(height === ' ' || isNaN(height) || (height <=0)){
        document.getElementById('height_error').innerHTML = '';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight ===''|| isNaN(weight)|| (weight<=0)){
        document.getElementById('weight_error').innerHTML = '';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if (height_status && weight_status){
        const bmi = (weight/((height*height)/10000)).toFixed(2);

        if (bmi<18.5){
            result.innerHTML = 'BERAT BADAN ANDA KURANG! BMI ANDA:' + bmi;
        }else if (bmi>=18.5 && bmi<25){
            result.innerHTML = 'BERAT BADAN ANDA NORMAL! BMI ANDA:' + bmi;
        }else if (bmi>=25 && bmi<30){
            result.innerHTML = 'BERAT BADAN ANDA BERLEBIH! BMI ANDA:' + bmi;
        }else{
            result.innerHTML = 'ANDA MENGALAMI OBESITAS! BMI ANDA:' + bmi;
        }
    }else{
        alert('Terdapat error dalam form!');
        result.innerHTML='';
    }
    
});