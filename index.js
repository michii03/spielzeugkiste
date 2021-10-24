


var bilder = ["Ballon.png","Ballon2.png","Ballon3.png"];
var sizing = [2.38, 1.64, 2.44];

var counter_Bilder = 0;

var change = true;
var counter = 0;

function createBubble() {
    const ballons = document.getElementById("ballons");
    const createElement = document.createElement("span");

    createElement.setAttribute("id", counter+"_span");
    ballons.appendChild(createElement);

    var span = document.getElementById(counter+"_span");

    
    
    span.style.background = "url(images/"+bilder[counter_Bilder]+")";
    span.style.backgroundSize = "cover";

    

    

    //span.style.background = "url(images/Ballon.png)";

    var size = Math.random() * 60;

    span.style.width = 20 + size + "px";
    span.style.height = 20 + size * sizing[counter_Bilder] + "px"; // Ballon.png
    //createElement.style.height = 20 + size + "px";
    span.style.left = Math.random() * innerWidth + "px";

    setTimeout(() => {
        createElement.remove();
    }, 12000);

    // COUNTER ERHÖHEN FÜR UNTERSCHIEDLICHE BILDER IM RICHTIGEN FORMAT

    if (counter == 30) {
        counter = 0;
    } else {
        counter++;
    }

    counter_Bilder++;

    if (counter_Bilder == bilder.length) {
        counter_Bilder = 0;
    }
}
setInterval(createBubble,500);


function changeLayer() {
    var glass = document.getElementById("glass");
    var menu = document.getElementById("menu");

    if (change) {
        glass.style.opacity = "0";
        menu.style.opacity = "1";
    } else {
        glass.style.opacity = "1";  
        menu.style.opacity = "0";
    }

    change = !change;
}