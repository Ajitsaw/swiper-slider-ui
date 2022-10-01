import "./App.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";

function App() {
    return (
        <div className="App">
            <div className="swiper__slider">
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    pagination={{
                        el: ".bullets",
                        bulletActiveClass: "active",
                        bulletClass: "slide",
                        modifierClass: "",
                        clickable: true,
                    }}
                    speed={1500}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView="auto"
                >
                    <SwiperSlide>
                        <div className="single">
                            <div className="image">
                                <img
                                    src="https://via.placeholder.com/1920x1000"
                                    alt="Banner"
                                />
                            </div>
                            <h2>This is a heading</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="single">
                            <div className="image">
                                <img
                                    src="https://via.placeholder.com/1920x1000"
                                    alt="Banner"
                                />
                            </div>
                            <h2>This is a heading</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="single">
                            <div className="image">
                                <img
                                    src="https://via.placeholder.com/1920x1000"
                                    alt="Banner"
                                />
                            </div>
                            <h2>This is a heading</h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="bullets"></div>
            </div>
        </div>
    );
}

export default App;
