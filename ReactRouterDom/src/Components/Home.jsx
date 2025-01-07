import React from "react";
import "./Home.css"
import HomeCard from "./HomeCard";

const Home = () => {
const sem1=["I", "Phy", "EM I", "PPS", "SME", "BXE"]    
const sem2=["II", "Chem", "EM II", "BEE", "EG", "EM"]
const sem3=["III", "FDS", "OOP", "CG", "DM", "DELD"]
const sem4=["IV", "DSA", "EM III", "PPL", "Microprocessor", "SE"]
const sem5=["V", "SPOS", "HCI", "CNS", "TOC", "DBMS"]
const sem6=["VI", "AI", "DS", "WT", "SMA","Internship"]
const sem7=["VII", "DAA", "ML", "Blockchain", "EL I", "EL II"]
const sem8=["VII", "HPC", "DL", "EL I", "EL II", "Final Project"]



    return (
        <>
            <section id="home">
                <h1 id="heading">CE Subjects</h1>
                <div className="years">
                    <HomeCard data={sem1}/>
                    <HomeCard data={sem2}/>
                    <HomeCard data={sem3}/>
                    <HomeCard data={sem4}/>
                </div>
                <div className="years">
                    <HomeCard data={sem5}/>
                    <HomeCard data={sem6}/>
                    <HomeCard data={sem7}/>
                    <HomeCard data={sem8}/>
                </div>
            </section>
        </>
    )
}

export default Home