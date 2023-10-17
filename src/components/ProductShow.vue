<script setup>

</script>

<template>
  <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://asset.cs2go.com/project-assets/20230912/13bfa1cc3c2daa668b6565d9fda48202.webp" style="width: 100%; height: auto; object-fit: fill; object-position: center;">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div class="container">
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://asset.cs2go.com/project-assets/20230912/0c52906e28616563f9b5cc180346c42b.webp" style="width: 100%; height:auto; object-fit: fill; object-position: center">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div class="container">
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://asset.cs2go.com/project-assets/20230912/40f5ec6b38ce0816452549d345300d4d.webp" style="width: 100%; height: auto;  object-fit: fill; object-position: center;">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
        <div class="container">
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="fixcoral" style="height: 300px;"></div>
  <div class="contai2">
    <figure>
      <a href="/market">
         <img src="/src/assets/pic/secondary1.webp" alt="">
      </a>
      <a href="/market">
        <img src="/src/assets/pic/secondary2.webp" alt="">
      </a>
      <a href="/market">
        <img src="/src/assets/pic/secondary3.webp" alt="">
      </a>
      <a href="/market">
        <img src="/src/assets/pic/secondary4.webp" alt="">
      </a>
    </figure>
    <figure>
      <a href="/market">
        <img src="/src/assets/pic/secondary5.webp" alt="">
      </a>
      <a href="/market">
        <img src="/src/assets/pic/secondary6.webp" alt="">
      </a>
      <a href="/market">
        <img src="/src/assets/pic/chicken.webp" alt="">
      </a>
      <a href="/market">
        <img src="/src/assets/pic/card.webp" alt="">
      </a>
    </figure>
  </div>

  <div class="contai3">
    <h2>เลือกหมวดหมู่สินค้า</h2>
    <div class="bigfig">
      <figure>
        <div class="ball">
          <RouterLink to="/market" class="tag">
            <img src="/src/assets/pic/Rectangle19.png">
          </RouterLink> 
          
        </div>
        <div class="ball">
          <RouterLink to="/market" class="tag">
            <img src="/src/assets/pic/Rectangle20.png">
          </RouterLink> 
          
        </div>
        <div class="ball">
          <RouterLink to="/market" class="tag">
            <img src="/src/assets/pic/Rectangle21.png">
          </RouterLink> 
          
        </div>
        <div class="ball">
          <RouterLink to="/market" class="tag">
            <img src="/src/assets/pic/Rectangle22.png">
          </RouterLink> 

        </div>
        <div class="ball">
          <RouterLink to="/market" class="tag">
            <img src="/src/assets/pic/Rectangle23.png">
          </RouterLink> 

        </div>
      
    </figure>
  
    </div>
  </div>

  <a href="#">
    <div class="nav">
          <!-- <img src="../assets/pic/arrowup.png" alt="" width="25px" height="25px"> -->
          <p style="color: black; font-weight: bold; font-size: 40px;">^</p>
    </div>
  </a>

  <div class="contai4">
    <h2>CS2GO : จุดหมายปลายทางชั้นนำของคุณสำหรับตลาดสกินที่ดีที่สุด</h2>
    <div class="bigmarket">
      <div class="market">
        <div class="marketflex">
          <div class="mtex">
            <h3>I'm the buyer</h3>
            <b>รับมากขึ้นในราคาที่ถูกลง</b>
          <p>เพลิดเพลินกับราคาที่ต่ำกว่า steam Marketplace ถึง 100%</p>
        </div>
        <img src="/src/assets/pic/trolley-cart.png" alt="">
      </div>
      <RouterLink to="/market" class="tag">
        <button>ไปตลาด</button>
      </RouterLink> 
      </div>
      <div class="market" style="">
        <div class="marketflex">
          <div class="mtex">
            <h3>I'm the seller</h3>
            <b>2% commission</b>
            <p>Enjoy the Lowest Commission in the Market</p>
          </div>
          <img src="/src/assets/pic/shop.png" alt="">
        </div>
        <RouterLink to="/market" class="tag">
        <button>รายการ</button>
      </RouterLink> 
      </div>
    </div>
  </div>
  <div class="space" style="height: 200px;"></div>



    
</template>


<style scoped>
body{
  margin: 0%;
  padding: 0%;
  background-color: #333;

}

h2{
  color: white;
}

.nav{
  background-color: lightgray;
  margin-right: 2rem;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  position: fixed;
  align-items: center;
  justify-content: center;
  bottom: 50px;
  right: 0;
}

