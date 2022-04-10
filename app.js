const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello, World! Express')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const { MongoClient, ServerApiVersion } = require('mongodb');
const { User } = require('./user')
const uri = "mongodb+srv://<gdwb3219>:<Q8zryaIw9aGvRUjU>@cluster0.nyr9e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  console.log("TESTing")
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.post('/api/users/register', (req, res) => {
    // post 요청을 처리해 응답을 주는 함수가 들어올 위치.
    
    // 회원가입할 때 필요한 정보들을 client에서 가져오면
    const user = new User(req.body);
    // 비밀번호를 암호화하여
    user.encryptPassword((err) => {
      // 그 것들을 데이터베이스에 넣어준다.
      user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err });
        // 회원가입이 성공했다는 응답을 준다.
        return res.status(200).json({
          success: true
        })
      })
    })
})