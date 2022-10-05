const express = require('express')
const app = express()
const port = process.env.PORT || 3000
var cors = require('cors')
app.use(cors())
app.get('/', (req, res)=>{
    res.send(
      {
        "command":[
            "docker build -t [name] .",
            "docker run -p [myport]:[dockerport] [name]",
            "docker container stop [name/id container]",
            "docker ps / docker ps -a"
          ]
      }
    )
})

app.listen(port,()=>{
    console.log(`app is running at port ${port}`);
})