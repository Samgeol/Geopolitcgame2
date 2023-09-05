// Função para abrir o popup de dinheiro
function openMoneyPopup() {
  setInitialMoneyAmount();
  updateMoneyAmount();

  var moneyPopup = document.getElementById("moneyPopup");
  moneyPopup.style.display = "block";
}

// Função para abrir o popup do martelo
function openHammerPopup() {
  var hammerPopup = document.getElementById("hammerPopup");
  hammerPopup.style.display = "block";
}

// Função para fechar o popup do martelo
function closeHammerPopup() {
  var hammerPopup = document.getElementById("hammerPopup");
  hammerPopup.style.display = "none";
}

// Função para fechar o popup de dinheiro
function closeMoneyPopup() {
  var moneyPopup = document.getElementById("moneyPopup");
  moneyPopup.style.display = "none";
}

// Inicializa o valor do dinheiro com base na seleção do país
var moneyAmount = 0;
function setInitialMoneyAmount() {
  var selectedOption = document.getElementById("country").value;
  moneyAmount = (selectedOption === "brasil") ? 1000000000000 : 0;
  updateMoneyAmount();
  toggleCountryName(selectedOption);
}

// Atualiza o elemento de exibição do dinheiro
function updateMoneyAmount() {
  var moneyDisplay = document.getElementById("moneyAmount");
  moneyDisplay.textContent = moneyAmount;
}

// Evento que chama setInitialMoneyAmount quando a seleção do país muda
document.getElementById("country").addEventListener("change", setInitialMoneyAmount);

// Função para alternar a exibição do ícone e do seletor de país
function toggleIconAndShowCountrySelector() {
  toggleIcon();
  MostrarSelecionarPais();
}

// Função para alternar a exibição do ícone com base na seleção do país
function toggleIcon() {
  var selectedOption = document.getElementById("country").value;
  var hiddenIcon = document.getElementById("hiddenIcon");
  var moneyIcon = document.getElementById("moneyIcon");
  var countrynameandflag = document.getElementById("country-nameandflag");
  
  hiddenIcon.style.display = "none";
  moneyIcon.style.display = "none";

  if (selectedOption === "brasil") {
      countrynameandflag.style.display = "inline";
      hiddenIcon.style.display = "inline";
      moneyIcon.style.display = "inline";
  } else {
      countrynameandflag.style.display = "none";
  }

  var playButton = document.querySelector(".play-button");
  playButton.style.display = "none";
}

// Função para mostrar o seletor de país
function MostrarSelecionarPais() {
  var countrySelector = document.getElementById("countrySelector");
  countrySelector.style.display = "inline";
}

// Função para ocultar o seletor de país
function hideCountrySelector() {
  var countrySelector = document.getElementById("countrySelector");
  countrySelector.style.display = "none";
}

// Função para ocultar ou mostrar o nome do país com base na seleção
function toggleCountryName(selectedOption) {
  var countryName = document.querySelector(".Brasil"); // Seletor da classe do nome do país

  if (selectedOption === "brasil") {
    countryName.style.display = "block"; // Mostra o nome do Brasil
  } else {
    countryName.style.display = "none"; // Oculta o nome do Brasil
  }
}

function ConstruirIndustrias(moneyAmount){
  var numindustrias = document.getElementById("indamount");
  numindustrias ++
  moneyAmount -=1
}