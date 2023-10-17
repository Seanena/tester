<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
     <header  style="background-color: #272C33; height: 4rem;">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light" style=" width: 100%;">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" style="margin-left: 40px;">
                <span class="fs-4" style="color: white;">JARSKINS</span>
            </a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style="border: solid 2px white;">
                    <img src="" alt="Menu" style="width: 24px; height: 24px;">
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink to="/market" class="tag">ร้านค้า</RouterLink>   
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/cart" class="tag">
                                ตะกร้า
                            </RouterLink> 
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/historyorder" class="tag">
                                ประวัติคำสั่งซื้อ
                            </RouterLink>   
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/login" class="tag">
                                เข้าสู่ระบบ
                            </RouterLink>   
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>

    
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import './Login.vue'
import { getAuth, onAuthStateChanged,  signOut } from "firebase/auth";


export default {
  data() {
    return {
      showMenu: false,
      isauth:true
    };
  },
  methods: {
    toggleMobileMenu() {
      this.showMenu = !this.showMenu;
    },
    async logout(event) {
      event.preventDefault();
      const auth = getAuth();
      await signOut(auth); // ล็อคเอ้าท์ผู้ใช้
      this.isLoggedIn = false; // อัปเดต isLoggedIn เป็น false
      this.$router.push("/").catch(() => {}); // ไปยังหน้าหลักหลังจากล็อคเอ้าท์
    }
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) =>{
      if (user) {
        this.isauth = true
      }else{
        this.isauth = false
      }
    });
  },
  
};

</script>

<style scoped>

header{
  padding-top: .5%;
}
#icon-theme{
  margin: auto 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: 1s;

}
#icon-theme:hover{
  animation-name: rotate;
  -webkit-animation: rotate 3s normal linear infinite;
  animation: rotate 3s normal linear infinite;
  scale: 1.5;
}

:root{
   --primary-color: #f4fdff;
  --secondary-color: #212121; 
}

.tag{
  font-size: 20px;
  margin-right: 20px;
  text-decoration: none;
  color: white;
}
.tag:hover{
  color: green;
}
.dark-theme{
 --primary-color: #161616;
 --secondary-color: #ffffff;
}

@keyframes rotate {
  0% {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
  25% {
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
  }
  50% {
    -webkit-transform: rotate3d(0, 0, 1, 180deg);
    transform: rotate3d(0, 0, 1, 180deg);
  }
  75% {
    -webkit-transform: rotate3d(0, 0, 1, 270deg);
    transform: rotate3d(0, 0, 1, 270deg);
  }
  100% {
    -webkit-transform: rotate3d(0, 0, 1, 360deg);
    transform: rotate3d(0, 0, 1, 360deg);
  }
}
/* navbar */

.navbar-ct{
  margin: 6.5rem auto;
}
.fixed-header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #212121;
  z-index: 1000;
}
/*  */
.form-control-dark {
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  border-color: #000000;
  box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);
}
.text-small {
  font-size: 85%;
}

.dropdown-toggle:not(:focus) {
  outline: 0;
}
@media screen and (max-width: 1560px) {
  .navbar-ct{
  margin: 6.98rem auto;
}
}

@media screen and (max-width: 560px) {
  .fs-4{
    margin-right: 200px;
  }
  .navbar-ct{
  margin: 12.2rem auto;
}
}
@media screen and (max-width: 445px) {
  .fs-4{
    margin-right: 100px;
  }
  .navbar-ct{
  margin: 10.3rem auto;
}
.c-button--gooey{
  margin-top: -20px;
}
#icon-theme{
  margin: auto 20px;
  margin-top: -20px ;
}
}

</style>
