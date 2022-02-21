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

    // var nav = document.getElementsByTagName("nav")[0];

    // if (!nav === undefined){
    //     if (window.scrollY > 0){
    //         nav.classList.add("scroll");
    //     } else {
    //         nav.classList.remove("scroll");
    //     }
    // }

    var parent = document.getElementById('app');

    if (parent.addEventListener) {
        parent.addEventListener('scroll', handler, false);
    }else if (parent.attachEvent) {
        parent.attachEvent('scroll', handler);
    }
    
    function handler(e) {
        console.log(e.elem);
        if (e.target.id == 'test') {
             // the button was clicked
        }
    }

});

var parent = document.getElementById('app');

if (parent.addEventListener) {
    parent.addEventListener('scroll', handler, false);
}else if (parent.attachEvent) {
    parent.attachEvent('onclick', handler);
}

function handler(e) {
    console.log('scrolled');
    if (e.target.id == 'test') {
         // the button was clicked
    }
}