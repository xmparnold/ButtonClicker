var loggedin = false;

function liketwo() {
    document.querySelector("#likestwo").innerText++;
    alert("You liked this word");
    }

function likeone (element) {
    document.querySelector("#likesone").innerText++;
    alert("You liked this word");
}

function login() {
    if (loggedin == false) {
        loggedin = true;
        document.querySelector("#login").innerText = "Logout";
    }
    else {
        loggedin = false;
        document.querySelector("#login").innerText = "Login";
    }
}

function hidebut(element) {
    element.remove();
}