// This function is for getting element value
function getElementValue(elementId, isInput){
    const elementString = document.getElementById(elementId);
    if(isInput){
        const elementValue = parseInt(elementString.value);
        return elementValue;
    }
    else{
        const elementValue = parseInt(elementString.innerText);
        return elementValue;    
    }
}

// This function is for set element value
function setElementValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}