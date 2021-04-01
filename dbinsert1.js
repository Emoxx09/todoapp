const pool = require("./db");

const sql = 'INSERT INTO public.todo(todo_desc) VALUES ($1) RETURNING *';
const data = ['gaming'];

pool.query(sql, data, (err, res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});
pool.end();