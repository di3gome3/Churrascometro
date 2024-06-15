//Arrow function para fazer calculos de quantidade.
const calcularQuantidade = (quantidade, fator) => quantidade * fator;

function calc() {

    //Puxando os valores dos inputs
    const homens = document.getElementById('mal').value;
    const mulheres = document.getElementById('fem').value;
    const criancas = document.getElementById('chil').value;

    //Convertendo o valor dos inputs de string para número.
    const homensN = Number(homens);
    const mulheresN = Number(mulheres);
    const criancasN = Number(criancas);

    //Fazendo verificação se os campos estão vazios ou com o valor igual a 0.
    if (homens == "" || mulheres == "" || criancas == "") {
        window.alert("Todos os campos devem ser preenchidos!");
        return;
    } else if (homens == 0 || mulheres == 0 || criancas == 0) {
        window.alert("Coloque uma quantidade acima de 0,");
        return;
    }

    //Calculando a quantidade de carne.
    let quntcarneH = calcularQuantidade(homensN, 500);
    let quntcarneM = calcularQuantidade(mulheresN, 300);
    let quntcarneC = calcularQuantidade(criancasN, 200);
    let totalCarne = quntcarneH + quntcarneM + quntcarneC;
    //Convertendo a quantidade de carne em quilos
    let totalCarneKg = (totalCarne / 1000).toFixed(1);

    //Calculando a quantidade de frango.
    let quntFrangoHM = calcularQuantidade(homensN + mulheresN, 200);
    let quntFrangoC = calcularQuantidade(criancasN, 100);
    let totalFrango = quntFrangoHM + quntFrangoC;
    //Convertendo a quantidade de frango em quilos
    let totalFrangoKg = (totalFrango / 1000).toFixed(1);

    //calculando a quantidade de linguiça.
    let totalLing = calcularQuantidade(homensN + mulheresN + criancasN, 200);
    //Convertendo a quantidade de linguiça em quilos
    let totalLingKg = (totalLing / 1000).toFixed(1);

    //Calculando a quantidade de refri.
    let quntrefH = calcularQuantidade(homensN, 300);
    let quntrefM = calcularQuantidade(mulheresN, 400);
    let quntrefC = calcularQuantidade(criancasN, 200);
    let totalRefri = quntrefH + quntrefM + quntrefC;
    //Convertendo a quantidade de refri em Litros.
    let totalRefriLt = (totalRefri / 1000).toFixed(1);

    //Calculando a quantidade de cerveja.
    let quntCervH = calcularQuantidade(homensN, 800);
    let quntCervM = calcularQuantidade(mulheresN, 500);
    let totalCerv = quntCervH + quntCervM;
    //Convertendo a quantidade de cerveja em Litros.
    let totalCervLt = (totalCerv / 1000).toFixed(1);


    //Elemento retornado no html
    document.getElementById("totalCarne").innerText = totalCarneKg + " Kg de Carne bovina. 🥩";
    document.getElementById("totalFrango").innerText = totalFrangoKg + " Kg de frango. 🍗";
    document.getElementById("totalLing").innerText = totalLingKg + " Kg de linguiça. 🐖";
    document.getElementById("totalRef").innerText = totalRefriLt + " Litros de refri. 🥤";
    document.getElementById("totalCerv").innerText = totalCervLt + " Litros de cerveja. 🍺";
}
