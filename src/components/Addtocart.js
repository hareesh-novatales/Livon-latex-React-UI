
import { useEffect, useId, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Addtocart.css';
import SingleProductDetails from './SingleProductDetails';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import MattressProductList from './MattressProductList';
import PillowProducts from './PillowProducts'; 
import Header from './Header';  
import Orderdetails from './Orderdetails';

function Addtocart({ name, ...props }) {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

 
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [mainproductsData, setMainproductsData] = useState([])

 

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleAdd = (productData) => { 
    const selectedProduct = mainproductsData.find(i => i.id === productData.id);
    const updatedProducts = products.map((product) =>
      product.id === productData.id ? { ...product, count: product.count + 1, price : product.price + selectedProduct.price  } : product
    );
    setProducts(updatedProducts);   
    totalAmountData();
  };

 
       
  const handleSubtracts = (productData)=>{ 
    if(productData.count > 1){
      const selectedProduct = mainproductsData.find(i => i.id === productData.id);
      const updatedProducts = products.map((product) =>
        product.id === productData.id && product.count > 1
          ? { ...product, count: product.count - 1, price : product.price - selectedProduct.price }
          : product 
      );
      setProducts(updatedProducts); 
    }
    else{
      const updatedProducts = products.filter((product) => product.id !== productData.id);
      setProducts(updatedProducts);   
    }
  }


  const deleted = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);   
  };

  const fetchInfo = () => {
    fetch('https://requestly.tech/api/mockv2/add-to-cart?username=user1706771958830&')
      .then((res) => res.json())
      .then((data) => {
        console.log('product', data, id);
         
        const productsWithCount = data.productslist.map((product) => ({ ...product, count: 1 }));
        setMainproductsData(productsWithCount)
        setProducts(productsWithCount);       
      })
      .catch((error) => console.error('Error:', error));
  };

  useEffect(() => {
    fetchInfo();
  }, [id]); 

  useEffect(() => {
    totalAmountData();
  }, [products]);  

const totalAmountData = () => {
    let totalPrice = products.map(product => product.price).reduce((acc, val) => acc+Number(val), 0);
    setTotalAmount(totalPrice);
  }



  return (
    <>
      <Button placement="end" variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>

      <SingleProductDetails handleShow={handleShow} handleClose={handleClose} show={show} />

      <Header handleShow={handleShow} handleClose={handleClose} show={show}  />

      <Offcanvas placement="end" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CART ({products.length} items) </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
   
          {(products.length > 0) ? (products.map((product) => ( 
            
            <div key={product.id} className="dFlex">
              <div className="mr-4">
                <img src={product.imageurl} alt="" className="thumbnailImg" />
                <div className="adding">
                  <button className="subtract-btn" onClick={() => handleSubtracts(product)}>
                    -
                  </button>
                  <input type="text" value={product.count} className="quantity-input" readOnly />
                  
                  <button className="add-btn" onClick={() =>handleAdd (product)}>
                    +
                  </button>
                </div>
              </div>
              <div className="heading small">
                <h6>Livon Comforts</h6>
                <h2>{product.title}</h2>
                <ul id="ul">
                  <li>
                    <b>Size:</b> {product.size}
                  </li>
                  <li>
                    <b>Height:</b> {product.height}
                  </li>
                  <li>
                    <b>Dimensions:</b> {product.dimensions}
                  </li>
                </ul>
              
                <div className="deleteBlk">
                  <h6 onClick={() => deleted(product.id)}> <FontAwesomeIcon icon={faTrashCan} /> Remove</h6>
                 
                  <h4>₹ {product.price.toFixed(2)}</h4>  
                </div>
              </div>
            </div>
          ))) : 
          
          <>
         
          <div className='text-center mt-5'> 
            
            <div>
              <div className='cart-empty' >
              <img src='https://th.bing.com/th/id/R.b6bfa0f21bb4faa4f3d96ce4f100c038?rik=Zbi%2bD%2bFh5so9TA&riu=http%3a%2f%2fwww.fairshop.com.bd%2fimg%2fempty_cart.b6bfa0f2.png&ehk=niQkdt5scXWkBFMKkUz23uy9TVmgvSzkW%2bZeTDqpgQo%3d&risl=&pid=ImgRaw&r=0' width={'100px'} />
            
          
              </div>
              
            <h3 style={{color:'rgb(171 209 201)'}}>Your cart is empty.</h3>
      
          <p style={{color:'rgb(171 209 201)'}}>Kindly continue shop </p>
            </div>

            <div className='back-shoping'>

              <Link to='/'><Button > SHOP MATTRESS </Button></Link>
              <Link to='/'><Button > SHOP PILLOW </Button></Link>
              <Link to='/'><Button > SHOP TOPPER </Button></Link>
              <Link to='/'><Button > SHOP BABY/KID'S RANGE </Button></Link>

              <Routes>
                <Route path='/PILLOW' element={<PillowProducts/>} />
              </Routes>

            </div>
          </div>         
          </> }
        </Offcanvas.Body>

        { products.length > 0 && <div className="fixed px-10 sidebar_hight bg-secondary-2 ">
          <div className="flex justify-between mt-1 md:mt-4 bg-secondary-2">
            <p className="text-sm font-semibold md:text-lg font-montserrat">TOTAL</p> 

          
            <p className="text-lg font-bold md:text-3xl font-montserrat">₹ {totalAmount.toFixed(2)}</p>
            
      
          </div>
          <div class="fixed px-10 sidebar_hight bg-secondary-2 "> 
   
  <div class="w-full text-center cursor-pointer">
    <div class="snap_emi_txt">
      <div class="snap-emi-inst" onclick="n('on_page',103396)">
 
      </div>
      <div onclick="n('on_page',103396)" class="snap-emi-slogan"><span>UPI &amp; Cards Accepted </span>
      </div>
    </div>
  <span class="hidden snapmint_lowest_emi_value" data-snapmint-price="103396"
    data-snapmint-skuid="productsku" data-snapmint-merchant_id="1507" data-snapmint-page="minicart"
    >?order_value=103396&amp;subvention=undefined&amp;udf1=&amp;skuid=productsku</span>
</div>
 
 
  <button class="check">
  {/* <h6>CHECKOUT</h6> */}
     <Link to='/Checkout'><h6>CHECKOUT</h6></Link>
  </button>
 
 
 
<p class="continue-shopping mr-3">Continue Shopping</p>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1.5em" class="svg-icon"
  height="1.5em">
  <path
    d="M506.134 241.843l-.018-.019-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104 .018-.019c7.833-7.818 7.808-20.522-.001-28.314z">
  </path>
</svg>

  </div>
        </div>}
      </Offcanvas>
    </>
  );
}

export default Addtocart;
