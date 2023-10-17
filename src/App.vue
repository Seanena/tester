<script setup>
import { RouterLink } from 'vue-router';
import HeaderPart from './components/HeaderPart.vue'
</script>

<template>
  <HeaderPart/>
 

  <div class="mainbd">
    <RouterView />
  </div>
  
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-2 my-4 border-top mb-0" style="background-color: rgb(56, 56, 56); color: white; ">
    <div class="col-md-4 d-flex align-items-center"> 
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
      <!-- logo brand footer
      
      
      -->
      </a>
      <span class="mb-3 mb-md-0">Jarskins &copy; 2023 copyright</span>
    </div>
    <div>
        <a href="https://ayo.so/ca7"><button class="c-button c-button--gooey" style="margin-right: 10px;" > Cantact
          <div class="c-button__blobs">
          <div></div>
          <div></div>
          <div></div>
          </div>
        </button></a>
    </div>
    
  </footer>



</template>

<style>

footer{
  padding: 50px;
}
.ft{
  margin: auto 30px;
  margin-bottom: -3rem;
}
/* bt-footer */
.bt-footer-top-page {
  align-items: center;
  appearance: none;
  background-color: #ffffff;
  border-radius: 10px;
  border-width: 2px;
  border-color: #ffa601;
  box-shadow: rgba(255, 123, 0, 0.2) 0 2px 4px, rgba(255, 174, 0, 0.15) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;
  height: 40px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
}

.bt-footer-top-page:focus {
  outline: none;
  box-shadow: #ffa601 0 0 0 1.5px inset, rgba(83, 109, 254, 0.4) 0 2px 4px, rgba(83, 109, 254, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

.bt-footer-top-page:hover {
  box-shadow: #fff12f 0 4px 8px, #ffd166 0 7px 13px -3px, #ffffff 0 -3px 0 inset;
  transform: translateY(-2px);
}

.bt-footer-top-page:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}

.c-button {
  background-color: #212121;
  margin: 10px;
  color: #f8a9ff;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  padding: 0.5em 1em;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  z-index: 1;
}

.c-button--gooey {
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 4px solid #F5BCC6;
  border-radius: 50px;
  position: relative;
  transition: all 500ms ease;
}

.c-button--gooey .c-button__blobs {
  height: 100%;
  filter: url(#goo);
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: -3px;
  right: -1px;
  z-index: -1;
  border-radius: 50px; /* ปรับ border-radius เป็นค่าที่เหมาะสมกับวงรีที่ต้องการ */
}

.c-button--gooey .c-button__blobs div {
  background-color: hsl(353, 21%, 100%);
  width: 100%;
  height: 100%;
  border-radius: 50px; /* ปรับ border-radius เป็นค่าที่เหมาะสมกับวงรีที่ต้องการ */
  position: absolute;
  transform: scale(1.4) translateY(125%) translateZ(0);
  transition: all 600ms ease;
}


.c-button--gooey .c-button__blobs div:nth-child(1) {
  left: -5%;
}

.c-button--gooey .c-button__blobs div:nth-child(2) {
  left: 30%;
  transition-delay: 60ms;
}

.c-button--gooey .c-button__blobs div:nth-child(3) {
  left: 66%;
  transition-delay: 25ms;
}

.c-button--gooey:hover {
  color: #212121;
}

.c-button--gooey:hover .c-button__blobs div {
  transform: scale(1.4) translateY(0) translateZ(0);
}
</style>
