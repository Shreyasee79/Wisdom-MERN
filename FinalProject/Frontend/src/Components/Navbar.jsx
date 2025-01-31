import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import axios from "axios";

const Navbar = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');
    const categories = ["Business", "Entertainment", "Health", "Science", "Sports", "Technology", "General"];
    const sources = ["CNN", "GameSpot", "NASA", "Space.com", "The Verge", "The Washington Post", "Deadline"]; // Replace with actual sources

    const handleSearch = (e) => {
        e.preventDefault();
        if (keyword.trim() !== "") {
            navigate(`/search/${keyword}`);
            //setKeyword(''); // Clear input after search
            setKeyword(keyword);
        } else {
            alert("Please enter a keyword to search.");
        }
    };

    const sendData = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/'); // Correct URL
            alert('News data fetched and processed (may not have all saved due to errors)');
        } catch (error) {
            console.error("Error posting data:", error);
            alert('Error fetching news data. Check the console for details.');
        }
    };

    return (
        <nav>
            <div className="logo">
                <img src="logo.png" alt="SK" />
                News
            </div>
            <ul>
                <button onClick={sendData}>Get Latest News</button>

                <Link to={'/'}><li>All News</li></Link>

                <li className="dropdown">
                    <Link to="#">Category   <IoIosArrowDropdownCircle style={{ verticalAlign: "bottom" }} /></Link>
                    <div className="dropdown-content">
                        {categories.map(category => (
                            <Link key={category} to={`/category-news/${category}`} onClick={() => { }}>{category}</Link>
                        ))}
                    </div>
                </li>

                <li className="dropdown">
                    <Link to="#">Source   <IoIosArrowDropdownCircle style={{ verticalAlign: "bottom" }} /></Link>
                    <div className="dropdown-content">
                        {sources.map(source => (
                            <Link key={source} to={`/source-name/${source}`} onClick={() => { }}>{source}</Link>
                        ))}
                    </div>
                </li>

                <li>
                    <form onSubmit={handleSearch} className='search-bar'>
                        <input
                            type="text"
                            name='search'
                            className="search-box"
                            placeholder='Search News'
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <button type='submit'>Search</button>
                    </form>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
