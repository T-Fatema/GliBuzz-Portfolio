
window.addEventListener("load",function(){
	document.querySelector(".page-loader").classList.add("fade-out");
	setTimeout(function(){
		document.querySelector(".page-loader").style.display="none";
	},600)

	/*----animation on scroll-----*/
	AOS.init();
});

/*toggle navbar*/

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);


function toggleNav(){
	navToggler.classList.toggle("active");
	document.querySelector(".nav").classList.toggle("open");
}

/* nav close when click item */

document.addEventListener("click",function(e){
	if (e.target.closest(".nav-item")) {
		toggleNav();
	}
});

/*-----sticky header-----*/

window.addEventListener("scroll",function(){
	if(this.pageYOffset > 60){
		document.querySelector(".header").classList.add("sticky");
	}
	else{
		document.querySelector(".header").classList.remove("sticky");
	}

});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: false,
            loop: false
        }
    }
});