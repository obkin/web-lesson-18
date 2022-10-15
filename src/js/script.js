window.addEventListener('DOMContentLoaded', () => {

    const btns = document.querySelectorAll('[data-btns]');

    btns.forEach((item) => {
        item.addEventListener('click', () => {
            console.log('and again success');
        });
    }); 

});