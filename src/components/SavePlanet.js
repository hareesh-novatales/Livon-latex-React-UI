import React from 'react'
import background from './../images/planet.jpg';
import './Header.css';
export default function SavePlanet() {
  return (
    <div  style={{ backgroundImage: `url(${background})` }}>
        <div className="container content">
        <h1>LET'S SAVE PLANET EARTH</h1>
        <p>Each rubber tree secretes about 15 grams of latex per day. A standard pure latex pillow needs the daily output of about 85 trees, spread over 0.4 acres (1650 sq. meters) of rubber plantation, providing a living to rubber tappers. Interestingly, these rubber trees accounts for the removal of 4.86 metric tons of Carbon Di Oxide from the environment in 1 year. This is the genuine contribution to the environment by the buyer of a Latex Pillow.</p>
        <span>Genuine Contribution to the environment :</span>
        <p>The raw material, Organic latex, is harvested from rubber plantations that are certified according to USDA-NOP (United States Department of Agriculture), EU (European Union) standards.Buy Natural Latex products and genuinely contribute to the environment by removing 4.86 metric tons of Carbon Di Oxide per year.</p>
        </div>
    </div>
  );
}
