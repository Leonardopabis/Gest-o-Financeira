const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: `${process.env.SQL_PASSWORD}`,
    database: 'transaction'
})

app.get('/api/get-transactions', (req, res) => {
    connection.query(
        'SELECT * FROM transaction',
        (err, results) => {
            if (err) throw err;
            res.json(results)
        }
    )
})

app.post('/api/add-new-transaction', (req, res) => {
    const {
        descricao,
        categoria,
        tipo,
        valor,
        data
    } = req.body

    const sql = `
        insert into \`transaction\`
        (descricao, categoria, tipo, valor, data)
        values (?,?,?,?,?)
    `

    connection.query(
        sql, [descricao, categoria, tipo, valor, data],
        (erro, resultado) => {
            if (erro) {
                console.error(erro)

                return res.status(500).json({
                    erro: 'Erro ao criar transação'
                })
            }

            res.status(201).json({
                mensagem: 'Nova transação criada com sucesso',
                id: resultado.insertId
            })
        }
    )

})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})