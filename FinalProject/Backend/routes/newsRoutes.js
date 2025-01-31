const express = require('express')
const { getAllNews, addNews, getCategoryNews, getSourceNews, getKeywordNews } = require('../controllers/newsControllers')


const router = express.Router()

router.get('/', getAllNews)

router.get('/category-news/:category', getCategoryNews)

router.get('/source-name/:source', getSourceNews)

router.get('/search/:keyword', getKeywordNews)

router.post('/', addNews)

module.exports = router