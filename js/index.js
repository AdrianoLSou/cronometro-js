window.onload = function () {
    var hours = 00;
    var minutes = 00;
    var seconds = 00;
    var tenths = 00;
    var appendTenths = document.getElementById("tenths");//append() Esta função insere um conteúdo (recebido como parâmetro) no formato HTML ao final de um controle alvo.
    var appendSeconds = document.getElementById("seconds");
    var appendMinutes = document.getElementById("minutes");
    var appendHours = document.getElementById("hours");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;

    buttonStart.onclick = function() {//O evento onclick executa determinada funcionalidade quando um botão é clicado.
        clearInterval(Interval);//O clearInterval() limpa o timer configurado pela função setInterval(). Ele desativa a função e não executa a função definida pelo temporizador.
        Interval = setInterval(startTimer, 10); //O setInterval serve para executar uma função ou instrução várias vezes em um determinado intervalo de tempo. A sua sintaxe é: setInterval(funcao, tempo); Isto significa que a função "funcao" será executada assim cada vez que se atingir o determinado tempo.
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
    }

    buttonReset.onclick = function() {
        clearInterval(Interval);
        tenths = "00";
        seconds = "00";
        minutes = "00";
        appendTenths.innerHTML = tenths;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    }

    function startTimer () {
        tenths++;

        if(tenths <= 9){
            appendTenths.innerHTML = "0" + tenths;
        }

        if (tenths > 9){
            appendTenths.innerHTML = tenths;
        }

        if (tenths > 99){
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tenths = 0;
            appendTenths.innerHTML = "0" + 0;
        }

        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        }

        if (seconds > 59){
            console.log("minutes");
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendTenths.innerHTML = "0" + 0;
            appendSeconds.innerHTML = "0" + 0;
        }
        if (minutes > 9){
            appendMinutes.innerHTML = minutes;
        }

        if (minutes > 59){
            console.log("hours");
            hours++;
            appendHours.innerHTML = "0" + hours;
            minutes = 0;
            appendTenths.innerHTML = "0" + 0;
            appendSeconds.innerHTML = "0" + 0;
            appendMinutes.innerHTML = "0" + 0;
        }

        if (hours > 9){
            appendHours.innerHTML = hours;
        }
    }

}                                                       

const buttonStart = document.querySelector("#button-start");
buttonStart.onmouseover = ()=>{ 
    buttonStart.classList.add("animate__animated", "animate__pulse");
};

const buttonStop = document.querySelector("#button-stop");
buttonStop.onmouseover = ()=>{ 
    buttonStop.classList.add("animate__animated", "animate__pulse");
};

const buttonReset = document.querySelector("#button-reset");
buttonReset.onmouseover = ()=>{ 
    buttonReset.classList.add("animate__animated", "animate__pulse");
};