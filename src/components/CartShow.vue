<script setup>
import { ref } from 'vue';
import  { useProductStore } from '@/stores/products'
import { computed, watchEffect } from 'vue'
import { RouterLink } from 'vue-router';

const name = ref('');
const address = ref('');
const phoneNumber = ref('');
const note = ref('')
const paymentMethod = ref('');

const storeProduct = useProductStore()


function formatNumberWithCommas(number) {
    const formattedNumber = Number(number).toFixed(2);
    return formattedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");   
}

const totalOverallPrice = computed(() => {
  return storeProduct.CartList.reduce((total, product) => total + product.totalProductPrice, 0)
})

watchEffect(() => {
  for (const product of storeProduct.CartList) {
    product.totalProductPrice = product.quatity * product.PriceCal
  }
})

const removeFromCart = (productId) => {
  storeProduct.removeFromCart(productId);
};


const placeOrder = () => {
    const hasInvalidQuantity = storeProduct.CartList.some(product => product.quatity <= 0);

    if (hasInvalidQuantity) {
        alert("จำนวนสินค้าต้องมากกว่า 0");
    } else {
        const orderData = {
            orderNumber: storeProduct.OrderList.length + 1,
            CartList: storeProduct.CartList,
            Total: storeProduct.totalOverallPrice,
            name: name.value,
            address: address.value,
            phoneNumber: phoneNumber.value,
            note: note.value,
            payment: paymentMethod.value,
        };
        alert("สั่งซื้อสำเร็จ!");
        storeProduct.addOrder(orderData);

    }
}


</script>

<template>
    


    <div v-if="storeProduct.CartList.length === 0" class="incompletecart mb-3">
      <div class="container-xl mt-3" style="background-color: #333; height: 40px; border-radius: 5px;">
        <table style="background-color: #333; text-align: center vertical-align:middle;">
          <thead class="top">
            <a href="" style="color: red; margin-right: 20%;">cart</a>
            <RouterLink to="/historyorder" >
              <a href="">history</a>
            </RouterLink>
          </thead>
        </table>
      </div>
      <div class="outcon" style="width: 100%; margin: 0 auto;">
            <div class="container-xl mt-2" style="background-color: #333; border-radius: 10px; height: 300px;">
                <div class="bd-example table-container ">
                <table class="table"  style="text-align: center; vertical-align: middle;">
                    <thead class="thead-dark">
                    <tr>
                    <th scope="col" style="width:40%; background-color: #333; color: #d9d9d9;">ข้อมูลสินค้า</th>
                    <th scope="col" style="width:10%; background-color: #333; color:#d9d9d9;">ราคา</th>
                    <th scope="col" style="width:10%; background-color: #333;color:#d9d9d9;">วิธีชำระเงิน</th>
                    <th scope="col" style="width:20%; background-color: #333;color:#d9d9d9;">สถานะ</th>
                    </tr>
                </thead>
                <br>
                <tbody style="color: #333;">
                    <tr v-for="(productData, index) in storeProduct.CartList" :key="index">
                    <td>
                        <div class="product-grid">
                        <div class="product-image">
                        <img :src="productData.img" alt="" style="width: 70%;">
                        </div>
                        <div class="product-name">
                        <span>{{ productData.Name }}</span>
                        </div>
                        </div>
                    </td>
                    <td>{{ productData.Price }}</td>
                    <td>Promtpay</td>
                    <td>
                        <button class="btn btn-danger" @click="removeFromCart(productData.id)" style="width: 60%; background-color: red; color: white;">
                            DELETE
                        </button>
                    </td>
                    </tr>
                    
                </tbody>

                </table>
                </div>
            </div>
        </div> 
        <div class="space" style="height: 300px;"></div>

    </div>


    <div v-else class="completecart" style="width: 100%;">
      <div class="container-xl mt-3" style="background-color: #333; height: 40px; border-radius: 5px; width: 90%;">
        <table style="background-color: #333; text-align: center vertical-align:middle;">
          <thead class="top">
            <a href="" style="color: red; margin-right: 20%;">cart</a>
            <RouterLink to="/historyorder">
              <a href="">history</a>
            </RouterLink>
          </thead>
        </table>
      </div>
        <div class="outcon" style="width: 90%; margin: 0 auto;">
            <div class="container-xl mt-2" style="background-color: #333; border-radius: 10px;">
                <div class="bd-example table-container ">
                <table class="table"  style="text-align: center; vertical-align: middle;">
                    <thead class="thead-dark">
                    <tr>
                    <th scope="col" style="width:40%; background-color: #333; color: #d9d9d9;">ข้อมูลสินค้า</th>
                    <th scope="col" style="width:10%; background-color: #333; color:#d9d9d9;">ราคา</th>
                    <th scope="col" style="width:10%; background-color: #333;color:#d9d9d9;">วิธีชำระเงิน</th>
                    <th scope="col" style="width:20%; background-color: #333;color:#d9d9d9;">สถานะ</th>
                    </tr>
                </thead>
                <br>
                <tbody style="color: #333;">
                    <tr v-for="(productData, index) in storeProduct.CartList" :key="index">
                    <td>
                        <div class="product-grid">
                        <div class="product-image">
                        <img :src="productData.img" alt="" style="width: 70%;">
                        </div>
                        <div class="product-name">
                        <span>{{ productData.Name }}</span>
                        </div>
                        </div>
                    </td>
                    <td>{{ productData.Price }}</td>
                    <td>Promtpay</td>
                    <td>
                        <button class="btn btn-danger" @click="removeFromCart(productData.id)" style="width: 60%; background-color: red; color: white;">
                            DELETE
                        </button>
                    </td>
                    </tr>
                    
                </tbody>

                </table>
                <div class="detailbill" style="color: white;">
                    <p>รวม : {{ formatNumberWithCommas(totalOverallPrice) }} บาท</p>
                    <hr>
                    <form action="" @submit.prevent="placeOrder">

                        <div class="panelbuttcon">
                                <input type="submit" class="btn btn-success" style="margin: auto; margin-bottom: 1%;" value="ยืนยันการสั่งซื้อ" >
                        </div>
                    </form>
                    
                </div>
                </div>
            </div>
        </div>
        <div class="space" style="height: 300px;"></div>
    </div>

    

