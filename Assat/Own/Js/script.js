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

function service(serviceId){
    const serviceImage = document.getElementById(serviceId);
    const serviceDisplay = document.querySelectorAll('.service-box')

    serviceDisplay.forEach(nav =>{
        if (nav.id !== serviceImage) {
            nav.style.display = 'none';
        }
    });

    serviceImage.style.display = serviceImage.style.display === 'none' ? 'grid' : 'none'
}