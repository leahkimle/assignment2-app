const CART_KEY = "bunbunbakeshop-cart"

function addToCart(bun, frosting, quantity, price) {
	let cart = getCart()
	cart.push({
		bun: bun,
		frosting: frosting,
		quantity: quantity,
		price: price
	})
	saveCart(cart)
}

function getCart() {
	let cart = localStorage.getItem(CART_KEY)
	if (cart) {
		cart = JSON.parse(cart)
	} else {
		cart = []
	}
	return cart
}

function removeFromCart(index) {
	let cart = getCart()
	cart.splice(index, 1)
	saveCart(cart)
}

function saveCart(cart) {
	localStorage.setItem(CART_KEY, JSON.stringify(cart))
}