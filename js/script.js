/*elsint-env browser*/
var i;
var h2;
var div;
var h2Elements;
var faqs;

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var toggle = function (e) {
    "use strict";
    h2 = e.currentTarget;
    div = h2.nextElementSibling;
    //window.console.log(e.currentTarget);
    //return window.document.getElementById(id);
    for ( i = 0; i < h2Elements.length; i +=1) {
        if(h2Elements[i] !== e.currentTarget) {
            h2Elements[i].nextElementSibling.removeAttribute("class");
        }
    }
    
    if (h2.hasAttribute("class")) {
        h2.removeAttribute("class");
    } else {
        h2.setAttribute("class", "minus");
    }
};

window.addEventListener("load", function() {
    "use strict";
    faqs = $("faqs");
    h2Elements = faqs.getElementsByTagName("h2");
   
    for (i = 0; i < h2Elements.length; i +=1){
        h2Elements[i].addEventListener("click", toggle);
    }
    
});