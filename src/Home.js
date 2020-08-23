import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
        className="home__image"
      />

      {/* products */}
      <div className="home__row">
        <Product
          id="12321341"
          title="Watch"
          price={11.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="76875765"
          title="Alexa"
          price={11.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
      </div>
      <div className="home__row">
        <Product
          id="2534645876"
          title="Spalding Basketball"
          price={11.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61VUIw7FyhL._AC_.jpg"
        />
        <Product
          id="076757776"
          title="Shoes"
          price={11.99}
          rating={5}
          image="https://m.media-amazon.com/images/G/01/2020/shoes/SHOES-OXFORD-LOAFERS-SHOES-COMFORT-SHOES-AUGUST-TRIPTYCH-500X500.jpg"
        />
        <Product
          id="658975676"
          title="Pants"
          price={11.99}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/0071/5633/4681/products/Men_Original-Mountain-Pant_Relaxed-Fit_Terra_272_grande.jpg?v=1592842211"
        />
      </div>
      <div className="home__row">
        <Product
          id="456787543"
          title="Hydro Flask"
          price={11.99}
          rating={5}
          image="https://www.hydroflask.com/media/catalog/product/cache/9177cfe059281270017bc29637323e6d/2/1/21-oz-standard-mouth-flex-cap-pacific_1.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
