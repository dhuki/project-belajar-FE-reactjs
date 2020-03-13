import React, { useState, useEffect } from 'react';
import Header from '../../component/header/Header';
import CarouselResponsive from '../../component/carousel/CarouselResponsive'
import Feature from '../../component/feature/Feature'
import Submenu from '../../component/submenu/Submenu'
import Card from '../../component/card/Card'
import Footer from '../../component/footer/Footer' 
import './Home.css'
import CardFile from "../../data/cardFile"
import ButtonBase from "../../component/button/ButtonBase"

const Home = () => {

    //const [count, setCount] = useState(0)

    // useEffect(() => {
    //     console.log("component mount", count)

    //     return () => {
    //         console.log("component unmounted")
    //     }
    // });

    // if (count === 5) {
    //     return(
    //         <div className="Home">
    //             The number is ${count}
    //             <div className="belajar-lifecsycle-react">
    //                 <button onClick={() => setCount(count)}> count me {count}</button>
    //             </div>
    //         </div>
    //     )
    // } else {
    return(
        <div className="Home">
            <Header mark="1"></Header>
            <CarouselResponsive></CarouselResponsive>
            <Feature></Feature>
            <div className="content">
                <Submenu></Submenu>
                <Card cardFile={CardFile}></Card>
            </div>
            <div className="button-more-products text-center mt-5">
                <ButtonBase name="Find More Products"></ButtonBase>
            </div>
            <hr></hr>
            <div className="footer">
                <Footer></Footer>
            </div>
        </div>
    )
    //}
}

export default Home;