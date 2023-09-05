


// !/ dark more 

const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");

if(modeToggle){
  modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
});
}


//! / load more!

const loadmore = document.querySelector('.load-more')

    let currentItems = 3;
if(loadmore){
  loadmore.addEventListener('click',(e) => {
    const elementList = [...document.querySelectorAll('.topmovies')];
    e.target.classList.add('show-loader')

    for (let i = currentItems; i < currentItems + 3; i++){
        setTimeout(function(){
            e.target.classList.remove('show-loader');
            if (elementList[i]){
                elementList[i].style.display = 'flex';
            }
        }, 1000)
    }

    currentItems +=3;
    if (currentItems >= elementList.length) {
        event.target.classList.add('loader')
    }
  });
}




// ! toTop scrool 

const toTop = document.querySelector(".toTop");

window.addEventListener("scroll", () => {
   if(toTop){
    if(window.pageYOffset > 100){
      toTop.classList.add("active");
      }else{
          toTop.classList.remove("active");
      }
   }
});

// !/register 

const ShowPassword = document.querySelector(".fa-eye");
const ClosePassword = document.querySelector(".fa-eye-slash");
const PasswordInput = document.querySelector("#password ");

console.log("ok")

const ChangeTypePassword = (type, Close, Show)=>{
    PasswordInput.getAttribute("type", "password");
    PasswordInput.setAttribute("type",type)
    ShowPassword.style.display=Show;
    ClosePassword.style.display=Close;
}

ShowPassword &&
    ShowPassword.addEventListener("click", ()=>{
        ChangeTypePassword("text","block","none");
      
    });
    

ClosePassword &&
    ClosePassword.addEventListener("click", ()=>{
        ChangeTypePassword("password","none","block");
    });
    

    // !/regiset underline

var strenght = document.querySelector(".streng");
PasswordInput && 
    PasswordInput.addEventListener("keyup", (e) => {
    if(e.target.value.length === 0 ){
        strenght.style.width = "0%";
        strenght.style.background = "transparent";
    }
    if(e.target.value.length > 0 ){
        strenght.style.width = "33%";
        strenght.style.background = "red";
    }
    if (e.target.value.length > 5 && e.target.value.length <=9 ){
        strenght.style.width = "66%";
        strenght.style.background = "gold";
    }
    if(e.target.value.length >= 10 ){
        strenght.style.width = "100%";
        strenght.style.background = "green";
    }
})


// !preloader

var loader = document.getElementById("preloader");
if(loader){
    loader.style.display = "block";

setTimeout(function() {
    loader.style.display = "none";
}, 1000);
}

// !swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// ! text read more

const readmore = document.querySelector('.word');
if (readmore) {
    readmore.addEventListener('click', event => {
        const current = event.target;
        const isReadMoreBtn = current.classList.contains('read-more-btn');
    
        if (!isReadMoreBtn) return;
    
        const currentText = event.target.parentNode.querySelector('.read-more-text');
    
        currentText.classList.toggle('read-more-text--show');
        current.textContent = currentText.classList.contains('read-more-text--show') ?
            "Read Less..." : "Read More...";
    });
}

// ! timer

function updateTimer() {
    future  = Date.parse("januvary 01, 2024 00:00:00");
    now     = new Date();
    diff    = future - now;
  
    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );
  
    d = days;
    h = hours - days  * 24;
    m = mins  - hours * 60;
    s = secs  - mins  * 60;
  
    document.getElementById("timer")
      .innerHTML =
        '<div>' + d + '<span>days</span></div>' +
        '<div>' + h + '<span>hours</span></div>' +
        '<div>' + m + '<span>minutes</span></div>' +
        '<div>' + s + '<span>seconds</span></div>' ;
  }
  setInterval('updateTimer()', 1000 );
  