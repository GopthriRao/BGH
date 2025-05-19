document.getElementById('carForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Simulated prediction (just for frontend purposes)
    const outputBox = document.getElementById('outputBox');
    outputBox.innerText = "💰 Estimated Price: ₹ 5,45,000"; // You can change to dynamic or backend logic later
  });
  
     