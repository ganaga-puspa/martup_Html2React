import React from 'react'

function Navbar() {
    return (
        <div>
             {/* <!-- .....:::::: Start Header Section - Light Header :::::.... --> */}
             <header className="header-section @@pos_absolute pos-relative light-bg sticky-header d-none d-lg-block section-fluid-270">
            <div className="header-wrapper pos-relative">
            <div className="container-fluid">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        {/* <!-- Start Header Logo --> */}
                        <a href="index.html" className="header-logo">
                            <img className="img-fluid" src="assets/images/logo/logo-light-theme.png" alt=""/>
                        </a>
                        {/* <!-- End Header Logo --> */}

                    </div>


                    <div className="col-auto d-flex align-items-center">
                        <div className="header-event">
                            {/* <!-- Start Menu event --> */}
                            <div className="menu-event dropdown">
                                <button className="main-menu-event dropdown-toggle" data-bs-toggle="dropdown"><img src="assets/images/icons/icon-open-menu.svg" alt=""/><span>Menu</span><img src="assets/images/icons/icon-arrow-drop-down.svg" alt=""/></button>
                                <ul className="mainmenu-nav dropdown-menu">
                                    <li className="menu-items">
                                        <a href="index.html">Home <span className="material-icons">arrow_right</span></a>
                                        <div className="has-dropdown">
                                            <div className="menu-content">
                                                <h6 className="title">Home Page</h6>
                                                <ul className="submenu">
                                                    <li><a href="index.html">Home 1</a></li>
                                                    <li><a href="index-2.html">Home 2</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-items">
                                        <a href="shop-grid-sidebar-left.html">Shop <span className="material-icons">arrow_right</span></a>
                                        <div className="has-dropdown megamenu">
                                            <div className="menu-content">
                                                <h6 className="title">Shop Page</h6>
                                                <ul className="submenu">
                                                    <li><a href="shop-grid-sidebar-left.html">Left Sidebar</a></li>
                                                    <li><a href="shop-grid-sidebar-right.html">Right Sidebar</a></li>
                                                    <li><a href="shop-grid-sidebar-full-width-3-column.html">Shop Full Width</a></li>
                                                </ul>
                                            </div>
                                            <div className="menu-content">
                                                <h6 className="title">Product Details Page</h6>
                                                <ul className="submenu">
                                                    <li><a href="product-details-default.html">Product Default</a></li>
                                                    <li><a href="product-details-group.html">Product Group</a></li>
                                                    <li><a href="product-details-left-sidebar.html">Product Left Sidebar</a></li>
                                                    <li><a href="product-details-right-sidebar.html">Product Right Sidebar</a></li>
                                                </ul>
                                            </div>
                                            <div className="menu-content">
                                                <h6 className="title">Others Page</h6>
                                                <ul className="submenu">
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                    <li><a href="compare.html">Compare</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="login.html">Login</a></li>
                                                    <li><a href="my-account.html">MyAccount</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-items">
                                        <a href="blog-list-left-sidebar.html">Blog <span className="material-icons">arrow_right</span></a>
                                        <div className="has-dropdown megamenu">
                                            <div className="menu-content">
                                                <h6 className="title">Blog List Full Width</h6>
                                                <ul className="submenu">
                                                    <li><a href="blog-list-3-grid-full-width.html">Grid 3 Full Width</a></li>
                                                    <li><a href="blog-list-4-grid-full-width.html">Grid 4 Full Width</a></li>
                                                </ul>
                                            </div>
                                            <div className="menu-content">
                                                <h6 className="title">Blog List Sidebar</h6>
                                                <ul className="submenu">
                                                    <li><a href="blog-list-left-sidebar.html">Left Sidebar</a></li>
                                                    <li><a href="blog-list-right-sidebar.html">Right Sidebar</a></li>
                                                </ul>
                                            </div>
                                            <div className="menu-content">
                                                <h6 className="title">Blog Details</h6>
                                                <ul className="submenu">
                                                    <li><a href="blog-details-full-width.html">Full Width</a></li>
                                                    <li><a href="blog-details-left-sidebar.html">Left Sidebar</a></li>
                                                    <li><a href="blog-details-right-sidebar.html">Right Sidebar</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-items">
                                        <a href="#">Pages <span className="material-icons">arrow_right</span></a>
                                        <div className="has-dropdown">
                                            <div className="menu-content">
                                                <h6 className="title">Inner Pages</h6>
                                                <ul className="submenu">
                                                    <li><a href="about.html">About Us</a></li>
                                                    <li><a href="faq.html">FAQ</a></li>
                                                    <li><a href="error.html">404-Error</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-items"><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>

                            <div className="search-event">
                                <input className="header-search" type="search" placeholder="Search"/>
                                <button className="header-search-btn" type="submit"><img src="assets/images/icons/icon-search.svg" alt=""/></button>
                            </div>
                            {/* <!-- End Menu event --> */}
                        </div>
                    </div>

                    <div className="col-auto">
                        <div className="header-action">
                            <button className="header-action-item header-action-wishlist" data-bs-toggle="offcanvas" data-bs-target="#wishlistOffcanvas"><img src="assets/images/icons/icon-heart-dark.svg" alt=""/><span className="count-tag">01</span></button>
                            <button className="header-action-item header-action-wishlist" data-bs-toggle="offcanvas" data-bs-target="#addcartOffcanvas"><img src="assets/images/icons/icon-shopping-bag-dark.svg" alt=""/><span className="item-count item-count--light">02 ITEMS</span></button>
                        </div>
                    </div>


                    </div>
                    </div>
            </div>

            </header>
    {/* <!-- .....:::::: End Header Section - Light Header :::::.... -->    */}

    {/* <!--  .....::::: Start Offcanvas Mobile Menu Section :::::.... --> */}
    <div className="offcanvas offcanvas-start" tabIndex="-1" id="toggleMenu">
        <div className="offcanvas-header">
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <div className="d-flex justify-content-center ">
                <a href="wishlist.html" className="header-action-item header-action-wishlist"><img src="assets/images/icons/icon-heart-dark.svg" alt=""/><span className="count-tag">01</span></a>
                <a href="cart.html" className="header-action-item header-action-wishlist"><img src="assets/images/icons/icon-shopping-bag-dark.svg" alt=""/><span className="item-count item-count--light">02 ITEMS</span></a>
            </div>

            <div className="header-event mobile-search my-5">
                <div className="search-event">
                    <input className="header-search" type="search"/>
                    <button className="header-search-btn" type="submit"><img src="assets/images/icons/icon-search.svg" alt=""/></button>
                </div>
            </div>

            {/* <!-- Start Offcanvas Mobile Menu Wrapper --> */}
            <div className="offcanvas-mobile-menu-wrapper">
                {/* <!-- Start Mobile Menu  --> */}
                <div className="mobile-menu-bottom">
                    {/* <!-- Start Mobile Menu Nav --> */}
                    <div className="offcanvas-menu">
                        <ul>
                            <li>
                                <a href="#"><span>Home</span></a>
                                <ul className="mobile-sub-menu">
                                    <li><a href="index.html">Home 1</a></li>
                                    <li><a href="index-2.html">Home 2</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><span>Shop</span></a>
                                <ul className="mobile-sub-menu">
                                    <li>
                                        <a href="#">Shop Page</a>
                                        <ul className="mobile-sub-menu">
                                            <li><a href="shop-grid-sidebar-left.html">Left Sidebar</a></li>
                                            <li><a href="shop-grid-sidebar-right.html">Right Sidebar</a></li>
                                            <li><a href="shop-grid-sidebar-full-width-3-column.html">Shop Full Width</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="mobile-sub-menu">
                                    <li>
                                        <a href="#">Product Page</a>
                                        <ul className="mobile-sub-menu">
                                            <li><a href="product-details-default.html">Product Default</a></li>
                                            <li><a href="product-details-group.html">Product Group</a></li>
                                            <li><a href="product-details-left-sidebar.html">Product Left Sidebar</a></li>
                                            <li><a href="product-details-right-sidebar.html">Product Right Sidebar</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="mobile-sub-menu">
                                    <li>
                                        <a href="#">Others Page</a>
                                        <ul className="mobile-sub-menu">
                                            <li><a href="cart.html">Cart</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                            <li><a href="compare.html">Compare</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="my-account.html">MyAccount</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><span>Blogs</span></a>
                                <ul className="mobile-sub-menu">
                                    <li>
                                        <a href="#">Blog List</a>
                                        <ul className="mobile-sub-menu">
                                            <li><a href="blog-list-3-grid-full-width.html">Grid 3 Full Width</a></li>
                                            <li><a href="blog-list-4-grid-full-width.html">Grid 4 Full Width</a></li>
                                            <li><a href="blog-list-left-sidebar.html">Left Sidebar</a></li>
                                            <li><a href="blog-list-right-sidebar.html">Right Sidebar</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="mobile-sub-menu">
                                    <li>
                                        <a href="#">Blog Details</a>
                                        <ul className="mobile-sub-menu">
                                            <li><a href="blog-details-left-sidebar.html">Left Sidebar</a></li>
                                            <li><a href="blog-details-right-sidebar.html">Right Sidebar</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><span>Pages</span></a>
                                <ul className="mobile-sub-menu">
                                    <li><a href="about.html"><span>About Us</span></a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="error.html">404 Page</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="contact.html"><span>Contact</span></a>
                            </li>
                        </ul>
                    </div> 
                    {/* <!-- End Mobile Menu Nav --> */}
                </div> 
                {/* <!-- End Mobile Menu --> */}

                {/* <!-- Start Mobile contact Info --> */}
                <div className="mobile-contact-info text-center">
                    <ul className="social-link">
                        <li><a href="https://www.facebook.com/" target="_blank" rel="noopener"><img className="icon-svg" src="assets/images/icons/icon-facebook-f-dark.svg" alt=""/></a>
                        </li>
                        <li><a href="https://twitter.com/" target="_blank" rel="noopener"><img className="icon-svg" src="assets/images/icons/icon-twitter-dark.svg" alt=""/> </a>
                        </li>
                        <li><a href="https://www.pinterest.com/" target="_blank" rel="noopener"><img className="icon-svg" src="assets/images/icons/icon-pinterest-p-dark.svg" alt=""/></a></li>
                        <li><a href="https://dribbble.com/" target="_blank" rel="noopener"><img className="icon-svg" src="assets/images/icons/icon-dribbble-dark.svg" alt=""/></a></li>
                    </ul>
                </div>
                {/* <!-- End Mobile contact Info --> */}

            </div> 
            {/* <!-- End Offcanvas Mobile Menu Wrapper --> */}
        </div>
    </div>
    {/* <!-- ...:::: End Offcanvas Mobile Menu Section:::... --> */}

    {/* <!--  .....::::: Start Wishlist Offcanvas Section :::::.... --> */}
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="wishlistOffcanvas">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title">Wishlist</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <ul className="offcanvas-products-list">
                <li className="single-item">
                    <div className="box">
                        <a href="" className="image">
                            <img src="assets/images/products/small/product-small-1.webp" alt="" className="offcanvas-wishlist-image"/>
                        </a>
                        <div className="content">
                            <a href="" className="title">Tops</a>
                            <div className="offcanvas-wishlist-item-details">
                                <span className="offcanvas-wishlist-item-details-quantity">1 x </span>
                                <span className="offcanvas-wishlist-item-details-price">$100.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="item-delete text-right">
                        <a href="#"><img src="assets/images/icons/icon-trash.svg" alt=""/></a>
                    </div>
                </li>
                <li className="single-item">
                    <div className="box">
                        <a href="" className="image">
                            <img src="assets/images/products/small/product-small-2.webp" alt="" className="offcanvas-wishlist-image"/>
                        </a>
                        <div className="content">
                            <a href="" className="title">Leggings</a>
                            <div className="offcanvas-wishlist-item-details">
                                <span className="offcanvas-wishlist-item-details-quantity">1 x </span>
                                <span className="offcanvas-wishlist-item-details-price">$49.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="item-delete text-right">
                        <a href="#"><img src="assets/images/icons/icon-trash.svg" alt=""/></a>
                    </div>
                </li>
                <li className="single-item">
                    <div className="box">
                        <a href="" className="image">
                            <img src="assets/images/products/small/product-small-3.webp" alt="" className="offcanvas-wishlist-image"/>
                        </a>
                        <div className="content">
                            <a href="" className="title">Casual Shirt</a>
                            <div className="offcanvas-wishlist-item-details">
                                <span className="offcanvas-wishlist-item-details-quantity">1 x </span>
                                <span className="offcanvas-wishlist-item-details-price">$65.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="item-delete text-right">
                        <a href="#"><img src="assets/images/icons/icon-trash.svg" alt=""/></a>
                    </div>
                </li>
            </ul>
            <div className="offcanvas-action-link">
                <a href="wishlist.html" className="btn">View wishlist</a>
            </div>
        </div>
    </div>
    {/* <!-- ...:::: End Wishlist Offcanvas Section:::... --> */}


    {/* <!--  .....::::: Start Add Cart Offcanvas Section :::::.... --> */}
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="addcartOffcanvas">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title">Add Cart</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <ul className="offcanvas-products-list">
                <li className="single-item">
                    <div className="box">
                        <a href="" className="image">
                            <img src="assets/images/products/small/product-small-1.webp" alt="" className="offcanvas-wishlist-image"/>
                        </a>
                        <div className="content">
                            <a href="" className="title">Tops</a>
                            <div className="offcanvas-wishlist-item-details">
                                <span className="offcanvas-wishlist-item-details-quantity">1 x </span>
                                <span className="offcanvas-wishlist-item-details-price">$100.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="item-delete text-right">
                        <a href="#"><img src="assets/images/icons/icon-trash.svg" alt=""/></a>
                    </div>
                </li>
                <li className="single-item">
                    <div className="box">
                        <a href="" className="image">
                            <img src="assets/images/products/small/product-small-2.webp" alt="" className="offcanvas-wishlist-image"/>
                        </a>
                        <div className="content">
                            <a href="" className="title">Leggings</a>
                            <div className="offcanvas-wishlist-item-details">
                                <span className="offcanvas-wishlist-item-details-quantity">1 x </span>
                                <span className="offcanvas-wishlist-item-details-price">$49.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="item-delete text-right">
                        <a href="#"><img src="assets/images/icons/icon-trash.svg" alt=""/></a>
                    </div>
                </li>
                <li className="single-item">
                    <div className="box">
                        <a href="" className="image">
                            <img src="assets/images/products/small/product-small-3.webp" alt="" className="offcanvas-wishlist-image"/>
                        </a>
                        <div className="content">
                            <a href="" className="title">Casual Shirt</a>
                            <div className="offcanvas-wishlist-item-details">
                                <span className="offcanvas-wishlist-item-details-quantity">1 x </span>
                                <span className="offcanvas-wishlist-item-details-price">$65.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="item-delete text-right">
                        <a href="#"><img src="assets/images/icons/icon-trash.svg" alt=""/></a>
                    </div>
                </li>
            </ul>
            <div className="offcanvas-action-link">
                <a href="cart.html" className="btn">Add Cart</a>
                <a href="checkout.html" className="btn">Checkout</a>
            </div>
        </div>
    </div>
    {/* <!-- ...:::: End Add Cart Offcanvas Section:::... --> */}
    




        </div>
    )
}

export default Navbar
