import React from "react";
import "./About.css"

const About = () => {
    const data1=["Why choose us?", "We believe Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non, officia sequi corporis ratione iusto reiciendis suscipit? Expedita nobis nam exercitationem? Rem incidunt cum quibusdam praesentium? Ipsum eum quas sunt."]
    const data2=["Benefits Offered By Us!", "We are a reputed organization. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."]
    const data3=["Our Culture!", "Our organization Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non, officia sequi corporis ratione iusto reiciendis suscipit? Expedita nobis nam exercitationem? Rem incidunt cum quibusdam praesentium? Ipsum eum quas sunt."]

    return (
        <>
            <section id="about">
                <div>
                    <h2>Why choose us?</h2>
                    <p>
                        We believe Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non, officia sequi
                        corporis
                        ratione iusto reiciendis suscipit? Expedita nobis nam exercitationem? Rem incidunt cum quibusdam
                        praesentium?
                        Ipsum eum quas sunt.
                    </p>
                </div>

                <div>
                    <h2>Benefits Offered By Us!</h2>
                    <ul>
                        <li>We are a reputed organization.</li>
                        <li>Connect with people of similar passions!</li>
                        <li>We offer variety of design templates.</li>
                        <li>Earn money by charging for exclusive services or by advertisements.</li>
                    </ul>
                </div>

                <div>
                    <h2>Our Culture!</h2>
                    <p>
                        Our organization Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non, officia sequi corporis ratione iusto reiciendis suscipit? Expedita nobis nam exercitationem? Rem incidunt cum quibusdam praesentium? Ipsum eum quas sunt.
                    </p>
                </div>
            </section>
        </>
    )
}

export default About