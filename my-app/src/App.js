
function App() {
  return ( 
    <div>
  <div className="Navbar">
    <div className="menu">
      <i className="fa-solid fa-bars" />
    </div>
    <div className="logo">
      <img src="../Img/02.png" alt="" />
    </div>
    <div className="input">
      {/* <i class="fa-solid fa-magnifying-glass"></i> */}
      <input type="button" defaultValue="Search food ..." />
    </div>
    <div className="all">
      <div className="user">
        <i className="fa-sharp fa-regular fa-user">Sign In</i>
      </div>
      <div className="heart">
        <i className="fa-sharp fa-regular fa-heart">Wishlist</i>
      </div>
      <div className="cart">
        <i className="fa-solid fa-cart-shopping">$0.00</i>
      </div>
    </div>
  </div>
  <div className="Hero">
    <div className="h1">
      <h1>
        Looking for Good Quality <br />
        Ingredients?
      </h1>
      <div className="order">Order Online</div>
    </div>
  </div>
  <div className="Promotional">
    <div className="Promotional1">
      <div className="title1">Buy 5 or more Save $1 each</div>
      <p>
        Shop now <i className="fa-solid fa-chevron-right" />
      </p>
    </div>
    <div className="Promotional2">
      <div className="title2">Collect 10x Point for Free Delivery</div>
      <p>
        Shop now <i className="fa-solid fa-chevron-right" />
      </p>
    </div>
    <div className="Promotional3">
      <div className="title3"> 50% Off for Fresh Vegetables</div>
      <p>
        Shop now <i className="fa-solid fa-chevron-right" />
      </p>
    </div>
  </div>
  <div className="heading1">
    <h2>Featured Items</h2>
    <div className="featured">
      <div className="featured1">
        <div className="item">
          <div className="price">$4.89</div>
          <div className="content">Cavendish Banana</div>
          <div className="add">Add to Cart</div>
        </div>
      </div>
      <div className="featured2">
        <div className="item">
          <div className="price">$1.29</div>
          <div className="content">Slicing Tomatoes</div>
          <div className="add">Add to Cart</div>
        </div>
      </div>
      <div className="featured3">
        <div className="item">
          <div className="price">$4.23</div>
          <div className="content">
            Chiitos Crunch <br /> Chocolate Chips
          </div>
          <div className="add">Add to Cart</div>
        </div>
      </div>
      <div className="featured4">
        <div className="item">
          <div className="price">$0.89</div>
          <div className="content">
            Goriorio Original <br /> Crackers
          </div>
          <div className="add">Add to Cart</div>
        </div>
      </div>
      <div className="featured5">
        <div className="item">
          <div className="price">$5.75</div>
          <div className="content">
            Yve Large Brown <br /> Eggs, 12 Count
          </div>
          <div className="add">Add to Cart</div>
        </div>
      </div>
      <div className="featured6">
        <div className="item">
          <div className="price">$4.23</div>
          <div className="content">Jemima Waffle</div>
          <div className="add">Add to Cart</div>
        </div>
      </div>
    </div>
  </div>
  <div className="heading2">
    <h2>Best Seller in Your Area</h2>
    <div className="box">
      <div className="box1">
        <div className="clan">
          <div className="price">$2.39</div>
          <div className="content">Sunmaid Frozz</div>
          <div className="add">Add to Cart</div>
        </div>
      </div>
      <div className="box2">
        <div className="clan">
          <div className="price">$2.11</div>
          <div className="content">Alkaline Battery</div>
          <div className="add">Add to Cart</div>
        </div>
      </div>
      <div className="box3">
        <div className="clan">
          <div className="price">$1.89</div>
          <div className="content" />
          <div className="add">Add to Cart</div>
        </div>
      </div>
      <div className="box4">
        <div className="clan">
          <div className="price">$4.89</div>
          <div className="content">Cavendish Banana</div>
          <div className="add">Add to Cart</div>
        </div>
      </div>
      <div className="box5">
        <div className="clan">
          <div className="price">$4.89</div>
          <div className="content">Cavendish Banana</div>
          <div className="add">Add to Cart</div>
        </div>
      </div>
      <div className="box6">
        <div className="clan">
          <div className="price">$4.89</div>
          <div className="content">Cavendish Banana</div>
          <div className="add">Add to Cart</div>
        </div>
      </div>
    </div>
  </div>
</div>

   );
}

export default App;
