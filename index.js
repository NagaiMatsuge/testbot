const axios = require('axios')
const express = require('express')

const app = express()
const SEND_MESSAGE_URI = 'https://api.telegram.org/bot5718555977:AAFhJriUx_6IaSHUm1ppqarUYJBbOUAspQg/sendMessage'

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/new-message', async (req, res) => {
    const {message} = req.body
    const messageText = message?.text?.toLowerCase()?.trim()
    const chatId = message?.chat?.id
    if (!messageText || !chatId) {
        return res.sendStatus(400)
    }

    console.log(messageText)
    if (messageText === 'hi') {
        await axios.post(SEND_MESSAGE_URI, {
            chat_id: chatId,
            text: 'hello'
        })

        res.send('Done')
    } else {
        await axios.post(SEND_MESSAGE_URI, {
            chat_id: chatId,
            text: messageText
        })

        res.send('Done')
    }
})

app.listen(3000, () => {
    console.log(`Server running on port ${3000}`)
})