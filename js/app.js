// This function is for onclick event handler
const playersList = [];
function addToList(event){
    if(playersList.length > 4){
        alert('You cannot select players more than five');
        return;
    }
    const button = event;
    const playerName = event.parentNode.children[0].innerText;
    const olBody = document.getElementById('ol-body');
    const li = document.createElement('li');
    li.classList.add('mb-3');
    li.innerText = playerName;
    olBody.appendChild(li);
    playersList.push(li);
    button.setAttribute('disabled', true);
}

// Calculate button event handler
document.getElementById('btn-calc').addEventListener('click', function(){
    const perPlayerCostField = document.getElementById('per-player-cost-field')
    const perPlayerCost = getElementValue('per-player-cost-field', 'value');
    const numberOfPlayers = playersList.length;
    const playerExpenses = perPlayerCost * numberOfPlayers;
    // Clear input value
    perPlayerCostField.value = '';
    // Validation
    if(isNaN(playerExpenses)){
        alert('Please provide a number');
        return
    }
    setElementValue('player-expenses-field', playerExpenses);
})

// Calculate total button event handler
document.getElementById('btn-calc-total').addEventListener('click', function(){
    const managerCostField = document.getElementById('manager-cost-field')
    const coachCostField = document.getElementById('coach-cost-field')
    const playerExpenses = getElementValue('player-expenses-field', false);
    const managerCost = getElementValue('manager-cost-field', true);
    const coachCost = getElementValue('coach-cost-field', true);
    const totalCost = playerExpenses + managerCost + coachCost;
    // Clear input value
    managerCostField.value = '';
    coachCostField.value = '';
    // Validation
    if(isNaN(totalCost)){
        alert('Please provide a number');
        return
    }
    setElementValue('total-cost-field', totalCost);
})
