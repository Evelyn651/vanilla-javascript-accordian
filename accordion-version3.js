//Accordion Basic Mechanics
let jsaccordion = {
    init : function(target){
    //init() : initialize accordion
    // PARAM target : ID of accordion wrapper

    var headers = document.querySelectorAll("#" + target + " .accordion-head");
    if (headers.length > 0){
        head.addEventListener("click", jsaccordion.select);
}}
}