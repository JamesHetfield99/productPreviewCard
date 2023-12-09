import './App.css';

import imageDesktop from "./images/image-product-desktop.jpg" 
import imageMobile from "./images/image-product-mobile.jpg" 
import cartIcon from "./images/icon-cart.svg"

const mobileSize = window.innerWidth <= 600

function App() {
  return (
    <div className="App">
      <main>
        <img className='main-pic' src={mobileSize ? imageMobile : imageDesktop} alt='chanel-parfume' />
        <section className='product-info-container'>
          <span className='product-heading'>Perfume</span>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL
          </p>
          <div className='product-price'>
            <span className='current-price'>$149.99</span>
            <span className='prev-price'>$169.99</span>
          </div>
          <button className='add-button'>
            <img src={cartIcon} alt='cart-icon' />
            Add to Cart
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
