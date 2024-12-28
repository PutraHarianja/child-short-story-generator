const express = require('express')
const router = express.Router()
const genAI = require('../config/googleAI')

router.post('/generate', async (req, res) => {
    const { prompt } = req.body

    const finalPrompt = `Write a short story for children, ${prompt}. Please return the story using HTML tags for headings and paragraphs, but exclude the <!DOCTYPE>, <html>, <head>, and <body> tags and also exclude this (\```html). The output should be formatted so that it can be directly inserted into a <span v-html="response"></span> element on the client side so the tag it used should be only <h1> and <p>`

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
        const result = await model.generateContent(finalPrompt)
        res.json({
            response: result.response.text()
        })
    } catch (error) {
        res.status(500).json({ error: `Error generating content cause: ${error}` })
    }
})

module.exports = router