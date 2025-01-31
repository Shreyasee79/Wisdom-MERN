
import React, { useEffect, useRef, useState } from 'react';
import './Search.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./DisplayNews.css"
import Card from './Card';

function Search() {
    const { keyword } = useParams();
    const [news, setNews] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalNews, setTotalNews] = useState(0);
    const newsPerPage = 12;
    const newsContainerRef = useRef(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/api/search/${keyword}`);
                setNews(res.data);
                setTotalNews(res.data.length);
                setSearchPerformed(true);
            } catch (error) {
                console.error('Error fetching news:', error);
                setNews([]);
                setSearchPerformed(true);
                alert("Error fetching news. Please try again later.");
            }
        };

        if (keyword) fetchNews();
    }, [keyword]);

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
        <>
            <div className="bg-col">
                <h1 className='givingInfo'>Searching for : {keyword}</h1>
                {searchPerformed && news.length === 0 ? ( // Conditionally render "no news" message
                    <p>No news found for "{keyword}"</p>
                )
                    :
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
        </>
    );
}

export default Search;
