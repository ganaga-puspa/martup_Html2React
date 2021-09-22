import React from 'react'

function ProductTabItemSection() {
    return (
        <div>
            
            {/* <!-- ...::: Strat Product Tab Item Section :::... --> */}
    <div className="product-tab-items-section section-fluid-270 section-top-gap-100">
        <div className="box-wrapper">
            <div className="section-wrapper">
                <div className="container-fluid">
                    <div className="row justify-content-between align-items-center flex-warp">
                        <div className="col-xxl-4 col-lg-5 col-md-6 col-sm-8 col-auto me-5">
                            <div className="section-content section-content-gap-60">
                                <h2 className="section-title">Products</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-tab-item-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            {/* <!-- Start Product Tab Items  --> */}
                            <ul className="product-tab nav" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#all" type="button">All <img src="assets/images/icons/product-tab-icon-1.svg" alt=""/></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#men" type="button">Men <img src="assets/images/icons/product-tab-icon-2.svg" alt=""/></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#women" type="button">Women <img src="assets/images/icons/product-tab-icon-3.svg" alt=""/></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#kid" type="button">Kid <img src="assets/images/icons/product-tab-icon-5.svg" alt=""/></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#others" type="button">Others <img src="assets/images/icons/product-tab-icon-4.svg" alt=""/></button>
                                </li>
                            </ul>
                            {/* <!-- End Product Tab Items  --> */}

                            {/* <!-- Start Tab Content Items --> */}
                            <div className="tab-content">
                                {/* <!-- Start Tab Content Single Item --> */}
                                <div className="tab-pane tab-animate show active" id="all" role="tabpanel">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="center-slider-nav product-slider-3grids-2rows">
                                                {/* <!-- Slider main container --> */}
                                                <div className="swiper-container">
                                                    {/* <!-- Additional required wrapper --> */}
                                                    <div className="swiper-wrapper">
                                                        {/* <!-- Slides -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-1.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">MEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Man's Outdoor Shirt</a></h4>
                                                                    <span className="price">$355.00 <del>$400.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-2.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Women Summer deal</a></h4>
                                                                    <span className="price">$550.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-3.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Women Luxury Party</a></h4>
                                                                    <span className="price">$1050.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-5.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-yellow">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Star Women pants</a></h4>
                                                                    <span className="price">$200.00 <del>$300.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-4.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Slightly jackets XL Cool </a></h4>
                                                                    <span className="price">$350.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-6.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">Bag</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Distracted XL bag</a></h4>
                                                                    <span className="price">$1200.00 <del>$1500.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-4.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Slightly jackets XL Cool </a></h4>
                                                                    <span className="price">$350.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-5.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-yellow">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Star Women pants</a></h4>
                                                                    <span className="price">$200.00 <del>$300.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-6.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">Bag</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Distracted XL bag</a></h4>
                                                                    <span className="price">$1200.00 <del>$1500.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-2.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Women Summer deal</a></h4>
                                                                    <span className="price">$550.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-1.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">MEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Man's Outdoor Shirt</a></h4>
                                                                    <span className="price">$355.00 <del>$400.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-3.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Women Luxury Party</a></h4>
                                                                    <span className="price">$1050.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 --> */}
                                                    </div>

                                                </div>
                                                {/* <!-- If we need navigation buttons --> */}
                                                <div className="center-slider-nav-buttons slider-buttons">
                                                    <div className="slider-button button-prev"><span className="material-icons">arrow_left</span></div>
                                                    <div className="slider-button button-next"><span className="material-icons">arrow_right</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Tab Content Single Item -->
                                <!-- Start Tab Content Single Item --> */}
                                <div className="tab-pane tab-animate" id="men" role="tabpanel">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="center-slider-nav product-slider-3grids-2rows">
                                                {/* <!-- Slider main container --> */}
                                                <div className="swiper-container">
                                                    {/* <!-- Additional required wrapper --> */}
                                                    <div className="swiper-wrapper">
                                                        {/* <!-- Slides --> */}

                                                        {/* <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-7.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-yellow">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Star Women pants</a></h4>
                                                                    <span className="price">$200.00 <del>$300.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-8.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Slightly jackets XL Cool </a></h4>
                                                                    <span className="price">$350.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-9.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">Bag</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Distracted XL bag</a></h4>
                                                                    <span className="price">$1200.00 <del>$1500.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->

                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-10.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">MEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Man's Outdoor Shirt</a></h4>
                                                                    <span className="price">$355.00 <del>$400.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-11.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Women Summer deal</a></h4>
                                                                    <span className="price">$550.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-12.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Women Luxury Party</a></h4>
                                                                    <span className="price">$1050.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->

                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-10.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Slightly jackets XL Cool </a></h4>
                                                                    <span className="price">$350.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-11.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-yellow">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Star Women pants</a></h4>
                                                                    <span className="price">$200.00 <del>$300.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-12.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">Bag</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Distracted XL bag</a></h4>
                                                                    <span className="price">$1200.00 <del>$1500.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->

                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-7.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Women Summer deal</a></h4>
                                                                    <span className="price">$550.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-8.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">MEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Man's Outdoor Shirt</a></h4>
                                                                    <span className="price">$355.00 <del>$400.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-9.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Women Luxury Party</a></h4>
                                                                    <span className="price">$1050.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 --> */}
                                                    </div>
                                                </div>
                                                {/* <!-- If we need navigation buttons --> */}
                                                <div className="center-slider-nav-buttons slider-buttons">
                                                    <div className="slider-button button-prev"><span className="material-icons">arrow_left</span></div>
                                                    <div className="slider-button button-next"><span className="material-icons">arrow_right</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Tab Content Single Item -->
                                <!-- Start Tab Content Single Item --> */}
                                <div className="tab-pane tab-animate" id="women" role="tabpanel">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="center-slider-nav product-slider-3grids-2rows">
                                                {/* <!-- Slider main container --> */}
                                                <div className="swiper-container">
                                                    {/* <!-- Additional required wrapper --> */}
                                                    <div className="swiper-wrapper">
                                                        {/* <!-- Slides -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-13.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">MEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Man's Outdoor Shirt</a></h4>
                                                                    <span className="price">$355.00 <del>$400.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-14.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Women Summer deal</a></h4>
                                                                    <span className="price">$550.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-15.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Women Luxury Party</a></h4>
                                                                    <span className="price">$1050.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-16.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-yellow">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Star Women pants</a></h4>
                                                                    <span className="price">$200.00 <del>$300.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-17.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Slightly jackets XL Cool </a></h4>
                                                                    <span className="price">$350.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-18.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">Bag</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Distracted XL bag</a></h4>
                                                                    <span className="price">$1200.00 <del>$1500.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-19.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Slightly jackets XL Cool </a></h4>
                                                                    <span className="price">$350.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-13.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-yellow">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Star Women pants</a></h4>
                                                                    <span className="price">$200.00 <del>$300.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-14.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">Bag</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Distracted XL bag</a></h4>
                                                                    <span className="price">$1200.00 <del>$1500.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-15.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Women Summer deal</a></h4>
                                                                    <span className="price">$550.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-16.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">MEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Man's Outdoor Shirt</a></h4>
                                                                    <span className="price">$355.00 <del>$400.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-17.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Women Luxury Party</a></h4>
                                                                    <span className="price">$1050.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 --> */}
                                                    </div>
                                                </div>
                                                {/* <!-- If we need navigation buttons --> */}
                                                <div className="center-slider-nav-buttons slider-buttons">
                                                    <div className="slider-button button-prev"><span className="material-icons">arrow_left</span></div>
                                                    <div className="slider-button button-next"><span className="material-icons">arrow_right</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Tab Content Single Item -->
                                <!-- Start Tab Content Single Item --> */}
                                <div className="tab-pane tab-animate" id="kid" role="tabpanel">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="center-slider-nav product-slider-3grids-2rows">
                                                {/* <!-- Slider main container --> */}
                                                <div className="swiper-container">
                                                    {/* <!-- Additional required wrapper --> */}
                                                    <div className="swiper-wrapper">
                                                        {/* <!-- Slides -->

                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-20.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-yellow">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Star Women pants</a></h4>
                                                                    <span className="price">$200.00 <del>$300.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-21.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Slightly jackets XL Cool </a></h4>
                                                                    <span className="price">$350.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-22.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">Bag</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Distracted XL bag</a></h4>
                                                                    <span className="price">$1200.00 <del>$1500.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->

                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-23.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">MEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Man's Outdoor Shirt</a></h4>
                                                                    <span className="price">$355.00 <del>$400.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-24.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Women Summer deal</a></h4>
                                                                    <span className="price">$550.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-25.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Women Luxury Party</a></h4>
                                                                    <span className="price">$1050.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->

                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-24.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Slightly jackets XL Cool </a></h4>
                                                                    <span className="price">$350.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-25.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-yellow">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Star Women pants</a></h4>
                                                                    <span className="price">$200.00 <del>$300.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-22.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">Bag</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Distracted XL bag</a></h4>
                                                                    <span className="price">$1200.00 <del>$1500.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->

                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-20.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Women Summer deal</a></h4>
                                                                    <span className="price">$550.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-21.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">MEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Man's Outdoor Shirt</a></h4>
                                                                    <span className="price">$355.00 <del>$400.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-22.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Women Luxury Party</a></h4>
                                                                    <span className="price">$1050.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 --> */}

                                                    </div>
                                                </div>
                                                {/* <!-- If we need navigation buttons --> */}
                                                <div className="center-slider-nav-buttons slider-buttons">
                                                    <div className="slider-button button-prev"><span className="material-icons">arrow_left</span></div>
                                                    <div className="slider-button button-next"><span className="material-icons">arrow_right</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Tab Content Single Item -->
                                <!-- Start Tab Content Single Item --> */}
                                <div className="tab-pane tab-animate" id="others" role="tabpanel">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="center-slider-nav product-slider-3grids-2rows">
                                                {/* <!-- Slider main container --> */}
                                                <div className="swiper-container">
                                                    {/* <!-- Additional required wrapper --> */}
                                                    <div className="swiper-wrapper">
                                                        {/* <!-- Slides -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-1.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">MEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Man's Outdoor Shirt</a></h4>
                                                                    <span className="price">$355.00 <del>$400.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-2.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Women Summer deal</a></h4>
                                                                    <span className="price">$550.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-3.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Women Luxury Party</a></h4>
                                                                    <span className="price">$1050.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-5.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-yellow">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Star Women pants</a></h4>
                                                                    <span className="price">$200.00 <del>$300.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-4.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Slightly jackets XL Cool </a></h4>
                                                                    <span className="price">$350.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-6.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">Bag</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Distracted XL bag</a></h4>
                                                                    <span className="price">$1200.00 <del>$1500.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 -->
                                                        <div className="product-single-item-style-1 swiper-slide"> */}
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-4.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Slightly jackets XL Cool </a></h4>
                                                                    <span className="price">$350.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-5.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-yellow">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Star Women pants</a></h4>
                                                                    <span className="price">$200.00 <del>$300.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-6.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">Bag</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Distracted XL bag</a></h4>
                                                                    <span className="price">$1200.00 <del>$1500.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-2.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Women Summer deal</a></h4>
                                                                    <span className="price">$550.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-1.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                                <ul className="tooltip-tag-items">
                                                                    <li className="color-green">15%</li>
                                                                </ul>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">MEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Man's Outdoor Shirt</a></h4>
                                                                    <span className="price">$355.00 <del>$400.00</del></span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 -->
                                                        <!-- Start Product Single Item - Style 1 --> */}
                                                        <div className="product-single-item-style-1 swiper-slide">
                                                            <a href="product-details-default.html" className="image img-responsive">
                                                                <img className="img-fluid" src="assets/images/products/default/product-default-style-1-img-3.webp" width="435" height="350" loading="lazy" alt="product-image"/>
                                                            </a>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <span className="catagory">WOMEN</span>
                                                                    <h4 className="title"><a href="product-details-default.html">Women Luxury Party</a></h4>
                                                                    <span className="price">$1050.00</span>
                                                                </div>
                                                                <div className="bottom">
                                                                    <ul className="review-star">
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star</span></li>
                                                                        <li className="fill"><span className="material-icons">star_half</span></li>
                                                                    </ul>
                                                                    <div className="product-event-items">
                                                                        <a href="cart.html" className="btn cart-btn">Add to cart</a>
                                                                        <a href="wishlist.html" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></a>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/* <!-- End Product Single Item - Style 1 --> */}
                                                    </div>
                                                </div>
                                                {/* <!-- If we need navigation buttons --> */}
                                                <div className="center-slider-nav-buttons slider-buttons">
                                                    <div className="slider-button button-prev"><span className="material-icons">arrow_left</span></div>
                                                    <div className="slider-button button-next"><span className="material-icons">arrow_right</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Tab Content Single Item --> */}
                            </div>
                            {/* <!-- End Tab Content Items --> */}

                            <div className="d-flex justify-content-center">
                                <a href="shop-grid-sidebar-left.html" className="btn btn-md btn-default btn-section-bottom">View All Product</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    // </div>

           
    )
}

export default ProductTabItemSection
