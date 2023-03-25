const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabsElement = $$('.tab-item');
const line = $('.line');
const tabActive = $('.tab-item.active')

line.style.top = (tabActive.offsetTop - 4) + 'px';
line.style.height = (tabActive.offsetHeight - 4) + 'px';

tabsElement.forEach(element => {
    element.onclick = function(){
        $('.tab-item.active').classList.remove('active');
        this.classList.add('active');
        line.style.top = this.offsetTop + 'px';
        line.style.height = this.offsetHeight + 'px';
    }
});

const itemsElement = document.querySelectorAll('.list-products .item');

itemsElement.forEach(item => {
    item.addEventListener('click' , function(event) {
        if (event.target.classList.contains('add-count')) {
            let itemNew = item.cloneNode(true);
            let checkIsset = false;
            let listCart = document.querySelectorAll('.cart .item');
            listCart.forEach(cart => {
                if (cart.getAttribute('data-key') === itemNew.getAttribute('data-key')){
                    checkIsset = true;
                    cart.classList.add('danger');
                    setTimeout(function() {
                        cart.classList.remove('danger');
                    },1000)
                }
            })
            if (checkIsset === false) {
                document.querySelector('.listCart').appendChild(itemNew);
            }
        }
    })
})

function remove(key) {
    let listCart = document.querySelectorAll('.cart .item');
    listCart.forEach(item => {
        if(item.getAttribute('data-key') == key){
            item.remove();
            return;
        }
    })
}

