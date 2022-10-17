function calcular(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !=='' && altura !=='' && peso !==''){
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        let estado = '';
        if(valorIMC <= 18.5) {
            estado = 'abaixo do peso normal.';
        }else if(valorIMC <= 24.9){
            estado = 'com o peso normal.';
        }else if(valorIMC <= 29.9){
            estado = 'com excesso de peso.';
        }else if(valorIMC <= 34.9){
            estado = 'com obsidade classe 1.';
        }else if(valorIMC <= 39.9) {
            estado = 'com obsidade classe 2.';
        }else {
            estado = 'com obesidade classe 3. Tomar cuidado!!'
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${estado}`;
    }else{
        resultado.textContent = 'Preencha todos os campos!!'
    }
}