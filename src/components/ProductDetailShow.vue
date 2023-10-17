<script setup>
import { useRoute } from 'vue-router';
import { useProductStore } from '@/stores/products';
import { computed } from 'vue'; 
import { RouterLink } from 'vue-router';



const route = useRoute();
const storeProduct = useProductStore();

const productId = Number(route.params.id);

const product = computed(() => {
  return storeProduct.productsList.find(product => product.id === productId);
  
});

const addToCart = () => {
  storeProduct.addToCart({
    id: product.value.id,
    Name: product.value.Name,
    Price: product.value.Price,
    PriceCal: product.value.PriceCal,
    img: product.value.img,
    quatity: product.value.quatity, 
  });
};
</script>

<template> 
      <div class="row row-cols-1 mt-3" style="width: 90%; margin: auto;">
        <div class="col mb-4">
          <div class="card" style=" border: hidden;">
            <img :src="`/${product.img}`" class="card-img-top" alt="">
            <div class="card-body">
              <h6 class="card-title mt-3">{{ product.Name }}</h6>
              <h6 class="card-title mt-2">{{ product.Price }}</h6>
              <p class="card-text" style="font-size: 1.7ch;">{{ product.Des }}</p>
              <div class="panelbuttcon">
                <div class="buttcon" >
                  <div class="input-group mb-2">
                    <span class="input-group-text quatitybuttbgminus"><button class="quatitybutt" @click="storeProduct.decrementQuantity(product)"><img class="imgbutt" src="" alt=""></button></span>
                    <input class="form-control no-spinners" type="number" v-model="product.quatity" style="text-align: center; font-size: smaller; font-weight: bold;" min="0">
                    <span class="input-group-text quatitybuttbgplus"><button class="quatitybutt" @click="storeProduct.incrementQuantity(product)"><img class="imgbutt" src="" alt=""></button></span>
                  </div>  
                </div>
              </div>
              <div class="panelbuttcon">
                <button type="button" @click="addToCart(productData)" class="btn btn-success addtocartbutt" style="margin: auto; margin-bottom: 1%; width: 50%;">เพิ่มลงในตะกร้า</button>
              </div>
              <RouterLink to="/" style="text-decoration: none;">
                <div class="panelbuttcon">
                  <button type="button" class="btn btn-secondary homepagebutt" style="margin: auto; margin-bottom: 1%; width: 100%;">หน้าหลัก</button>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>



      
  </template>

  <style scoped>
  body{
    margin: 0%;
    padding: 0%;
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
  </style>
  