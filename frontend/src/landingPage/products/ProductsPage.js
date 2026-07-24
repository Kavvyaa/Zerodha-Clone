import React from "react";
import Hero from "../products/Hero";
import LeftSection from '../products/LeftSection';
import RightSection from '../products/RightSection';
import Universe from "../products/Universe";

function ProductsPage() {
    return ( 
        <div>
            <Hero />
            <LeftSection imageUrl={"Media/images/Kite.png"} productName={'Kite'} productDescription={'Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'} tryDemo={'Try Demo '} learnMore={'Learn More'} googlePlay={''} appStore={''}/>
            <RightSection imageUrl={"Media/images/console.png"} productName={'Console' } style={{marginTop:"150px"}} productDescription={'The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.'} margintop={'150px'}/>
            <LeftSection imageUrl={"Media/images/Coin.png"} productName={'Coin'} productDescription={'Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.'} tryDemo={'Try Demo '} learnMore={'Learn More'} googlePlay={''} appStore={''}/>
            <RightSection imageUrl={"Media/images/kiteconnect.png"} productName={'Kite Connect API'} productDescription={'TBuild powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.'} margintop={'10px'}/>
            <LeftSection imageUrl={"Media/images/varsity.png"} productName={'Versity Mobile'} productDescription={'An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.'} tryDemo={'Try Demo '} learnMore={'Learn More'} googlePlay={''} appStore={''} />
            <h3 className="fs-5 mt-5 mb-5 text-center">Want to know more about our technology stack? Check out the <a className="text-decoration-none" href="/">Zerodha.tech</a> blog.</h3>
            <Universe />
        </div>
     );
}

export default ProductsPage;