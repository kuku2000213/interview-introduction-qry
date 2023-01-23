const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise')

/* GET users listing. */

const connection = mysql.createPool({
    host: 'localhost',
    port: '43308',
    database: 'db_name',
    user: 'root',
    password: 'rootpassword'
})

router.get("/:userId", async (req, res) => {

    let query = `select 
                    introduction_uuid as introductionId,
                    company_name as companyName,
                    introduction_content as content,
                    user_uuid as userId
                    from introduction 
                    where user_uuid = ? 
                    limit 1`

    let introduction = await connection.execute(query, [req.params.userId])

    res.json({
        statusCode: 200,
        responseMessage: "회사소개가 정상적으로 조회되었습니다.",
        data: introduction[0][0]
    })
})



module.exports = router;