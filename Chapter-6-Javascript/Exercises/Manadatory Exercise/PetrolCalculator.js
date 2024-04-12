function calculateCost() {
    const cost = document.getElementById('cost').value;
    const liters = document.getElementById('liters').value;
    const totalCost = cost * liters;
    document.getElementById('totalCost').textContent = `Total Cost: $${totalCost.toFixed(2)}`;
}