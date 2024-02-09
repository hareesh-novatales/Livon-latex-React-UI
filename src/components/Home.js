import React from 'react'
import './../App.css';
import './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import HeroImage from './HeroImage';
import Categories from './Categories';
import Benefits from './Benefits';
import Certifications from './Certifications';
import SavePlanet from './SavePlanet';
import Quiz from './Quiz';
import Footer from './Footer';
import MattressProductList from './MattressProductList';
import PillowProducts from './PillowProducts';
import TopperProducts from './TopperProducts';
import BeddingProducts from './BeddingProducts';
import KidsProducts from './KidsProducts';
export default function Home() {
  return (
    <div>
          
            <HeroImage />
            <Categories />
            <Benefits />
            <MattressProductList />
            <PillowProducts />
            <TopperProducts />
            <BeddingProducts />
            <KidsProducts />
            <Certifications />
            <SavePlanet />
            <Quiz />

    </div>
  )
}
