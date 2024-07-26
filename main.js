const bodyElement = document.body;

const showBrokenScreen = () => {
  bodyElement.removeAttribute("id");
  const errorScreenElement = document.getElementById("error-screen");
  errorScreenElement.style.display = "flex";
};

const showPageGlitch = () => {
  bodyElement.setAttribute("id", "glitchingPage");
};

const displayTransfer = () => {
  const fakeTransferElement = document.getElementById("fake-transfer-item");
  fakeTransferElement.style.display = "flex";
  const lastTransferItem = document.getElementById("last-transfer-item");
  lastTransferItem.style.display = "none";
};

function animateNumbers(HTMLelement, start) {
  const duration = 3000;
  const end = 0;
  // const start = HTMLelement.textContent;
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const newAmountContent = Math.floor(progress * (end - start) + start)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    HTMLelement.textContent = `${newAmountContent} USD`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const initiateFakeMoneyTransfer = () => {
  // Hide notification
  const notificationElement = document.getElementById("notification");
  notificationElement.style.display = "none";
  // Get money elements
  const balanceAmountElement = document.getElementById("balance-amount");
  const incomeAmount = document.getElementById("income-amount");
  const expenseAmount = document.getElementById("expense-amount");
  const cardAmount = document.getElementById("card-amount");

  // Showing a transfer in payments section to an account
  displayTransfer();

  // Decreasing numbers
  animateNumbers(balanceAmountElement, 45523);
  animateNumbers(incomeAmount, 300);
  animateNumbers(expenseAmount, 17999);
  animateNumbers(cardAmount, 6192);

  setTimeout(() => {
    showPageGlitch();
  }, 500);

  setTimeout(() => {
    showBrokenScreen();
  }, 4000);
};

const fakeLinkElement = document.getElementById("fake-link");
fakeLinkElement.addEventListener("click", initiateFakeMoneyTransfer);
