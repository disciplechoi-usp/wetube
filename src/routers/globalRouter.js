import express from 'express';
import {join} from '../controllers/userController';
import {trending} from '../controllers/videoController';

// 이 곳에서도 다시 import를 해주어야 하는 이유는 모든 파일은 하나의 독립적인 모듈이기 떄문이다.
// 다른 파일에서 이 파일을 임포트 하고 싶다면 이 곳에서 export를 해주어야한다. 왜냐하면 이공간은 private 공간이기 때문이다.  
const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;
//다른 곳에서 이 파일을 임포트 할 경우
// const globalRouter = express.Router(); 이부분만 임포트 된다고 함.