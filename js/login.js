window.addEventListener('DOMContentLoaded', () => {


    const login = document.querySelector('.login_login'),
          pass = document.querySelector('.login_pass'),
          form = document.querySelector('.login_form');

    let users = [
        {
            login: 'admin',
            pass: 'admin'
        }
    ];

    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            for(let i = 0; i < users.length; i++) {
                if(users[i].login === login.value) {
                    if(users[i].pass === pass.value) {
                        window.localStorage.setItem('isLogined', '1');
                        window.location.href = 'index.html';
                    }
                    else {
                        errorMessage(form);
                    }
                }
                else {
                    errorMessage(form);
                }
            }
        });
    }

    function errorMessage(form) {
        let error = document.createElement('div');
        error.classList.add('error');
        error.textContent = "login or password isn't correct";
        error.style.color = 'red';
        error.style.marginTop = '20px';
        if(!document.querySelector('.error'))
            form.append(error);
        setTimeout(() => {
            error.remove();
        }, 2000);
    }

    //reg 

    const reg_log = document.querySelector('.reg_login'),
          reg_pass = document.querySelector('.reg_pass'),
          reg_rep_pass = document.querySelector('.reg_rep_pass'),
          reg_form = document.querySelector('.reg_form');

    reg_form.addEventListener('submit', (e) => {
        e.preventDefault();

        if(reg_log.value !== null) {
            if(reg_pass.value === reg_rep_pass.value) {
                const user = {login: reg_log.value, pass: reg_pass.value};
                users.unshift(user);
                localStorage.setItem('isLogined', 1);
                window.location.href = 'index.html';
            }
            else {
                errorMessage(reg_form);
                console.log('123');
            }
        } else {
            errorMessage(reg_form);
            console.log('123');
        }
    });


});