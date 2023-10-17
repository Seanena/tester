<script setup>
import { RouterLink } from 'vue-router';
import  { useProductStore } from '@/stores/products'
const storeProduct = useProductStore()

const addToCart = (productData) => {
  storeProduct.addToCart({
    id: productData.id,
    Name: productData.Name,
    Price: productData.Price,
    PriceCal: productData.PriceCal,
    img: productData.img,
    quatity: productData.quatity,
  });
};

</script>

<template>
    
    <div class="custom-div" style="background-color: rgb(22, 20, 20);">

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 mt-3" style="width: 95%; margin: auto;">
      <div class="col mb-4" v-for="(productData, index) in storeProduct.productsList" :key="index">
        <div class="card cardframe" style="border-radius: 0%; border: hidden; background-color: rgb(34, 31, 31);">
          <img :src="productData.img" class="card-img-top" alt="productImg" style="border-radius: 0%;">
          <div class="card-body">
            <h6 class="card-title mt-3" style=" color: rgb(255, 255, 255);">{{ productData.Name }}</h6>
            <div class="pricetag">
                <p style="  color: rgb(255, 255, 255);">{{ productData.Price }}</p>
              </div>
          
            
            <div class="panelbuttcon">
              <button type="button" class="btn btn-success addtocartbutt" style="margin: auto; margin-bottom: 1%; width: 100%;"  @click="addToCart(productData)">เพิ่ม</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  
    
</template>

<style>
  
.custom-div {
  padding: 20px;
  width: 98%;
  height: 100%;
  border-radius: 10px;
  background: #d9d9d9;
  margin: 0 auto;
  margin-top: 10px;
}
.custom-div h1{
    text-align: center;
    margin: 0 auto;
    font-size: 190px;
    color: red;
}</style>