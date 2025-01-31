const { default: axios } = require('axios')
const News = require('../model/newsSchema');

async function saveArticleToDB(article, category) {
    const filter = { publishedAt: article.publishedAt };
    const update = {
        $setOnInsert: {
            ...article,
            category: category
        }
    };
    const options = { upsert: true, new: true };

    try {
        const savedArticle = await News.findOneAndUpdate(filter, update, options);
        return savedArticle; // Return the saved article (optional, but good practice)
    } catch (error) {
        console.error(`Error saving article: ${article.title}`, error);
        throw error; // Re-throw the error to be handled by the caller
    }
}

async function makeApiRequest(url) {
    try {
        const response = await axios.get(url);
        return {
            status: 200,
            success: true,
            message: "Successfully fetched the data",
            data: response.data,
        };
    } catch (error) {
        console.error("API request error:", error.response ? error.response.data : error);
        return {
            status: 500,
            success: false,
            message: "Failed to fetch data from the API",
            error: error.response ? error.response.data : error.message,
        };
    }
}

exports.addNews = async (req, res) => {
    let categories = ["Business", "Entertainment", "Health", "Science", "Sports", "Technology", "General"]
    try {
        const savedArticles = []; // Array to store all saved articles (optional)

        for (const category of categories) {
            let url = `http://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${process.env.API_KEY}`;
            const result = await makeApiRequest(url);

            if (result.status === 200 && result.data.status === "ok") {
                const articles = result.data.articles;

                for (const article of articles) {
                    try {
                        const savedArticle = await saveArticleToDB(article, category);
                        savedArticles.push(savedArticle); // Add to the array (optional)
                    } catch (saveError) {
                        console.error(`Error saving article ${article.title} in ${category}:`, saveError);
                        // Consider whether to continue processing other articles/categories
                    }
                }
            } else {
                console.error(`Error fetching news for category: ${category}`, result);
            }
        }

        res.status(200).json({
            message: 'Successfully fetched and (potentially) saved data',
            // savedArticles: savedArticles // Optionally return the saved articles
        });
    } catch (error) {
        console.error("Overall error in addNews:", error);
        res.status(500).json({ message: 'Error fetching or saving data' });
    }
};

exports.getAllNews = async (req, res) => {
    try {
        const news = await News.find()
        res.status(200).json(news)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

exports.getCategoryNews = async (req, res) => {
    const { category } = req.params;

    try {
        const news = await News.find({ category: category });
        res.status(200).json(news);
    } catch (error) {
        console.error('Error fetching news by category:', error);
        res.status(500).json({ message: 'Error fetching news' });
    }
};

exports.getSourceNews = async (req, res) => {
    const { source } = req.params;

    try {
        const news = await News.find({ "source.name": source });
        res.status(200).json(news);
    } catch (error) {
        console.error('Error fetching news by source name:', error);
        res.status(500).json({ message: 'Error fetching news' });
    }
};

exports.getKeywordNews = async (req, res) => {
    const { keyword } = req.params;

    try {
        const news = await News.find({ $text: { $search: keyword } })
        res.status(200).json(news);
    } catch (error) {
        console.error('Error fetching news by source name:', error);
        res.status(500).json({ message: 'Error fetching news' });
    }
};