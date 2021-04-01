const pool = require("./db");

const sql = 'UPDATE public.todo SET todo_desc = $1 WHERE todo_id = 4 RETURNING *';
const data = ['cleaning'];

pool.query(sql, data, (err, res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }
});
pool.end();