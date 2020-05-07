const state = {
  orders: localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) :
  [
    { 
      id: 1,
      name: "高山茶",
      description: "無糖少冰，不是最高山的不喝，Id duis sint in sint veniam occaecat eiusmod esse sit magna officia mollit ea. Ullamco veniam quis amet deserunt id culpa tempor. Occaecat quis occaecat nostrud culpa eu Lorem mollit et in et minim. Sint officia id ea aute do amet aute eiusmod eu dolor ipsum. Sint veniam Lorem excepteur velit quis ad esse sint esse esse. Aliquip ex incididunt qui sunt. Excepteur non aliquip sint dolor id velit adipisicing laboris.",
      price: 20,
      quantity: 1
    }
  ]
}

export default state;