</template>


<style scoped>

a{
  font-size: 25px;
  text-decoration: none;
  margin-right: 2%;
  color: #d9d9d9;
}


@media screen and (max-width: 700px) {
    .outcon{
    display: flex;
    
}
.outconbill{
    display: flex;
    margin-bottom: 2%;
}

.maincontainer{
    border-radius: 10px;
    padding:1%;
    width: 90%;
    margin: auto;
    background-color: #d9d9d9;
}

.mainbillcontainer{
    border-radius: 10px;
    padding:1%;
    width: 90%;
    margin-left: 5%;
    background-color: #d9d9d9;
}

.carthead{
    text-align: center;
    margin-bottom: 2%;
    color: rgb(95, 20, 17);
}

.billhead{
    color: #333;
    text-align: center;
}

.detailbill{
    color: #333;
    text-align:left;
    font-size: larger;
}

.table td {
    padding: 0.2rem;
}

.product-grid { 
  display: grid;
  grid-template-columns: 0% 100%;
  grid-column-gap: 2%; 
  align-items: center; 
}

.product-image{
    display: none;
}

.imgbutt{
  width: 1vw;
}

.buttcon{
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
}

.no-spinners::-webkit-inner-spin-button,
.no-spinners::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}
.table{
  color: white;
}
.quatitybuttbgminus{
    display: none;
    width: 2.3rem;
}

.quatitybuttbgplus{
    display: none;
    width: 2.3rem;
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

.table-container {
  overflow-x: auto;
  max-width: 100%; 
  margin: 0 auto; 
}

.custom-table {
  background-color: #d9d9d9; 
  border-collapse: collapse; 
  
}


.custom-table th {
  background-color:rgb(95, 20, 17) ; 
  color: rgb(255, 255, 255); 
}


.custom-table td {
  background-color: #d9d9d9; 
  color: rgb(95, 20, 17); 
  border: 1px solid rgb(230, 221, 221);
   
}


.binbutt{
  border-radius: 10px;
  padding: 2%;
  border: hidden;   
  background-color: transparent;
}

.binbutt:hover{
  border: hidden;   
  background-color: rgb(248, 79, 49);
}

.panelbuttcon{
    display: flex;
}

}

@media screen and (min-width: 768px) {
    .outcon{
    display: flex;
    
}
.outconbill{
    display: flex;
    margin-bottom: 2%;
}

.maincontainer{
    border-radius: 10px;
    padding:1%;
    width: 90%;
    margin: auto;
    background-color: white;
}

.mainbillcontainer{
    border-radius: 10px;
    padding:1%;
    width: 60%;
    margin-left: 35%;
    background-color: white;
}

.carthead{
    text-align: center;
    margin-bottom: 2%;
    color: rgb(95, 20, 17);
}

.billhead{
    color: rgb(95, 20, 17);
    text-align: center;
}

.detailbill{
    color: rgb(95, 20, 17);
    text-align:left;
    font-size: larger;
}

.table td {
    padding: 0.2rem;
}

.product-grid { 
  display: grid;
  grid-template-columns: 30% 70%;
  grid-column-gap: 2%; 
  align-items: center; 
}

.imgbutt{
  width: 1vw;
}

.buttcon{
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
}

.no-spinners::-webkit-inner-spin-button,
.no-spinners::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}

