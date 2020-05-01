//Accordion Basic Mechanics
let jsaccordion = {
    init : function(target) {
        //init() : initialize accordion
        // PARAM target : ID of accordion wrapper

        let headers = document.querySelectorAll("#" + target + " .accordion-head");
        if (headers.length > 0) {
            for (var head of headers) {
                head.addEventListener("click", jsaccordion.select);
            }
        }
    },
    select : function(){
        let contents = this.nextElementSibling;
        contents.classList.toggle("open");
    }
};

//on page load
window.addEventListener('load', function(){
    jsaccordion.init("accordion-basic");
});

