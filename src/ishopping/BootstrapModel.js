import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DisplayItem from '../components/DisplayItem';
import { useCookies } from 'react-cookie';
import Table from 'react-bootstrap/Table';




function BootstrapModel(props) {
  console.log(props.data);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  

  function handleIncrement(cartItem) {
    const updatedCart = cart.map(item =>
      item.id === cartItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    setTotal(total + cartItem.price);
  }

  function handleDecrement(cartItem) {
    if (cartItem.quantity > 1) {
      const updatedCart = cart.map(item =>
        item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCart(updatedCart);
      setTotal(total - cartItem.price);
    }
  }
  function handleDelete(cartItem) {
    setCart(cart.filter(item => item.id !== cartItem.id));
    setTotal(total - cartItem.price * cartItem.quantity);
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <span className='bi bi-cart4'>Cart Items</span>
      </Button>

      <Modal show={show} onHide={handleClose} >
        <div>
        <h5>Cart Items</h5>
        <Table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Preview</th>
              <th>Qty</th>
              <th>Price</th>
              <th></th>
            </tr>
            <tr>
              
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem, index) => (
              <tr key={cartItem.id}>
                <td>{index + 1}</td>
                <td>{cartItem.title}</td>
                <td><img src={cartItem.image} style={{ width: '50px', height: '50px' }} /></td>
                <td className="">
                  <button onClick={() => handleDecrement(cartItem)}>-</button>
                  <span>{cartItem.quantity}</span>
                  <button onClick={() => handleIncrement(cartItem)}>+</button>
                </td>
                <td>{Math.round(cartItem.price) * cartItem.quantity}</td>
                <td><button className="btn btn-danger" onClick={() => handleDelete(cartItem)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div>
               
        </div>
        <div className="d-flex justify-content-between">
            <h5>Total price : ₹{Math.round(total)}.00</h5>
            <button className="btn btn-primary">Continue</button>
        </div>
      </div>   
      </Modal>
    </>
  );
}

export default BootstrapModel;