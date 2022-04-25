const express = require("express");
const app = express();

const request = require("request")

const mongoose = require("mongoose");

//跨域
app.use(require('cors')());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/element-admin", {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
});

const Article = mongoose.model("Article", new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
}))


app.get("/", async (req, res) => {
    res.send("index");
});

//create article
app.post("/api/articles", async (req, res) => {
    const article = await Article.create(req.body)
    res.send(article)
})
//list
app.get("/api/articles", async (req, res) => {
    const article = await Article.find();
    res.send(article);
})
//delete
app.delete("/api/article/:id", async (req, res) => {
    await Article.findByIdAndDelete(req.params.id);
    res.send({
        status: true
    });
});
//detail
app.get("/api/article/:id", async (req, res) => {
    const article = await Article.findById(req.params.id);
    console.log(article);
    res.send(article);

})
//改
app.put("/api/article/:id", async (req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body)
    res.send(article)
});

// 测试  参考链接：https://blog.csdn.net/wys997/article/details/110086328
app.get("/api/test", async (req, res) => {
    await request('http://localhost:9800/test', function (err, resp, body) {
        var result = ""
        if (!err && resp.statusCode == 200) {
            result = JSON.parse(body);
        }
        res.send(result)
    })
});

app.post("/api/test2", async (req, res) => {
    // console.log(req.params, req.body)
    await request.post({
        url: 'http://localhost:9800/test2',
        body: JSON.stringify(req.body)
    }, function (err, resp, body) {
        var result = ""
        if (!err && resp.statusCode == 200) {
            result = JSON.parse(body);
        }
        res.send(result)
    })
})


app.listen(3001, () => {
    console.log("http://localhost:3001");
});