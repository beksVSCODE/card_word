const input = document.querySelector('.page__value')
const inputTranslate = document.querySelector('.page__transalte')
const pushBtn = document.querySelector('.page__btn')
const placeForCard = document.querySelector('.page__card')
const startBtn = document.querySelector('.page__btn__start')
const firstBlock = document.querySelector('.page__input')
const secondBlock = document.querySelector('.place')
const secondBlockPlace = document.querySelector('.place__place')
const nextBtn = document.querySelector('.place__btn')
const translate = document.querySelector('.place__translate')
const showTranslate = document.querySelector('.place__russia')
const showTitle = document.querySelector('.place__title')
//-----------------------------
const testBtn = document.querySelector('.btn')
const testBtnCircle = document.querySelector('.circle')
//для передвижения кнопки 
testBtnCircle.addEventListener('click',function changeColor(){
    testBtn.classList.toggle('active')
    testBtnCircle.classList.toggle('active')

 
 
 })
//--------------------------
//метод диструктуризации, изменение языка
let arrayValue = []
let arrayValueRussia = []
testBtnCircle.addEventListener('click', function(){
    [arrayValue,arrayValueRussia] = [arrayValueRussia,arrayValue];
    console.log(arrayValue,arrayValueRussia);
   
})
//-----------------------------


pushBtn.addEventListener("click", function(){
        if(input.value && inputTranslate.value !== ''){
            arrayValue.push(input.value)
            arrayValueRussia.push(inputTranslate.value)
            // if(inputTranslate.value >= 15){
            //     showTitle.style.fontSize = '5px'
            // }
            input.value = ''
            inputTranslate.value = ''
            console.log(arrayValue);
            console.log(arrayValueRussia);
        }

        // if (event.keyCode === 13) {}
   
})
startBtn.addEventListener('click' , createCard)


function createCard(){
    //метод filter
        if(arrayValue.length && arrayValueRussia.length !== 0 ){
            firstBlock.style.display = 'none'
            secondBlock.style.display = 'flex' 
            testBtn.style.display = 'block'
            secondBlockPlace.innerHTML = `
            <div class="place__card"><h1 class="place__card__title">${arrayValue[0]}</h1></div>
            `  
        }
    //--------------------
        
}

let count = 0
let count2 = -1
nextBtn.addEventListener('click', function(){
    count += 1
    console.log(count);
    if(count == arrayValue.length){
        count = 0
    }
    setTimeout(()=>{
        arrayValue.forEach((element,index,array) => {
            secondBlockPlace.innerHTML = `
            <div class="place__card"><h1 class="place__card__title">${array[count]}</h1></div>
            `
            if(count == arrayValue.length){
                count = 0
            }
        })
        showTitle.innerHTML = ''
      
    },1400)
    count2 +=1
    if(count2 == arrayValueRussia.length){
        count2 = 0
    }
    showTitle.innerHTML = `${arrayValueRussia[count2]}`
    console.log(count2);
    
   

    // if(count && count2 >= arrayValue.length){
    //     count = -1
    //     count2 = -2
    // }


})

showTranslate.addEventListener('click', function(){
    location.reload()
 })

// nextBtn.addEventListener('click', function(){
   
   
// })


// arrayValue.forEach((element,index) => {
//     secondBlockPlace.innerHTML = `
//     <div class="place__card"><h1>${element}</h1></div>
//     `
// })