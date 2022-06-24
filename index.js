const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send(`
    <html>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Discord Video Embedder</title>
        <meta charset="UTF-8" />
        <meta name="description" content="" />
    </head>
    <body style="background-color:#181a1b;">
    <h1 style="color:#d8d4cf">Discord Video Embedder</h1>
    <p style="color:#d8d4cf">Lets you watch a discord video in the browser instead of downloading it by default <br>
    Simply paste the link to a discord video at the end of the url (after the /, if there is none add one).
    </p>
    <p style="color:#d8d4cf">Like this: <a style="color:#3391ff" href="https://dc.noury.ee/https://cdn.discordapp.com/attachments/381520882608373761/989666371178754068/denkcats_1639474686233272.mp4">https://dc.noury.ee/https://cdn.discordapp.com/attachments/381520882608373761/989666371178754068/denkcats_1639474686233272.mp4</a></p>
    <p style="color:#d8d4cf"><sup>this is beautiful web design shut up</sup></p>
    </body>
    </html>
    `)
})

app.get('/*', function (req, res) {
    var url = req.params[0];
  
    res.send(`
    <html>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Discord Video Embedder</title>
        <meta charset="UTF-8" />
        <meta name="description" content="" />
    </head>
    <body style="background-color:#181a1b;">
    <p>
    <video
        controls
        autoplay
        width="500px"
        src="${url}"
    />
    </p>
    <p style="color:#d8d4cf">Original: <a style="color:#3391ff" href="${url}">${url}</a></p>
    </body>
    </html>
    `)
})
app.listen(7532)