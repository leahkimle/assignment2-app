let cartCount = document.getElementById("cart-count");
let addToCartButton = document.getElementById("addToCartButton");
let frostingSelect = document.getElementById("frosting-select");
let quantityInput = document.getElementById("quantity-input");

let imgElement = document.getElementById("faq");

function onFrostingSelect() {
	let frosting = frostingSelect.value;
	if (frosting == "type2") {
		imgElement.src = "Assets/images/frosting0.jpeg";
	} else if (frosting == "type3") {

		imgElement.src = "Assets/images/frosting1.jpg";
	} else if (frosting == "type4") {

		imgElement.src = "Assets/images/frosting2.jpg";
	} else {
		imgElement.src = defaultImg;
	}
}

onFrostingSelect();

cartCount.innerText = getCart().length
function addToCartClick() {
	let frosting = frostingSelect.value;
	let quantity = quantityInput.value;
	addToCart(bunType, frosting, quantity, 3);
	cartCount.innerText = getCart().length;
}
addToCartButton.onclick = addToCartClick;
frostingSelect.onchange = onFrostingSelect;

if (bunType == "caramel") {
	let goLeftElem = document.getElementById("bun-img-go-left");
	let goRightElem = document.getElementById("bun-img-go-right");
	let listOfImages = [defaultImg, "Assets/images/cbun1.jpg", "Assets/images/cbun2.jpg", "Assets/images/cbun3.jpg"];
	let currentIndex = 0;
	
	function goLeft() {
		if (currentIndex != -1) {
			currentIndex = (currentIndex - 1 + listOfImages.length) % listOfImages.length
			imgElement.src = listOfImages[currentIndex];
		}
	}
	function goRight() {
		if (currentIndex != -1) {
			currentIndex = (currentIndex +1) % listOfImages.length
			imgElement.src = listOfImages[currentIndex];
		}
	}
	
	goLeftElem.onclick = goLeft;
	goRightElem.onclick = goRight;
}