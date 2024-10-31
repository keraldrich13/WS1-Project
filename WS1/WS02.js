const cartBtn = document.getElementById('cart_btn');
const cartModal = document.getElementById('cart_modal');
const closeCart = document.getElementById('close_cart');

cartBtn.onclick = () => cartModal.style.display = 'block';
closeCart.onclick = () => cartModal.style.display = 'none';

window.onclick = (event) => {
     if (event.target === cartModal) {
         cartModal.style.display = 'none';
            }
        };
