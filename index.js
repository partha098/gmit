const exp=require("express");
const app=exp();

const ur=require("./routes/user");

app.get("/",(req,res)=>{
res.send("Hello Gmit")
});

app.use("/user",ur);

app.listen(2000);




