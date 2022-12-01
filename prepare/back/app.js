const express = require('express');
const app = express();
const port = 3000;
// index.js in router
const indexRouter = require('./routes');
// schemas
const connect = require('./schemas');
connect();

// 클라이언트로 부터 받은 http 요청 메시지 형식에서 body데이터를 해석하기 위함
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(port, 'port start!!');
});