.nav figure{
  margin-top: 15px;
  margin-left: 7px;
}
.nav img:hover{
  cursor: pointer;
}
.contai2{
  margin: 0 auto;
  width: 90%;
  margin-top: -300px;
  display: grid;
  gap: 10px; /* ระยะห่างระหว่างรูปภาพแนวตั้ง */
  justify-content: center; /* จัดให้รูปภาพอยู่กึ่งกลางแนวนอน */
}
.contai2 img{
  width: 250px;
  height: 140px;
  margin: .2rem;
  background-color: rgb(34, 31, 31);
  border-radius: 10px;
}

.contai3{
  margin-top: 90px;
  height: 400px;
  text-align: center;
}
.bigfig{
  margin-top: 40px;
}
.contai3 figure{
  display: flex;
  justify-content: center; /* จัดให้รูปภาพอยู่กึ่งกลางแนวนอน */
}
.ball {
  width: 6rem;
  height: 6rem;
  margin: .5rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.ball img {
  width: 100%; /* ปรับขนาดความกว้างของรูปให้เท่ากับ .ball */
  height: 100%; /* ปรับขนาดความสูงของรูปให้เท่ากับ .ball */
  margin-top: 9px;
}


.ball:hover{
  cursor: pointer;
}


.contai4{
  height: 100%;
  text-align: center;
}
.bigmarket{
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.market{
  height: 15rem;
  width: 30rem;
  background-color: lightgray;
  border-radius: 17px;
  text-align: left;
  padding: 20px;
  margin: 1rem;
}
.mtex{
  width: 230px;
  color: black;
}
.mtex h3{
  font-size: 25px;
  font-weight: bold;
}
.mtex h3,b,p{
  color: #333;
}

.marketflex{
  display: flex;
}
.market button{
  margin-top: 20px;
  width: 150px;
  height: 35px;
  border-radius: 3px;
  border: none;
  background-color: lightcoral;
  font-weight: bold;
  color: black;
}
.market button:hover{
  background-color: brown;
  color: #fff;
}
.market img{
  margin-top: 10px;
  margin-left: 20px;
  width: 150px;
  height: 120px;
}
.carousel {
  margin-top: -25px;
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 30rem;
}

.carousel-inner {
  margin-top: 1.5%;
}


.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
/* rtl:begin:ignore */
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}
/* rtl:end:ignore */


/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; 
}

.featurette-heading {
  letter-spacing: -.05rem;
}

/* rtl:end:remove */

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}

.cardframe:hover{
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
}
.panelbuttcon{
  display: flex;
}

.buttcon{
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  
}

.indisbutt{
  margin: auto;
}

.quatitybuttbgminus:hover{
background-color: rgb(248, 79, 49);
}

.quatitybuttbgplus:hover{
background-color: rgb(35, 197, 82);
}


.quatitybutt{
  border: hidden;   
  background-color: transparent;
}

.no-spinners::-webkit-inner-spin-button,
.no-spinners::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0; 
}


.imgbutt{
  width: 1vw;
}

.addtocartbutt{
    background-color: rgb(255, 172, 47);
    border: hidden;
  }

  .addtocartbutt:hover{
    background-color: rgb(207, 130, 13);
    border: hidden;
  }

  .homepagebutt{
    background-color: rgb(168, 23, 15);
    border: hidden;
  }

  .homepagebutt:hover{
    background-color: rgb(119, 14, 8);
    border: hidden;
  }

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(148, 148, 148, 0.5);
}

@media screen and (max-width: 700px) {
  .carouselcon{
    width: 90%;
    border: hidden  rgb(255, 189, 42);
    
  }

  .carouselIMG{
    border: 4px solid rgb(90, 5, 0);
    border-radius: 5px;
  }

  .imgbutt{
  width: 5vw;
}

  .modal-content{
    width: 95vw;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(255, 255, 255);
    background-color: rgb(100, 20, 20);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    text-align: center;
 }
 .modal-content h3{
    padding: 0%;
    font-weight: 600;
    margin-bottom: 1%;
 }

 .modal-content p {
    font-size: 16px;
    font-weight: 600;
    padding: 0%;
    margin-bottom: 1%;
 }

 .modal-content marquee{
    font-size: 16px;
    font-weight: 700;
    padding: 0%;
    
 }


}

@media screen and (min-width: 768px) {
  .carouselcon{
    width: 70%;
    border: hidden  rgb(255, 189, 42);
    
  }

  .carouselIMG{
    border: 5px solid  rgb(90, 5, 0);
    border-radius: 5px;
  }
  .imgbutt{
  width: 2vw;
}
  .modal-content {
    width: 70dvw;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(255, 255, 255);
    background-color: rgb(100, 20, 20);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    text-align: center;
 }
 .modal-content h3{
    padding: 0%;
    font-weight: 600;
    margin-bottom: 1%;
 }

 .modal-content p {
    font-size: 16px;
    font-weight: 600;
    padding: 0%;
    margin-bottom: 1%;
 }

 .modal-content marquee{
    font-size: 16px;
    font-weight: 700;
    padding: 0%;
    
 }
}

