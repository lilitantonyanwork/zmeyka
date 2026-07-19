function opentab(evt, tabName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab__content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab__link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener('DOMContentLoaded', () => {
    let tabItems = document.querySelectorAll('.tab__link');
    let btnOrange = document.querySelectorAll('.store__item');
    let modal = document.querySelector('.modal')
    let modalClose = document.querySelector('.btn__close');
    if(tabItems){
        tabItems.forEach(tabItem => {
            tabItem.addEventListener('click', function (evt) {
                const alias = this.dataset.alias;
                opentab(evt, alias);
            });
        });
    }

    if(btnOrange){
        btnOrange.forEach(btn => {
            btn.addEventListener('click', function (evt) {
                evt.preventDefault();
                modal.classList.add('open');
            });
        });
    }

    if(modalClose){
        modalClose.addEventListener('click', function (evt) {
            evt.preventDefault();
            modal.classList.remove('open');
        });
    }


    let btnGo =  document.querySelectorAll('.task__action');
    if(btnGo){
        btnGo.forEach(btn => {
            btn.addEventListener('click', function (evt) {
                if (!this.querySelector('.btn__go').classList.contains('hide')) {
                    this.querySelector('.btn__go').classList.add('hide');
                    this.querySelector('.btn__load').classList.add('show');
                    setTimeout(function () {
                        btn.querySelector('.btn__load').classList.remove('show');
                        btn.querySelector('.btn__done').classList.add('show');
                    }, 3000);
                }
            });
        });
    }


});