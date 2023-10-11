import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const itemsCount = cartList.length
      let totalAmount = 0
      cartList.forEach(eachItem => {
        totalAmount += eachItem.price * eachItem.quantity
      })
      return (
        <div className="cart-item-summary-container">
          <div className="summery-card">
            <h1 className="summary">
              Order Total: <span className="amount">RS {totalAmount}/-</span>
            </h1>
            <p className="total-items">{itemsCount} items in cart</p>
            <div className="button-container">
              <button type="button" className="button">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