.quatitybuttbgminus{
    width: 2.3rem;
}

.quatitybuttbgplus{
    width: 2.3rem;
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


.custom-table {
  background-color: rgb(240, 240, 240); 
  border-collapse: collapse; 
  
}


.custom-table th {
  background-color:rgb(95, 20, 17) ; 
  color: rgb(255, 255, 255); 
}


.custom-table td {
  background-color: rgb(236, 236, 236); 
  color: rgb(95, 20, 17); 
  border: 1px solid rgb(230, 221, 221);
   
}


.binbutt{
  border-radius: 10px;
  padding: 2%;
  border: hidden;   
  background-color: transparent;
  background-color: rgb(255, 255, 255);
  color: rgb(95, 20, 17);
}

.binbutt:hover{
  border: hidden;   
  background-color: rgb(248, 79, 49);
}

.panelbuttcon{
    display: flex;
}

}

@media screen and (min-width: 1024px) {
    .outcon{
    display: flex;
    
}
.outconbill{
    display: flex;
    margin-bottom: 2%;
}

.maincontainer{
    border-radius: 10px;
    padding:1%;
    width: 90%;
    margin: auto;
    background-color: white;
}

.mainbillcontainer{
    border-radius: 10px;
    padding:1%;
    width: 50%;
    margin-left: 45%;
    background-color: white;
}

.carthead{
    text-align: center;
    margin-bottom: 2%;
    color: rgb(95, 20, 17);
}

.billhead{
    color: rgb(95, 20, 17);
    text-align: center;
}

.detailbill{
    color: rgb(95, 20, 17);
    text-align:left;
    font-size: larger;
}

.table td {
    padding: 0.2rem;
}

.product-grid {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-column-gap: 2%; 
  align-items: center; 
}

.imgbutt{
  width: 1vw;
}

.buttcon{
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  
}

.no-spinners::-webkit-inner-spin-button,
.no-spinners::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}

.quatitybuttbgminus{
    width: 3rem;
}

.quatitybuttbgplus{
    width: 3rem;
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


.custom-table {
  background-color: rgb(240, 240, 240); 
  border-collapse: collapse; 
  
}


.custom-table th {
  background-color: rgb(95, 20, 17); 
  color: rgb(255, 255, 255); 
}


.custom-table td {
  background-color: rgb(236, 236, 236); 
  color: #333; 
  border: 1px solid rgb(230, 221, 221);
   
}


.binbutt{
  border-radius: 10px;
  padding: 2%;
  border: hidden;   
  background-color: transparent;
  background-color: rgb(255, 255, 255);
}

.binbutt:hover{
  border: hidden;   
  background-color: rgb(248, 79, 49);
}

.panelbuttcon{
    display: flex;
}

}

@media screen and (min-width: 1300px) {
    .outcon{
    display: flex;
    
}
.outconbill{
    display: flex;
    margin-bottom: 2%;
}

.maincontainer{
    border-radius: 10px;
    padding:1%;
    width: 90%;
    margin: auto;
    background-color: white;
}

.mainbillcontainer{
    border-radius: 10px;
    padding:1%;
    width: 30%;
    margin-left: 65%;
    background-color: white;
}

.carthead{
    text-align: center;
    margin-bottom: 2%;
    color: rgb(95, 20, 17);
}

.billhead{
    color: rgb(95, 20, 17);
    text-align: center;
}

.detailbill{
    color: rgb(95, 20, 17);
    text-align:left;
    font-size: larger;
}

.table td {
    padding: 0.2rem;
}

.product-grid {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-column-gap: 2%; 
  align-items: center; 
}

.imgbutt{
  width: 1vw;
}

.buttcon{
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  
}

.no-spinners::-webkit-inner-spin-button,
.no-spinners::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
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


.custom-table {
  background-color: rgb(240, 240, 240); 
  border-collapse: collapse; 
  
}


.custom-table th {
  background-color: rgb(95, 20, 17); 
  color: rgb(255, 255, 255); 
}


.custom-table td {
  background-color: rgb(236, 236, 236); 
  color: rgb(95, 20, 17); 
  border: 1px solid rgb(230, 221, 221);
   
}


.binbutt{
  border-radius: 10px;
  padding: 2%;
  border: hidden;   
  background-color: transparent;
  background-color: rgb(255, 255, 255);
}

.binbutt:hover{
  border: hidden;   
  background-color: rgb(248, 79, 49);
}

.panelbuttcon{
    display: flex;
}

}
</style>