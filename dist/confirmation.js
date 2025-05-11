document.addEventListener("DOMContentLoaded", () => {
  const order = JSON.parse(localStorage.getItem("lastOrder") || "[]");
  const list = document.getElementById("order-items");
  const totalDisplay = document.getElementById("order-total");

  let sum = 0;

  order.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} – ${item.quantity} szt. – ${item.subtotal.toFixed(2)} zł`;
    list.appendChild(li);
    sum += item.subtotal;
  });

  totalDisplay.textContent = `${sum.toFixed(2)} zł`;

  if (!order.length) {
  document.querySelector("h1").textContent = "Brak zamówienia do wyświetlenia.";
  document.querySelector(".order-summary").style.display = "none";
  return;
}
  localStorage.removeItem("lastOrder");
});
