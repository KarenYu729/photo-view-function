import natureItems from "../data/nature_items.json"
import './NatureItemsStyle.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const NatureItemsComponent = () => {
    // const {name, id, imgUrl} = props.Item;
    return (
        <div className={"small_img"}>
            {
                natureItems.map(item => {
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
    )
}

export default NatureItemsComponent;