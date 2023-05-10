function centimeter() {
    
    var base = document.getElementsByName('millimeter')[0].value;

    var result = parseFloat(base) / 10 ;
    
    document.getElementsByName('output')[0].value= result;

}

function meter() {
    
    var base = document.getElementsByName('millimeter')[0].value;

    var result = parseFloat(base) / 1000 ;
    
    document.getElementsByName('output')[0].value= result;

}

function kilometer() {
    
    var base = document.getElementsByName('millimeter')[0].value;

    var result = parseFloat(base) / 1000000 ;
    
    document.getElementsByName('output')[0].value= result;

}

function liter() {
    
    var base = document.getElementsByName('milliliter')[0].value;

    var result = parseFloat(base) / 1000 ;
    
    document.getElementsByName('output')[0].value= result;

}

function gallon() {
    
    var base = document.getElementsByName('milliliter')[0].value;

    var result = parseFloat(base) / 3785.411784 ;
    
    document.getElementsByName('output')[0].value= result;

}

function ounce() {
    
    var base = document.getElementsByName('milliliter')[0].value;

    var result = parseFloat(base) / 29.5735296875 ;
    
    document.getElementsByName('output')[0].value= result;

}

function kilogram() {
    
    var base = document.getElementsByName('gram')[0].value;

    var result = parseFloat(base) / 1000 ;
    
    document.getElementsByName('output')[0].value= result;

}

function pound() {
    
    var base = document.getElementsByName('gram')[0].value;

    var result = parseFloat(base) / 453.592 ;
    
    document.getElementsByName('output')[0].value= result;

}

function ton() {
    
    var base = document.getElementsByName('gram')[0].value;

    var result = parseFloat(base) / 1000000 ;
    
    document.getElementsByName('output')[0].value= result;

}