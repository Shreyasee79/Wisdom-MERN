import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';
import "./DisplayNews.css"

const Source = () => {
    const { source } = useParams();
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalNews, setTotalNews] = useState(0);
    const newsPerPage = 12;
    const newsContainerRef = useRef(null);

    useEffect(() => {
        const fetchSourceNews = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/api/source-name/${source}`);
                setNews(res.data);
                setTotalNews(res.data.length);
            } catch (error) {
                console.error("Error fetching source news:", error);
                setNews([]);
            }
        };

        fetchSourceNews();
    }, [source]);

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        if (newsContainerRef.current) {
            newsContainerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const totalPages = Math.ceil(totalNews / newsPerPage);

    return (
        <div className="bg-col">
            <h1 className='givingInfo'>News from {source}</h1>
            {news.length === 0 ?
                (
                    <p>No news found from this source.</p>
                ) :
                (
                    <div>
                        <div className="pagination top">
                            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                                Previous
                            </button>
                            <span>{currentPage} of {totalPages}</span>
                            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                                Next
                            </button>
                        </div>

                        <div className="news-container" ref={newsContainerRef}>
                            {currentNews.length > 0 ? (
                                <Card data={currentNews} />
                            ) : (
                                <p>Loading news...</p>
                            )}
                        </div>

                        <div className="pagination bottom">
                            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                                Previous
                            </button>
                            <span>{currentPage} of {totalPages}</span>
                            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                                Next
                            </button>
                        </div>
                        <p className="totalNews">Total News Fetched: {totalNews}</p>
                    </div>
                )}
        </div>
    );
};

export default Source;