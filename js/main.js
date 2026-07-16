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
    let btnOrange = document.querySelectorAll('.btn__orange');
    let modal = document.querySelector('.modal')
    let modalClose = document.querySelector('.btn__close')
    tabItems.forEach(tabItem => {
        tabItem.addEventListener('click', function (evt) {
            const alias = this.dataset.alias;
            opentab(evt, alias);
        });
    });
    btnOrange.forEach(btn => {
        btn.addEventListener('click', function (evt) {
            evt.preventDefault();
            modal.classList.add('open');
        });
    });
    modalClose.addEventListener('click', function (evt) {
        evt.preventDefault();
        modal.classList.remove('open');
    });
});