const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll('.logo')


window.addEventListener("DOMContentLoaded", ()=> {

    setTimeout(()=> {
        logoSpan.forEach((span, idx) => {
            setTimeout(()=> {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=> {
            logoSpan.forEach((span, idx) => {
                setTimeout(()=> {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000)

        setTimeout(()=> {
            intro.style.top = '-100vh';
        }, 2300)

    })
})


hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
