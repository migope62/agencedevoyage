import React, { useState, useEffect } from 'react';
import './carrousel.css';

function Carousel() {
    const images = [
        "fassa.jpg",
        "venise1.jpg",
        "house.jpg",
        "castel.jpg",
        "venise.jpg"
    ];
    const legends = [
        "Fassa, Italie",
        "Venise, Italie",
        "Leece, Italie",
        "Cortina d'Ampezzo, Italie",
        "Venise, Italie"
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, );

    return (
        <div className="carousel-container">
            <div className="firstp">
                <p>
                    L'Italie est l'un des pays les plus merveilleux que j'ai eu la chance de visiter. Je me souviens de mon premier voyage en Italie il y a quelques années et j'en garde encore un souvenir très vif. Lorsque je suis arrivé, j'ai été immédiatement charmé par l'hospitalité des gens et leur amour pour la vie. Les villes italiennes sont baignées dans l'histoire et la culture, et vous pourrez y découvrir des trésors cachés à chaque coin de rue.
                </p>
            </div>
            <img src={images[currentImageIndex]} alt="slide" className="carousel-image" />
            <p className="image-legend">{legends[currentImageIndex]}</p>
            <div className="lastp">
                <p>
                    Rome, Milan, Naples, il y a tant de villes à découvrir dans ce magnifique pays. Chacune de ces villes offre une variété d'activités et de sites touristiques, ce qui en fait certainement l'une des destinations les plus intéressantes d'Europe. De la culture et de l'architecture à la cuisine et à la mode, vous trouverez tout ce dont vous avez besoin pour passer des vacances inoubliables.
                </p>
            </div>
            <div className="carousel-indicator-container">
                {images.map((image, index) => (
                    <div
                        key={image}
                     
                onClick={() => setCurrentImageIndex(index)}
></div>
))}
        </div>
</div >
);
}

export default Carousel;