import './NatureStyle.css'
import NatureItemsComponent from "../components/NatureItems.component";
import 'animate.css';
import React, { useState, useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();




export function Nature() {

    return (
        <div className={"Nature-class"}>
            <div className={"break"}>
                <div className={"welcome"}>
                </div>
            </div>

            <ScrollToTop />

            <div data-aos={"fade-right"}
                 data-aos-easing={"ease-in-sine"}
                 data-aos-delay={"400"}
                 data-aos-duration={"2590"}
                 className={"mountain"}>

            </div>

            <div data-aos={"zoom-in-up"}
                 data-aos-easing={"ease-in-back"}
                 data-aos-delay={"5"}
                 data-aos-duration={"1500"}
                 className={"river"}>

            </div>

            <div data-aos={"fade-zoom-in"}
                 data-aos-easing={"ease-in-back"}
                 data-aos-delay={"5"}
                 data-aos-duration={"1500"}
                 className={"lake"}>

            </div>

            <div data-aos={"fade-left"}
                 data-aos-easing={"ease-in-sine"}
                 data-aos-delay={"400"}
                 data-aos-duration={"2590"}
                 className={"sea"}>

            </div>

            <NatureItemsComponent/>

        </div>
    )
}