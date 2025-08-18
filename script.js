// navbar toggling
function navBar() {
    var bar = document.getElementById("TopNav");
    if (bar.className === "topnav") {
        bar.className += " responsive";
    } else {
        bar.className = "topnav";
    }
}







// button stuff
var button1 = document.getElementById('button1');
if (button1) {
    button1.addEventListener('click', function () {
        button1.textContent = "Hi! You clicked!";
        setTimeout(() => {
            button1.textContent = "Click Me!";
        }, 2000);
    });
}
