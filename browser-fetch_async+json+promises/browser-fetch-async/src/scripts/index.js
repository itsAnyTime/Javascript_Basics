// before:

// import "../styles/main.scss";
// import "babel-polyfill"

// const modal = document.getElementById("myModal");
// let promiseOfModal = new Promise(function (resolve) {
//     window.setTimeout(function () {
//         resolve(modal)
//     }, (1000 * 60));
// });

// promiseOfModal.then(function(val) {
//     console.log("User has been on the page for 60 seconds");
//     val.style.display = "block";
// })

// modal.addEventListener("click", (e) => {
//     switch(e.target.className) {
//         case "close":
//         case "modal":
//         modal.style.display = "none"
//         break;
//     }
// })

// after

import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById("myModal");

 function promiseOfModal() {
    return new Promise(function (resolve) {
        window.setTimeout(function () {
            resolve(modal)
        }, (1000 * 60));
    });
}

async function time() {
    let convert = await promiseOfModal();
    console.log("User has been on the page for 60 seconds");
    convert.style.display = "block";
}
time()

modal.addEventListener("click", (e) => {
    switch(e.target.className) {
        case "close":
        case "modal":
        modal.style.display = "none"
        break;
    }
})

