/* Фильтр для мобильных устройств */

const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper'); 
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');


sidebarToggleBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
};

/* Показать еще 3 карточки */

const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

btnShowMoreCards.addEventListener('click', function () {
    hiddenCards.forEach(function(card) {
        card.classList.remove('card-link--hidden');
    })
})

/* Показать/скрыть контент внутри виджитов */

const widgets = document.querySelectorAll('.widget');
widgets.forEach(function(widget) {

    widget.addEventListener('click', function(e) {
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
    })
})

/* Кнопка "Любая" */

const checkboxAny = document.querySelector('#location-05');
const topLocationCheckbox = document.querySelectorAll('[data-location-param]');

/* Клик по кнопке "Любая" и отключение остальных кнопок */

checkboxAny.addEventListener('change', function() {

    if(checkboxAny.checked) {
        topLocationCheckbox.forEach(function (item) {
            item.checked = false;
        });

    }
})

/* Клик по кнопкам выбора времени до метро и отключение кнопоки "Любая" */

topLocationCheckbox.forEach(function(item) {
    item.addEventListener('change', function() {
        if(checkboxAny.checked) {
            checkboxAny.checked = false;
        }
    })
})

/* Показать еще 3 доп опции чекбокса в фильтре */

const showMoreoptions = document.querySelector('.widget__show-hidden');
const hiddenCheckboxes = document.querySelectorAll('.checkbox--hidden');

showMoreoptions.onclick = function (e) {
    e.preventDefault();
    
    // Если блоки были скрыты, значит показываем их
    if(showMoreoptions.dataset.options == 'hidden') {
        hiddenCheckboxes.forEach(function (item) {
            item.style.display = 'block';
        });
        showMoreoptions.innerText = "Скрыть";
        showMoreoptions.dataset.options == 'visible';
    }
    // Если блоки были видны, значит скрываем их
    else if(showMoreoptions.dataset.options == 'visible') {
        hiddenCheckboxes.forEach(function (item) {
            item.style.display = 'none';
        });
        showMoreoptions.innerText = "Показать ещё";
        showMoreoptions.dataset.options == 'hidden';
    }
}