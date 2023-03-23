const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabsElement = $$('.tab-item');
const line = $('.line');
const tabActive = $('.tab-item.active')

line.style.top = (tabActive.offsetTop - 4) + 'px';
line.style.height = tabActive.offsetHeight + 'px';

tabsElement.forEach(element => {
    element.onclick = function(){
        $('.tab-item.active').classList.remove('active');
        this.classList.add('active');
        line.style.top = this.offsetTop + 'px';
        line.style.height = this.offsetHeight + 'px';
    }
});

