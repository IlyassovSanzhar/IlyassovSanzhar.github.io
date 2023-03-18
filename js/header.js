window.addEventListener('DOMContentLoaded', () => {

    const log_btn = document.querySelector('.header_log'),
          reg_btn = document.querySelector('.header_reg');

    log_btn.addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    reg_btn.addEventListener('click', () => {
        window.location.href = 'register.html';
    });

    console.log(localStorage.getItem('isLogined'));

    if(localStorage.getItem('isLogined') === '1') {
        let btns_wrapper = document.querySelector('.header_log_reg_wrapper'),
            header_nav = document.querySelector('.header_nav');

        btns_wrapper.remove();

        const user_icon = document.createElement('img');
        user_icon.setAttribute('src', 'img/user.png');
        user_icon.classList.add('user_icon');
        user_icon.style.marginLeft = '500px';
        user_icon.style.height = '50px';
        user_icon.style.cursor = 'pointer';

        header_nav.append(user_icon);
    }

    const user_icon = document.querySelector('.user_icon');

    if(user_icon) {
        user_icon.addEventListener('click', () => {
            localStorage.setItem('isLogined', 0);
            location.href = 'index.html';
        });
    }
});