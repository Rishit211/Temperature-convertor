const celsiusE1 = document.getElementById("celsius");
const FahrenheitE1 = document.getElementById("Fahrenheit");
const KelvinE1 = document.getElementById("Kelvin");

celsiusE1.addEventListener("change", ComputeTemp);
FahrenheitE1.addEventListener("change", ComputeTemp);
KelvinE1.addEventListener("change", ComputeTemp);

function ComputeTemp(event) {
    const currentValue = event.target.value;

    switch (event.target.name) {
        case"celsius":
            FahrenheitE1.value = (currentValue * (9 / 5) + 32);
            KelvinE1.value = parseFloat(currentValue)+ 273.15;
            break;

        case"Fahrenheit":
            celsiusE1.value = ((currentValue - 32) * (5 / 9));
            KelvinE1.value = (currentValue - 32) * (5 / 9) + 273.15;
            break;

        case"Kelvin":
            celsiusE1.value = currentValue - 273.15;
            FahrenheitE1.value = (currentValue - 273.15) * (9 / 5) + 32;
            break;

        default:
            break;
    }
}
