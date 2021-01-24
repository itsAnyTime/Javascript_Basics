// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/
let myModal = document.querySelector('#myModal');
let closeButton = document.querySelector('.close');

function close() {
    closeButton.addEventListener('click', function() {
        myModal.style.display='none'
    })
}

let promise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(myModal);        
    }, 15000)
})

promise.then(function(value) {
    value.style.display='block'
})
.then(close())
// .then() // if you need more...
;