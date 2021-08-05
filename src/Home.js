import React from "react";
import "./Home.css";
import Product from "./Product";
import amazonWallpaper from "./HomePage/img/amazon-wallpaper.jpg";
import amazonProduct from "./HomePage/img/amazon-product-1.jpg";
import amazonProduct2 from "./HomePage/img/amazon-product-2.jpg";
import amazonProduct3 from "./HomePage/img/amazon-product-3.jpg";
import amazonProduct4 from "./HomePage/img/amazon-product-4.jpg";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img className="home__image" src={amazonWallpaper} alt="" />
				<div className="home__row">
					<Product
						title="Amazon Basics - Paquete de 48 pilas alcalinas AA de alto rendimiento, 
                            vida útil de 10 años, paquete de valor fácil de abrir por Amazon Basics"
						price={290.99}
						image={amazonProduct}
						rating={5}
					/>
					<Product
						title="Auriculares Apple iPhone con conector de iluminación para iPhone 7/7 Plus- color blanco"
						price={200.99}
						image={amazonProduct2}
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						title="Wyze Cam v3 con visión nocturna a color, con cable 1080p HD cámara de vídeo interior/exterior, 
                        audio de 2 vías, funciona con Alexa, Google Assistant e IFTTT"
						price={500.25}
						image={amazonProduct3}
						rating={5}
					/>
					<Product
						title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
						price={500.25}
						image={amazonProduct4}
						rating={5}
					/>
					<Product
						title="Wyze Cam v3 con visión nocturna a color, con cable 1080p HD cámara de vídeo interior/exterior, 
                        audio de 2 vías, funciona con Alexa, Google Assistant e IFTTT"
						price={500.25}
						image={amazonProduct}
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						title="Wyze Cam v3 con visión nocturna a color, con cable 1080p HD cámara de vídeo interior/exterior, 
                        audio de 2 vías, funciona con Alexa, Google Assistant e IFTTT"
						price={500.25}
						image={amazonProduct}
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
