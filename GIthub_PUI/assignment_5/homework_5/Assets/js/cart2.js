function renderCart() {
	let cartCount = document.getElementById("cart-count");
	cartCount.innerText = getCart().length;

  	let cartSummary = document.getElementById("cart-summary");
  	cartSummary.innerText = "Total Price: $" + getCart().reduce((accumulator, current) => accumulator + current.quantity * current.price, 0) + ".00";

	let cartElement = document.getElementById("shopping-cart")
	//remove all children of the cart element
	while (cartElement.firstChild) {
		cartElement.removeChild(cartElement.firstChild);
	}

	//add children to the cart element from the cart array
	getCart().forEach(function (cartItem, index) {
		let bunElement = createBunElement(cartItem.bun, cartItem.frosting, cartItem.quantity, cartItem.price, index)
		cartElement.appendChild(bunElement)
	})
}

function createBunElement(bun, frosting, quantity, price, index) {
	let bunElement = document.createElement("div");
	bunElement.className = "item"

	let titleElement = document.createElement("span");
	titleElement.className = "cart-bun-title"
	let bunImg = document.createElement("img");
	bunImg.className = "image"

	let imgName = "sss";
	let bunTitle;
	if (bun == "caramel") {
		imgName = "b5"
		bunTitle = "Caramel"
	} else if (bun == "smore's") {
		imgName = "b1"
		bunTitle = "Smore's"
	} else if (bun == "cookie") {
		imgName = "b2"
		bunTitle = "Cookie Dough"
	} else if (bun == "rasberry") {
		imgName = "b4"
		bunTitle = "Rasberry Lemon"
	} else if (bun == "peacan") {
		imgName = "b3"
		bunTitle = "Caramelized Peacan"
	} else if (bun == "oreo") {
		imgName = "b6"
		bunTitle = "Oreo"
	}

	bunImg.src = "Assets/images/" + imgName + ".jpg";

	titleElement.innerText = bunTitle;

	let frostingText = "Frosting: ";
	if (frosting == "type1") {
		frostingText += "None"
	} else if (frosting == "type2") {
		frostingText += "Sugar-milk"
	} else if (frosting == "type3") {
		frostingText += "Vanila-milk"
	} else if (frosting == "type4") {
		frostingText += "Double-chocolate"
	}

	let frostingElement = document.createElement("span");
	frostingElement.innerText = frostingText
	frostingElement.className = "cart-frosting-title"

	let quantityElement = document.createElement("span");
	quantityElement.innerText = quantity
	quantityElement.className = "cart-quantity-title"

	let priceElement = document.createElement("span");
	priceElement.innerText = "$" + (quantity * price) + ".00";

	let deleteButton = document.createElement("button");
	deleteButton.innerText = "Remove"
	deleteButton.onclick = function () {
		removeFromCart(index)
		console.log(index)
		console.log(getCart())
		renderCart()
	}

	bunElement.appendChild(titleElement)
	bunElement.appendChild(bunImg)
	bunElement.appendChild(frostingElement)
	bunElement.appendChild(quantityElement)
	bunElement.appendChild(priceElement)
	bunElement.appendChild(deleteButton)

	return bunElement;
}