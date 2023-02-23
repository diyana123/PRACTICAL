import "./Head.css";

export default function Head() {
  return (
    <div class="navbar">
      <div class="main">
        {/* <a href="#home">ABOUT</a>
        <a href="#news">ROOMS & SUITES</a> */}
        <div class="dropdown">
          <button class="dropbtn">
            ABOUT
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            {/* <div class="header">
              <h5>About the hotel</h5>
            </div> */}
            <div class="row">
              <div class="column">
                <h3>About the hotel</h3>
                <a href="#">Overview</a>
                <a href="#">Explore Colombo</a>
                <a href="#">Services and facilities</a>
                <a href="#">Map and direction</a>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            ROOMS & SUITES
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            {/* <div class="header">
              <h5>About the hotel</h5>
            </div> */}
            <div class="row">
              <div class="column">
                <h3>Rooms</h3>
                <a href="#">Deluxe Lake View</a>
                <a href="#">Deluxe Ocean View</a>
                <a href="#">Premier Balcony</a>
                <a href="#">Premier Ocean View</a>
              </div>
              <div class="column">
                <h3>Horizon Club</h3>
                <a href="#">Deluxe Lake View</a>
                <a href="#">Deluxe Ocean View</a>
                <a href="#">Premier Balcony</a>
                <a href="#">Premier Ocean View</a>
              </div>
              <div class="column">
                <h3>Suites</h3>
                <a href="#">Deluxe Lake View</a>
                <a href="#">Deluxe Ocean View</a>
                <a href="#">Premier Balcony</a>
                <a href="#">Premier Ocean View</a>
              </div>
              {/* <div class="column">
                <h3>Connecting Rooms</h3>
                <a href="#">Deluxe Lake View</a>
                <a href="#">Deluxe Ocean View</a>
                <a href="#">Premier Balcony</a>
                <a href="#">Premier Ocean View</a>
              </div> */}
            </div>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            DINING
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <div class="row">
              <div class="column">
                <h3>Rooms</h3>
                <a href="#">Deluxe Lake View</a>
                <a href="#">Deluxe Ocean View</a>
                <a href="#">Premier Balcony</a>
                <a href="#">Premier Ocean View</a>
              </div>
              <div class="column">
                <h3>Horizon Club</h3>
                <a href="#">Deluxe Lake View</a>
                <a href="#">Deluxe Ocean View</a>
                <a href="#">Premier Balcony</a>
                <a href="#">Premier Ocean View</a>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            EXPERIENCE
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <div class="row">
              <div class="column">
                <h3>Rooms</h3>
                <a href="#">Deluxe Lake View</a>
                <a href="#">Deluxe Ocean View</a>
                <a href="#">Premier Balcony</a>
                <a href="#">Premier Ocean View</a>
              </div>
              <div class="column">
                <h3>Horizon Club</h3>
                <a href="#">Deluxe Lake View</a>
                <a href="#">Deluxe Ocean View</a>
                <a href="#">Premier Balcony</a>
                <a href="#">Premier Ocean View</a>
              </div>
              <div class="column">
                <h3>Suites</h3>
                <a href="#">Deluxe Lake View</a>
                <a href="#">Deluxe Ocean View</a>
                <a href="#">Premier Balcony</a>
                <a href="#">Premier Ocean View</a>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            EVENTS
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <div class="row">
              <div class="column">
                <h3>Rooms</h3>
                <a href="#">Deluxe Lake View</a>
                <a href="#">Deluxe Ocean View</a>
                <a href="#">Premier Balcony</a>
                <a href="#">Premier Ocean View</a>
              </div>
              <div class="column">
                <h3>Horizon Club</h3>
                <a href="#">Deluxe Lake View</a>
                <a href="#">Deluxe Ocean View</a>
                <a href="#">Premier Balcony</a>
                <a href="#">Premier Ocean View</a>
              </div>
              <div class="column">
                <h3>Suites</h3>
                <a href="#">Deluxe Lake View</a>
                <a href="#">Deluxe Ocean View</a>
                <a href="#">Premier Balcony</a>
                <a href="#">Premier Ocean View</a>
              </div>
            </div>
          </div>
        </div>
        <a href="#home">GALLERY</a>
        <a href="#news">OFFERS</a>
        <div class="dropdown">
          <button class="dropbtn">
            MORE
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            {/* <div class="header">
              <h5>About the hotel</h5>
            </div> */}
            <div class="row">
              <div class="column">
                <h3>Rooms</h3>
                <a href="#">Deluxe Lake View</a>
                <a href="#">Deluxe Ocean View</a>
                <a href="#">Premier Balcony</a>
                <a href="#">Premier Ocean View</a>
              </div>
              <div class="column">
                <h3>Horizon Club</h3>
                <a href="#">Deluxe Lake View</a>
                <a href="#">Deluxe Ocean View</a>
                <a href="#">Premier Balcony</a>
                <a href="#">Premier Ocean View</a>
              </div>
              <div class="column">
                <h3>Suites</h3>
                <a href="#">Deluxe Lake View</a>
                <a href="#">Deluxe Ocean View</a>
                <a href="#">Premier Balcony</a>
                <a href="#">Premier Ocean View</a>
              </div>
              {/* <div class="column">
                <h3>Connecting Rooms</h3>
                <a href="#">Deluxe Lake View</a>
                <a href="#">Deluxe Ocean View</a>
                <a href="#">Premier Balcony</a>
                <a href="#">Premier Ocean View</a>
              </div> */}
            </div>
          </div>
        </div>

        <div class="flex items-center flex-wrap ">
          <button class="ml-24 bg-transparent  text-white font-semibold py-2 px-4 border text-sm border-white rounded">
            FIND A HOTEL
          </button>
        </div>
      </div>
    </div>
  );
}
