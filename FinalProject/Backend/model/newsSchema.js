const mongoose = require('mongoose')
const { type } = require('os')

const newsSchema = mongoose.Schema({
    source: {
        id: { type: String, required: true },
        name: { type: String, required: true },
    },
    author: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    urlToImage: { type: String, required: true },
    publishedAt: { type: String, required: true },
    content: { type: String, required: true }
})

const News = mongoose.model('News', newsSchema)

module.exports = News