@media screen and (min-width: 1024px) {
  .carouselcon{
    width: 70%;
    border: hidden  rgb(255, 189, 42);
    
  }

  .carouselIMG{
    border: 8px solid  rgb(90, 5, 0);
    border-radius: 7px;
  }
  .imgbutt{
  width: 2vw;
}
  .modal-content {
    width: 70vw;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(255, 255, 255);
    background-color: rgb(100, 20, 20);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    text-align: center;
 }
 .modal-content h3{
    padding: 0%;
    font-weight: 600;
    margin-bottom: 1%;
 }

 .modal-content p {
    font-size: 16px;
    font-weight: 700;
    padding: 0%;
    margin-bottom: 1%;
 }

 .modal-content marquee{
    font-size: 16px;
    font-weight: 700;
    padding: 0%;
    
 }
}

@media screen and (min-width: 1440px) {
  .carouselcon{
    width: 60%;
    border: hidden  rgb(255, 189, 42);
    
  }

  .carouselIMG{
    border: 8px solid  rgb(90, 5, 0);
    border-radius: 10px;
  }
  .imgbutt{
  width: 1vw;
}
  .modal-content {
    width: 70vw;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(255, 255, 255);
    background-color: rgb(100, 20, 20);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    text-align: center;
 }
 .modal-content h3{
    padding: 0%;
    font-weight: 600;
    margin-bottom: 1%;
 }

 .modal-content p {
    font-size: 20px;
    font-weight: 700;
    padding: 0%;
    margin-bottom: 1%;
 }

 .modal-content marquee{
    font-size: 16px;
    font-weight: 700;
    padding: 0%;
    
 }
}


.close {
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
}


.close:hover {
    color: red;
}

.title-name-preview{
    color: #ffa601;
}
.detail-text-preview{
    color: var(--secondary-color)
}
.pic-res-left{
    transition: 1s;
    margin-right: -5rem;

}
.pic-res-right{
    transition: 1s;
    margin-left: -5rem;
}
.grid-preview{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    justify-items:  center;
    transition: 1.6s;
    margin: 2rem -10rem;
}
.grid-preview:hover{
    transform: scale(1.175);
}
.text-preview-left{
    text-align: center;
    margin: auto 0;
    margin-right: -15rem;
}
.text-preview-right{
    text-align: center;
    margin: auto 0;
    margin-left: -15rem;
}

@media screen and (max-width: 1690px) {
    .pic-res-left{
    transition: 1s;
    margin: 0 2rem;
}

.pic-res-right{
    transition: 1s;
    margin: 0 1.5rem;
}
.grid-preview{
    margin: 2rem -3rem;
}
.grid-preview:hover{
    transform: scale(1.125);
}
.text-preview-left{
    text-align: center;
    margin: auto 0;
    margin-right: -10rem;
}
.text-preview-right{
    text-align: center;
    margin: auto 0;
    margin-left: -10rem;
}
}
@media screen and (max-width: 1100px) {
    .grid-preview{
    margin: 2rem auto;
}
  .grid-preview:hover{
    transform: scale(1.1);
    }
    .pic-res-left{
   object-fit: cover;
   width: 80%;
   height: 100%;
    }
    .pic-res-right{
   object-fit: cover;
   width: 80%;
   height: 100%;
    }
    .text-preview-left{
    text-align: center;
    margin: auto 0;
    margin-right: auto;
}
.text-preview-right{
    text-align: center;
    margin: auto 0;
    margin-left: auto;
}
}
@media screen and (max-width: 1300px) {
.column{
    grid-template-columns: repeat(1, 1fr);
  }
  .grid-preview:hover{
    transform: scale(1.1);
    }
    .datail-text-preview{
        font-size: 1.3rem;
    }
}
@media screen and (max-width: 1000px) {
    .pic-res-left{
   object-fit: cover;
   width: 80%;
   height: 100%;
    }
    .pic-res-right{
   object-fit: cover;
   width: 80%;
   height: 100%;
    }
    .title-name-preview{
    font-size: 1.5rem;
    }
    .datail-text-preview{
    font-size: 1rem;
    }
    .grid-preview:hover{
    transform: scale(1.05);
    }
}

@keyframes grid-anime{
    0%{
        transform: scale(1);
        animation: ease-out;
    }
    50%{
        transform: scale(1.15);
        animation: ease-in;
    }
    100%{
        transform: scale(1);
    }
}




</style>