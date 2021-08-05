import { CartItemType } from '../App';
import Button from '@material-ui/core/Button';

const s = require('./cart.css');

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <aside>
      <h2>My Cart</h2>
      <hr />
      
      {cartItems.map(item => (
        <div className="divCartItem">
          <div>
            <h4>{item.title}</h4>
            <div className='information'>
              <p className="price1">Price: ${item.price}</p>
              <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className='buttons'>
              <Button
                disableElevation
                variant='contained'
                onClick={() => removeFromCart(item.id)}
              >
                -
              </Button>
              <p>{item.amount}</p>
              <Button style={{backgroundColor: "rgb(45, 45, 248)"}}
                size='small'
                disableElevation
                variant='contained'
                onClick={() => addToCart(item)}
              >
                +
              </Button>
            </div>
          </div>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
      {cartItems.length === 0 ? <p>No items</p> : 
      <div>
        <h4>Total Price: ${calculateTotal(cartItems).toFixed(2)}</h4>
        <button style={{width: "100%", backgroundColor: "green", color: "white", 
        padding: "10px", border: "0px", cursor: "pointer"}}>BUY</button>
       </div>}
    
    </aside>
  );
};

export default Cart;
