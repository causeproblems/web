document.addEventListener("DOMContentLoaded", function() {
    const inputContainer = document.createElement("div");
    inputContainer.className = "input-container";
    document.body.appendChild(inputContainer);

    const input = document.createElement("input");
    input.type = "text";
    input.id = "questionInput";
    input.placeholder = "Введіть ваше запитання...";
    inputContainer.appendChild(input);

    const container = document.createElement("div");
    container.className = "container";
    document.body.appendChild(container);

    const predictionText = document.createElement("div");
    predictionText.className = "prediction-text";
    predictionText.id = "prediction";
    container.appendChild(predictionText);

    container.addEventListener("click", getPrediction);
});

const predictions = [
    "Так", "Ні", "Можливо", "Запитайте пізніше", "Точно так", "Точно ні", "Спробуйте ще раз"
];

function getPrediction() {
    const inputField = document.getElementById("questionInput");
    const question = inputField.value.trim();

    if (question === "") {
        alert("Будь ласка, введіть запитання.");
        return;
    }

    const prediction = predictions[Math.floor(Math.random() * predictions.length)];
    const predictionElement = document.getElementById("prediction");
    predictionElement.innerText = prediction;
    inputField.value = ""; 
}
