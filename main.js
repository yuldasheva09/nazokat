let body = document.querySelector('body'); 
let swiperWrapper = document.querySelector('.swiper-wrapper'); 
 
// Fetch data from JSONPlaceholder 
const restapi = fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10`) 
    .then(res => res.json()) 
    .then(data => { 
        console.log(data); 
 
        data.forEach(item => { 
            let swiperSlide = document.createElement('div'); 
            let swiperSlideImage = document.createElement('img'); 
 
            swiperSlide.classList.add('swiper-slide'); 
            swiperSlideImage.setAttribute('src', item.url); 
            swiperSlide.appendChild(swiperSlideImage); 
 
            swiperWrapper.appendChild(swiperSlide); 
        }); 
 
        // Initialize Swiper after adding slides 
        var swiper = new Swiper(".mySwiper", { 
            effect: "cards", 
            grabCursor: true, 
        }); 
    }) 
    .catch(error => { 
        console.error('Error fetching data:', error ); 
    }) 
    .finally(() => { 
        console.log('Aliw Boq'); 
    });

