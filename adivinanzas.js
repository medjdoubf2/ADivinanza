const adivinanzas = [
    {
        riddle: "Blanca por dentro, verde por fuera. ¿Qué es?",
        answer: "sandía"
    },
    {
        riddle: "En el agua nace, en el agua se cría. ¿Qué es?",
        answer: "pescado"
    },
    {
        riddle: "Tengo agujas y no sé coser. ¿Qué soy?",
        answer: "reloj"
    },
    {
        riddle: "Subo y bajo y nunca me muevo. ¿Qué soy?",
        answer: "escalera"
    }
];

document.getElementById('showRiddle').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * adivinanzas.length);
    const selectedRiddle = adivinanzas[randomIndex];
    document.getElementById('riddle').innerText = selectedRiddle.riddle;
    document.getElementById('result').innerText = ''; // Limpiar el resultado anterior
    document.getElementById('userAnswer').value = ''; // Limpiar la respuesta anterior
});

document.getElementById('checkAnswer').addEventListener('click', function() {
    const userAnswer = document.getElementById('userAnswer').value.toLowerCase();
    const currentRiddle = document.getElementById('riddle').innerText;

    const selectedRiddle = adivinanzas.find(r => r.riddle === currentRiddle);
    if (selectedRiddle) {
        if (userAnswer === selectedRiddle.answer) {
            document.getElementById('result').innerText = '¡Correcto!';
        } else {
            document.getElementById('result').innerText = 'Incorrecto. Intenta de nuevo.';
        }
    }
});