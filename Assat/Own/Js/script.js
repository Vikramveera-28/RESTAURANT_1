
const foodTitleArray = [];
const foodPriceArray = [];
const foodRateArray = [];

function liveAlertBtn(foodTitleId, foodPriceId) {
    const foodTitle = document.getElementById(foodTitleId).textContent;
    const foodPrice = document.getElementById(foodPriceId).textContent;
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const appendAlert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `<div>${message}</div>`,
            `<button type="button" class="btn-close" data-bs-dismiss="alert"></button>`,
            `</div>`
        ].join('')
        alertPlaceholder.append(wrapper)
    }
    appendAlert(`Your Order ${foodTitle}, cost is ₹ ${foodPrice}/-`, 'success')

    foodTitleArray.push(foodTitle)
    foodPriceArray.push(foodPrice)

    console.log(foodTitleArray[0]);
    console.log(foodPriceArray[0]);
}


function order() {
    const orderPlace = document.getElementById('orderPlace')
    const appendOrder = (message, type) => {
        const orderwrapper = document.createElement('div')
        orderwrapper.innerHTML = [
            `<div class="d-flex justify-content-between text-light bg-secondary rounded-3 px-2 py-3 my-3">${message}</div>`
        ].join('')
        orderPlace.append(orderwrapper)
    }
    for (let i = 0; i < foodTitleArray.length; i++) {
        appendOrder(`<div class="text-light">${foodTitleArray[i]}</div><div class="text-warning fw-bold">₹ ${foodPriceArray[i]}/-</div>`, 'dark')
        
    }
    const totalPrice = document.getElementById('totalOrderPrice')

    var Sum = 0;
    for (let j = 0; j < foodPriceArray.length; j++) {
        Sum = Sum + Number(foodPriceArray[j])
    }
    console.log(Sum);
    totalPrice.innerHTML = `₹ ${Sum}/-`;
}


// function order() {
//     const orderPlace = document.getElementById('orderPlace')
//     const appendOrder = (message, type) => {
//         const orderwrapper = document.createElement('div')
//         orderwrapper.innerHTML = [
//             `<div class="alert alert-${type} mt-2" role="alert">`,
//             `<div>${message}</div>`,
//             `</div>`
//         ].join('')
//         orderPlace.append(orderwrapper)
//     }
//     for (let i = 0; i < foodTitleArray.length; i++) {
//         appendOrder(`Your Order ${foodTitleArray[i]}, cost is ₹ ${foodPriceArray[i]}/-`, 'dark')
        
//     }
//     const totalPrice = document.getElementById('totalOrderPrice')

//     var Sum = 0;
//     for (let j = 0; j < foodPriceArray.length; j++) {
//         Sum = Sum + Number(foodPriceArray[j])
//     }
//     console.log(Sum);
//     totalPrice.innerHTML = `₹ ${Sum}/-`;
// }













function menuDetails(boxId) {
    const box = document.getElementById(boxId);
    const Bx = document.querySelectorAll('.menu-box');

    Bx.forEach(nav => {
        if (nav.id !== box) {
            nav.style.display = 'none';
        }
    });

    box.style.display = box.style.display === 'none' ? 'block' : 'none'
}