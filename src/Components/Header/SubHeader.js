import { Link } from "react-router-dom";
import "./SubHeader.css";

export default function SubHeader() {
  return (
    <div class="navbar">
      <div class="main">
        {/* <a href="#home">Home</a> */}
        <div class="subnav">
          <button class="subnavbtn">
            ABOUT <i class="fa fa-caret-down"></i>
          </button>
          <div class="subnav-content">
            <a href="#company">About the hotel</a>
            <div className="list-div">
              <ul className="list">
                <li className="subList">
                  <a href="" className="hover-item-li">
                    All New
                  </a>
                </li>
                <li className="subList">
                  <a href="" className="hover-item-li">
                    Just Dropped
                  </a>
                </li>
                <li className="subList">
                  <a href="" className="hover-item-li">
                    New Makeup
                  </a>
                </li>
                <li className="subList">
                  <a href="" className="hover-item-li">
                    New Skincare
                  </a>
                </li>
                <li className="subList">
                  <a href="" className="hover-item-li">
                    New Haircare
                  </a>
                </li>
                <li className="subList">
                  <a href="" className="hover-item-li">
                    New Fragrance
                  </a>
                </li>
                <li className="subList">
                  <a href="" className="hover-item-li">
                    New Bath & Body
                  </a>
                </li>
                <li>
                  <a href="" className="hover-item-li">
                    New Tools & Brushes
                  </a>
                </li>
              </ul>
            </div>
            <a href="#team">DINING</a>
            <a href="#careers">EXPERIENCE</a>
          </div>
        </div>
        <div class="subnav">
          <button class="subnavbtn">
            ROOMS & SUITES<i class="fa fa-caret-down"></i>
          </button>
          <div class="subnav-content">
            <a href="#link1">Link 1</a>
            <a href="#link2">Link 2</a>
            <a href="#link3">Link 3</a>
            <a href="#link4">Link 4</a>
          </div>
        </div>
        <div class="subnav">
          <button class="subnavbtn">
            DINING<i class="fa fa-caret-down"></i>
          </button>
          <div class="subnav-content">
            <a href="#link1">Link 1</a>
            <a href="#link2">Link 2</a>
            <a href="#link3">Link 3</a>
            <a href="#link4">Link 4</a>
          </div>
        </div>
        <div class="subnav">
          <button class="subnavbtn">
            EXPERIENCE<i class="fa fa-caret-down"></i>
          </button>
          <div class="subnav-content">
            <a href="#link1">Link 1</a>
            <a href="#link2">Link 2</a>
            <a href="#link3">Link 3</a>
            <a href="#link4">Link 4</a>
          </div>
        </div>
        <div class="subnav">
          <button class="subnavbtn">
            EVENTS<i class="fa fa-caret-down"></i>
          </button>
          <div class="subnav-content">
            <a href="#bring">Bring</a>
            <a href="#deliver">Deliver</a>
            <a href="#package">Package</a>
            <a href="#express">Express</a>
          </div>
        </div>
        <div class="subnav">
          <button class="subnavbtn">
            GALLERY<i class="fa fa-caret-down"></i>
          </button>
          <div class="subnav-content">
            <a href="#link1">Link 1</a>
            <a href="#link2">Link 2</a>
            <a href="#link3">Link 3</a>
            <a href="#link4">Link 4</a>
          </div>
        </div>
        {/* <a href="#contact">OFFERS</a> */}{" "}
        <div class="subnav">
          <button class="subnavbtn">
            OFFERS<i class="fa fa-caret-down"></i>
          </button>
          <div class="subnav-content">
            <a href="#link1">Link 1</a>
            <a href="#link2">Link 2</a>
            <a href="#link3">Link 3</a>
            <a href="#link4">Link 4</a>
          </div>
        </div>
        <div class="subnav">
          <button class="subnavbtn">
            MORE<i class="fa fa-caret-down"></i>
          </button>
          <div class="subnav-content">
            <a href="#link1">Link 1</a>
            <a href="#link2">Link 2</a>
            <a href="#link3">Link 3</a>
            <a href="#link4">Link 4</a>
          </div>
        </div>
      </div>
    </div>
  );
}
