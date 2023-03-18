window.addEventListener('DOMContentLoaded', () => {
    const btn_nurbol = document.querySelector('.author_btn_nurbol');
    const btn_sanzhar = document.querySelector('.author_btn_sanzhar'),
          wrapper_nurbol = document.querySelector('.author_wrapper_nurbol'),
          wrapper_sanzhar = document.querySelector('.author_wrapper_sanzhar');
    
    btn_nurbol.addEventListener('click', () => {
        if(!btn_nurbol.classList.contains('author_btn_active'))
            btn_nurbol.classList.add('author_btn_active');
            btn_sanzhar.classList.remove('author_btn_active');
            wrapper_nurbol.classList.remove('author_wrapper_disable');
            wrapper_sanzhar.classList.add('author_wrapper_disable');
    });

    btn_sanzhar.addEventListener('click', () => {
        if(!btn_sanzhar.classList.contains('author_btn_active'))
            btn_sanzhar.classList.add('author_btn_active');
            btn_nurbol.classList.remove('author_btn_active');
            wrapper_nurbol.classList.add('author_wrapper_disable');
            wrapper_sanzhar.classList.remove('author_wrapper_disable');
    });
});