import React from "react";
import "./Home.css"
import HomeCard from "./HomeCard";

const Home = () => {
    return (
        <>
            <section id="home">
                <div className="years">
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                </div>
                <div className="years">
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                </div>
            </section>
        </>
    )
}

export default Home