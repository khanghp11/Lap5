import React from "react";
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import News from "../components/News";

export default function Home() {
    return (
        <React.Fragment>
            <Header/>
            <Carousel/>
            <News/>       
        </React.Fragment>        
    );
}