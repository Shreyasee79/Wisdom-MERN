import React, { useState } from 'react';
import './Card.css'; 

const Card = ({ data }) => {
    return (
        <div className="card-grid">
            {data.map((item) => {
                let localDate = ""; // Initialize localDate
                if (item.publishedAt) { // Check if publishedAt exists
                    try {
                        const date = new Date(item.publishedAt);
                        localDate = date.toLocaleString(); // Convert to local time

                    } catch (error) {
                        console.error("Error parsing date:", error);
                        localDate = "Invalid Date"; // Handle parsing errors
                    }
                } else {
                  localDate = "Date not available"
                }

                return (
                    <div className="card" key={item._id}>
                        {item.urlToImage && (
                            <img src={item.urlToImage} alt={item.title} className="card-image" />
                        )}

                        <div className="card-content">
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-description">
                                {item?.author} - {localDate} {/* Display localDate */}
                            </p>
                            <p className="card-description">{item.description}</p>
                            <p className="card-source">{item.source?.name}</p>
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="card-link">
                                Read More
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;