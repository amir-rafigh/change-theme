const button = document.querySelector('.button');
const body = document.querySelector('body');
const change_theme = document.querySelector('.change-theme')
const h1 = document.querySelector('h1');
const h3 = document.querySelectorAll('.h3');
const rafigh = document.querySelector('.amir-rafigh')
// console.log(button)
button.addEventListener('click' , ()=>{
    button.classList.toggle('button_2');
    body.classList.toggle('body');
    change_theme.classList.toggle("change-theme_2");
    h3.forEach(element => {
        element.classList.toggle('h3_2')
    });

    rafigh.classList.toggle("amir-rafigh-2")
    
    
    

})
