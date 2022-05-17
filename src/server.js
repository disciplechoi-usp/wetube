import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
const app = express();
const PORT = 4000;


// 서버에게 get request 로 요청이 왔을 때 어떻게 반응해야하는 지 트레이닝을 시킴
// reuqest는 받은 상태지만 응답을 하지 않아 브라우저에서 무한 로딩중임.
//app.get("/", () => console.log("somebody is trying to go home.")); 

//이와 같은 핸들러or 컨트롤러가 미들웨어가 될 수 있다. => 다음에 실행할 함수가 있을 경우에만
// 리퀘스트에 응답을 하지 않는다.
// const logger =(req,res,next)=>{

//     console.log(`${req.method} ${req.url}`);
//     next();
// }

// const privateMiddleware = (req,res,next)=>{         
//     const url = req.url;
//     if(url ==="/protected"){
//         return res.send("<h1>Not allowed</h1>"); //미들웨어가 잘못된 경로에서 리퀘스트를 끊어버림
//     }
//     console.log("You may allowed");
//     next();
// }

// const handleHome = (req,res)=> {
//     //return res.end(); // request를 받은 거에 대해 response를 했다는 의미(request를 종료해버리는 응답?)
//     return res.end();
// }

const handleLogin = (req,res) =>{
    return res.send({message : "Login here"});
} 

// const handleProtected = (req,res)=>{
//     return res.send("Welcome to the private lounge");

// }

const loggerMiddleware = morgan("dev");
//global router 만들기


//app.use(logger); //모든 라우트에서 이 미들웨어를 글로벌로 이용하게 됨. 함수를 반드시 get앞에 선언하는 것이 중요하다.(즉, 서버가 응답을 하기 전)
app.use("/",globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);






//app.use(privateMiddleware);
// app.get("/", handleHome);
// app.get("/login", handleLogin);
//app.get("/login", logger, handleLogin);
//app.get("/protected", logger, handleProtected);

const handleListening = () => console.log(`server listening on port ${PORT}`);

app.listen(PORT, handleListening);


// Get "저 페이지 갖다줘라고 브라우저에서 웹 서버에 요청하는 것" => get request가 된다고 함.
// request 유저가 뭔가를 요청하거나 보내거나 네게 무슨 행동을 하는 경우, 브라우저가 페이지를 요청하는 경우
// localhost:4000 를 치고 들어가면
// 웹 브라우저에서 get 방식을 통해 웹서버로 request를 보내고 페이지를 요청하는 상태가 됨.