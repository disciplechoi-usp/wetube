

// 한 파일에 여러개를 export  할 수가 있다.
export const trending =(req,res) => res.send("Home Page Videos");
export const watch = (req, res) => res.send("watch");
export const edit = (req,res) => res.send("Edit");
