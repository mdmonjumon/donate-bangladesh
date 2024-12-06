// function for get button
function getElement(id){
const element =  document.getElementById(id);
return element;
};

// function for get InnerText
function getInnerTextById(id){
    const innerText = document.getElementById(id).innerText;
    return innerText;
};

// function for get value
function getValueById(id){
    const value = parseFloat(document.getElementById(id).value);
    return value;
};
