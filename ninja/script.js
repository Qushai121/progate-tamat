
let awal = 0

const updateSlide=(p)=> {
    awal += p;
    munculslide(awal);
}

const munculslide = (p) => {
    const slides = document.getElementsByClassName("card");
    if (p > slides.length - 1){
        awal = 0;
    }
    if(p < 0 ){
        awal = slides.length - 1;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display ="none";
    }
    slides[awal].style.display ="block";
}
munculslide(awal);

const muncul1 = document.getElementById("muncul1")
const muncul2 = document.getElementById("muncul2")
const muncul3 = document.getElementById("muncul3")

      function muncul (slis) {
        if(slis === 'muncul1'){
            muncul1.style.display = "block";
        }
        if(slis === 'muncul2'){
            muncul2.style.display = "block";
        }
        if(slis === 'muncul3'){
            muncul3.style.display = "block";
        }
      }

      function tutup (udah){
        if(udah === 'tutup1'){
            muncul1.style.display= "none"
        }
        if(udah === 'tutup2'){
            muncul2.style.display= "none"
        }
        if(udah === 'tutup3'){
            muncul3.style.display= "none"
        }
      }

      const accordion = document.getElementsByClassName("accordion");

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      const panel = this.nextElementSibling;

      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
