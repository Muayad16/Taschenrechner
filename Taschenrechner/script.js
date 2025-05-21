let DisplayValue = '';

function DisplayAnzeige (value) {

    DisplayValue += value;
    document.getElementById('Display').value = DisplayValue; 


}
function ClearDisplay() {

    DisplayValue = '';
    document.getElementById('Display').value = DisplayValue; 


}
function RechneErgebnis() {
    try {
        DisplayValue = eval(DisplayValue).toString();
        document.getElementById('Display').value = DisplayValue;
    } catch (fehler) {
        document.getElementById('Display').value = 'Fehler';
        DisplayValue = '';
    }
}
