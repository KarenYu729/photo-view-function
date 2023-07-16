import "./CreatureStyle.css"
import ScrollToTop from "../components/ScrollToTop";
import creatureItems from "../data/creature_items.json"
import '../components/NatureItemsStyle.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from "react"; // You can also use <link> for styles
// ..
AOS.init();

export function Creature() {
    return (
        <div className={"Creature-class"}>
            <div className={"break"}>
                <div className={"welcome"}>
                </div>
            </div>
            <ScrollToTop/>

            <div data-aos={"fade-right"}
                 data-aos-easing={"ease-in-sine"}
                 data-aos-delay={"400"}
                 data-aos-duration={"2590"}
                 className={"animal"}>

            </div>

            <div data-aos={"zoom-in-up"}
                 data-aos-easing={"ease-in-back"}
                 data-aos-delay={"5"}
                 data-aos-duration={"1500"}
                 className={"butterfly"}>

            </div>

            <div data-aos={"fade-zoom-in"}
                 data-aos-easing={"ease-in-back"}
                 data-aos-delay={"5"}
                 data-aos-duration={"1500"}
                 className={"tree"}>

            </div>

            <div data-aos={"fade-left"}
                 data-aos-easing={"ease-in-sine"}
                 data-aos-delay={"400"}
                 data-aos-duration={"2590"}
                 className={"fish"}>

            </div>

            <div className={"small_img"}>
                {
                    creatureItems.map(item => {
                        if (item.id % 2 === 0) {
                            return (
                                <div key={item.id} className={"right-part"}
                                     data-aos={"fade-left"}
                                     data-aos-easing={"ease-in-sine"}
                                     data-aos-delay={"50"}
                                     data-aos-duration={"1000"}>
                                    <img src={item.imgUrl} alt={item.name}/>
                                </div>
                            )
                        } else {
                            return (
                                <div key={item.id} className={"left-part"}
                                     data-aos={"fade-right"}
                                     data-aos-easing={"ease-in-sine"}
                                     data-aos-delay={"50"}
                                     data-aos-duration={"1000"}>
                                    <img src={item.imgUrl} alt={item.name}/>
                                </div>
                            )
                        }

                    })
                }

            </div>

        </div>
    )
}