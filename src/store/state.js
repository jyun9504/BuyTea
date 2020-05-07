const state = {
  orders: localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) :
  [
    { 
      id: 1,
      name: "青茶",
      description: "無糖少冰",
      price: 20,
      quantity: 1
    }
  ]
}

export default state;
