const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {        
    
    // console.log(req.url.toString() )
    // res.setHeader("Content-Type", "text/html")
    // res.write("<h1>Hello World</h1>")
    // res.write("<p>I am MOANA</p>")
    // res.write("<p>lasagna</p>")
    // res.end()

  // console.log(req.url)
  //  res.setHeader("Content-Type", "text/html")
    let myUrl = './views/'
    if(req.url == '/'){
        myUrl += 'main.html'
        res.statusCode = 200
    }
    else if(req.url == '/views/about'){
        myUrl += 'about.html'
        res.statusCode = 200
    }
    else if(req.url == '/views/home'){
        myUrl += 'home.html'
        res.statusCode = 200
    }
    else if(req.url == '/views/game'){
        myUrl += 'uniquePage.html'
        res.statusCode = 200
    }
    else if(req.url == '/views/portfolio'){
        myUrl += 'portfolio.html'
        res.statusCode = 200
    }
    else{
        myUrl += 'error.html'
        res.statusCode = 404
    }

    fs.readFile(myUrl, (err, data) => {
        if(err){
            console.log('err')
        }
        else{
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log("listen")
})