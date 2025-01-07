import React from "react";
import './Explore.css'

const Explore = () => {
    return (
        <>
            <section id="explore">
                <div className="bookRow">
                    <div className="book">
                        <img src="os.webp" alt="Operating Systems" />
                        <h3>Subject: Operating Systems</h3>
                        <h3>Price: 350 Rs</h3>
                    </div>
                    <div className="book">
                        <img src="ml.jpg" alt="Machine Learning" />
                        <h3>Subject: Machine Learning</h3>
                        <h3>Price: 450 Rs</h3>
                    </div>
                    <div className="book">
                        <img src="dc.jpg" alt="Data Communication" />
                        <h3>Subject: Data Communication</h3>
                        <h3>Price: 300 Rs</h3>
                    </div>
                </div>

                <div className="bookRow">
                    <div className="book">
                        <img src="dl.jpg" alt="Deep Learning" />
                        <h3>Subject: Deep Learning</h3>
                        <h3>Price: 650 Rs</h3>
                    </div>
                    <div className="book">
                        <img src="dsa.jpg" alt="Data Structures" />
                        <h3>Subject: Data Structures</h3>
                        <h3>Price: 400 Rs</h3>
                    </div>
                    <div className="book">
                        <img src="db.jpg" alt="Database Concepts" />
                        <h3>Subject: Database Concepts</h3>
                        <h3>Price: 700 Rs</h3>
                    </div>
                </div>

                <div className="bookRow">
                    <div className="book">
                        <img src="wt.jpg" alt="Web Technology" />
                        <h3>Subject: Web Technology</h3>
                        <h3>Price: 550 Rs</h3>
                    </div>
                    <div className="book">
                        <img src="cc.jpg" alt="Cloud Computing" />
                        <h3>Subject: Cloud Computing</h3>
                        <h3>Price: 500 Rs</h3>
                    </div>
                    <div className="book">
                        <img src="ai.jpg" alt="Artificial Intelligence" />
                        <h3>Subject: Artificial Intelligence</h3>
                        <h3>Price: 600 Rs</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Explore