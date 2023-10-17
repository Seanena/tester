import { defineStore } from 'pinia'

export const useProductStore = defineStore({
  id : 'productList',
  state: () => ({
    productsList : [
      { id : 1,
        Name : 'Brian',
        Des : 'Limited Edition', 
        Price : '฿599.00',
        PriceCal : 599.00, 
        img : "../Img/doggg.png.webp",
        quatity : 0 },
      { id : 2,
        Name : 'Meg',
        Des : 'Limited Edition', 
        Price : '฿220.00',
        PriceCal : 220.00, 
        img : '../Img/ggggg.png.webp',
        quatity : 0 },
      { id : 3,
        Name : 'Stewie',
        Des : 'Limited Edition', 
        Price : '฿150.00',
        PriceCal : 150.00, 
        img : '../Img/lalala.png.webp',
        quatity : 0 },
      { id : 4,
        Name : 'Lois',
        Des : 'Limited Edition', 
        Price : '฿120.00', 
        PriceCal : 120.00,
        img : '../Img/ohwow.png.webp',
        quatity : 0 },
      { id : 5,
        Name : 'Peter',
        Des : 'Limited Edition', 
        Price : '฿120.00',
        PriceCal : 120.00, 
        img : '../Img/peter.png.webp',
        quatity : 0 },
      { id : 6,
        Name : 'Plankton',
        Des : 'Limited Edition', 
        Price : '฿90.00', 
        PriceCal : 90.00,
        img : '../Img/hahaha.png.webp',
        quatity : 0 },
        { id : 7,
          Name : 'Mr.Krabs',
          Des : 'Limited Edition', 
          Price : '฿70.00',
          PriceCal : 70.00, 
          img : '../Img/heyboy.png.webp',
          quatity : 0 },
      { id : 8,
        Name : 'SpongeBob',
        Des : 'Limited Edition', 
        Price : '฿70.00', 
        PriceCal : 70.00,
        img : '../Img/kokoko.png.webp',
        quatity : 0 },
      { id : 9,
        Name : 'Squidward',
        Des : 'Limited Edition', 
        Price : '฿80.00', 
        PriceCal : 80.00, 
        img : '../Img/wanna.png.webp',
        quatity : 0 },
      { id : 10,
        Name : 'Patrick Star',
        Des : 'Limited Edition', 
        Price : '฿80.00',
        PriceCal : 80.00, 
        img : '../Img/yoyoyo.png.webp',
        quatity : 0 },
        ],
        CartList : [],
        OrderList : [],
        totalOverallPrice: 0
  }),
  getters: {
    totalOverallPrice() {
      return this.CartList.reduce((total, product) => total + product.totalProductPrice, 0);
    },

  },
  actions: {
    incrementQuantity(product) {
      product.quatity++;
    },
    decrementQuantity(product) {
      if (product.quatity > 0) {
        product.quatity--;
      }
    },
    addToCart(productData) {
      const existingProduct = this.CartList.find((product) => product.id === productData.id);
      productData.quatity++;
      if (existingProduct) {
        if (productData.quatity > 0) {
          existingProduct.quatity += productData.quatity;
          existingProduct.totalProductPrice = existingProduct.quatity * existingProduct.PriceCal;
          alert(`เพิ่ม ${productData.Name} เข้าตะกร้าแล้ว`);

        }
      } else {
        if (productData.quatity > 0) {
          const newProduct = { ...productData };
          newProduct.totalProductPrice = newProduct.quatity * newProduct.PriceCal;
          this.CartList.push(newProduct);
          alert(`เพิ่ม ${productData.Name} เข้าตะกร้าแล้ว`);

        }
      }

      const productIndex = this.productsList.findIndex((product) => product.id === productData.id);
      if (productIndex !== -1) {
        this.productsList[productIndex].quatity = 0;
      }
  
      
      this.updateTotalOverallPrice();
      
    },

    updateTotalOverallPrice() {
      this.totalOverallPrice = this.CartList.reduce((total, product) => total + product.totalProductPrice, 0);
    },
    removeFromCart(productId) {
      const productIndex = this.CartList.findIndex((product) => product.id === productId);
      if (productIndex !== -1) {
        this.CartList.splice(productIndex, 1); 
        this.updateTotalOverallPrice();
      }
    },
    addOrder(orderData) {
      this.OrderList.push(orderData);
      this.CartList = [];
      this.totalOverallPrice = 0;
    },
  },  
      
})