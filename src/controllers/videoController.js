// 한 파일에 여러개를 export  할 수가 있다.
export const trending =(req,res) => res.send("Home Page Videos");
export const watch = (req, res) => res.send("watch");
export const edit = (req,res) => res.send("Edit");
export const search = (req,res) => res.send("Search");
export const see = (req,res) =>
{
    console.log(req.params);
    console.log(req);
    res.send(`Watch Video #${req.params.id}`);
}
export const upload = (req,res) => res.send("see");
export const deleteVideo = (req,res) => res.send("see");

