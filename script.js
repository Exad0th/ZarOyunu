'use strict';
const cl = function(girdi){
    console.log(girdi);
}
const oyuncu1 = document.querySelector('.player--0');
const oyuncu2 = document.querySelector('.player--1');
const skor0El = document.querySelector('#score--0');
const skor1El = document.getElementById('score--1');
const zarEl = document.querySelector('.dice');
const btnYeni = document.querySelector('.btn--new');
const btnYuvarla = document.querySelector('.btn--roll');
const btnTut = document.querySelector('.btn--hold');
const geciciSkor0El = document.getElementById('current--0');
const geciciSkor1El = document.getElementById('current--1');
const oyuncuDegistir = function(){
    document.getElementById(`current--${aktifOyuncu}`).textContent = 0;
    geciciSkor=0;
    aktifOyuncu = aktifOyuncu === 0 ? 1 : 0; // 1. oyuncuysa 2.'ye devret, 2. ise 1.'ye devret
    oyuncu1.classList.toggle('player--active');
    oyuncu2.classList.toggle('player--active');
}

let geciciSkor=0;
let aktifOyuncu=0;
let skorlar =[0,0];
let oyunBitti = true;

skor0El.textContent = 0;
skor1El.textContent = 0;
zarEl.classList.add('hidden');

btnYuvarla.addEventListener('click',function(){
        if(oyunBitti){
            let zar = Math.trunc(Math.random()*6)+1;
            zarEl.src = `dice-${zar}.png`
            zarEl.classList.remove('hidden');
        // Zar 1 gelmediği sürece geçici skora ekle, gelirse oyuncu değişecek
        if(zar != 1){
            geciciSkor += zar;
            document.getElementById(`current--${aktifOyuncu}`).textContent = geciciSkor; 

        }
        // Burada oyuncu sırası değişiyor.
        else{
            oyuncuDegistir();
        }
    }
})

btnTut.addEventListener('click',function(){
    if(oyunBitti){
            skorlar[aktifOyuncu] += geciciSkor;
            document.querySelector(`#score--${aktifOyuncu}`).textContent = skorlar[aktifOyuncu];
            if (skorlar[aktifOyuncu] >= 100) {
                oyunBitti=false;
                document.querySelector(`.player--${aktifOyuncu}`).classList.add('player--winner')
                document.querySelector('.dice').classList.add('hidden')
            }
            else{
                oyuncuDegistir();
            }
    }

})

btnYeni.addEventListener('click',function(){
    geciciSkor=0;
    aktifOyuncu=0;
    skorlar =[0,0];
    oyunBitti = true;
    document.querySelector('#score--0').textContent = 0;
    document.querySelector('#score--1').textContent = 0;
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = 0;
    oyuncu1.classList.toggle('player--active');
    oyuncu2.classList.toggle('player--active');
})