window.anchorLink = {
    scrollIntoView: function (elementId) {
        // This function is called from the AnchorLink component using JavaScript interop.
        // It will try to find an element using the ID given to the function, and scroll that
        // element into view, if an element is found.
        var elem = document.getElementById(elementId);
        if (elem) {
            var headerOffset = 140;
            var elementPosition = elem.getBoundingClientRect().top;
            var offsetPosition = elementPosition - headerOffset;

            console.debug(elem.getBoundingClientRect().top);
            console.debug(offsetPosition);
        
            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
            
            window.location.hash = elementId;
        }
    }
}

document.addEventListener('scroll', function(e) {

    var nav = document.getElementsByTagName("nav");

    if (window.scrollY > 0){
        if (nav.length > 0){
            nav[0].classList.add("scroll");
            //console.info(window.scrollY);
        }
    }
    else {
        if (nav.length > 0){
            nav[0].classList.remove("scroll");
        }
    }

});