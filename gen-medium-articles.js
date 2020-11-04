const axios = require("axios")
const moment = require("moment")
const parse = require("node-html-parser")
const fs = require('fs');


const getArticle = async (index, username) => {

    const rssUrl =  new String("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@").concat(username);
    const {
        data: { items },
    } = await axios.get(rssUrl);

    let articles = []
    items.forEach( item => {
        let root = parse.parse(item.description).querySelectorAll(".medium-feed-snippet")
        if (root.length > 0) {
            let text = root[0].childNodes[0].text
            item.description = text
            articles.push(item)
        }
    })
    return articles
};

getArticle(0, "sherifabdlnaby").then(
    data => {
        let json = JSON.stringify(data);
        fs.writeFileSync('./src/medium-articles.json', json);
    }
)