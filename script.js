//Home Carousel
$('.home-coursel').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    autoplay:true,
    autoplayTimeout:7000,
    animateout:'fadeOut',
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//Navbar
window.addEventListener('scroll',function(){
    let navbar=document.getElementById("navbar");
    //Toggles Fixed Class In Navbar On Scroll
    navbar.classList.toggle('fixed',this.window.scrollY > 0)
})

//Nav Buttons
let menuBtn = document.querySelector('.menu-btn');
let searchBtn = document.querySelector('.searchbtn');
let cartBtn = document.querySelector('.cartbtn');
let darkBtn = document.querySelector('.darkbtn');
let signImg = document.getElementById('signImg');


searchBtn.onclick = function()
{
    //Toggles active class in search form on click
    document.getElementById("search-form").classList.toggle('active');

    //Change icon on click
    if(document.getElementById("search-form").classList.contains('active'))
    {
        searchBtn.classList.remove("bx-search-alt-2");
        searchBtn.classList.add("bx-x");
    }
    else
    {
        searchBtn.classList.remove("bx-x");
        searchBtn.classList.add("bx-search-alt-2");
    }
}



darkBtn.onclick = function()
{
    //Toggles dark-mode class to body on click
    document.body.classList.toggle('dark-mode');

    //If body contains dark mode class
    if(document.body.classList.contains('dark-mode'))
    {
        //Change dark mode button to sun
        darkBtn.classList.remove("bx-moon");
        darkBtn.classList.add("bx-sun");

        //change sign img for dark background
        signImg.src="images/sign-dark.jpeg"
    }
    else
    {
       //Change dark mode button to moon
        darkBtn.classList.remove("bx-sun");
        darkBtn.classList.add("bx-moon");

        //change sign img for dark background
        signImg.src="images/sign-light.jpeg"
    }
}

//Menu Section
let menuTabs = document.querySelector('.menu-tabs');
menuTabs.addEventListener('click',function(e){
    if(e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active'))
    {
        const target=e.target.getAttribute("data-target");

        menuTabs.querySelector('.active').classList.remove('active');

        e.target.classList.add("active");

        let menuSection=document.querySelector(".menu-section");

        menuSection.querySelector(".menu-tab-content.show").classList.remove("show");

        menuSection.querySelector(target).classList.add("show");
    }
    else
    {
        return
    }
})

//Events Carousel
 $('.events-carousel').owlCarousel({
    loop:true,
    margin:30,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 2
        }
    }
})

//Team Carousel
$('.team-carousel').owlCarousel({
    loop:true,
    margin:20,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 3
        }
    }
})

//Review Carousel
$('.review-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:false,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 3
        }
    }
})

/*Blog Carousel*/
$('.blog-carousel').owlCarousel({
    loop:true,
    margin:5,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 3
        }
    }
})
