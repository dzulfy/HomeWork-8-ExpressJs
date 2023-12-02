const pool = require("./config");
const express = require("express");
const router = express.Router();

//Menampilkan data seluruh list film
router.get("/film", (req, res) => {
  const query = `SELECT * FROM film`;
  pool.query(query, (err, result) => {
    if (err) throw err;

    res.status(200).json(result.rows);
  });
});

//Menampilkan list film berdasarkan id
router.get("/film/:id", (req, res) => {
  const { id } = req.params;

  const query = `SELECT * FROM film WHERE film_id = ${id}`;
  pool.query(query, (err, result) => {
    if (err) throw err;

    res.status(200).json(result.rows[0]);
  });
});

//Menampilkan list category
router.get("/category", (req, res) => {
  const query = `SELECT * FROM category`;
  pool.query(query, (err, result) => {
    if (err) throw err;

    res.status(200).json(result.rows);
  });
});

//Menampilkan list film berdasarkan category
router.get("/category/film/:id", (req, res) => {
  const { id } = req.params;

  const query = `
        SELECT f.*
        FROM film f
        JOIN film_category fc ON f.film_id = fc.film_id
        JOIN category c ON fc.category_id = c.category_id
        WHERE c.category_id = $1    
    `;

  pool.query(query, [id], (err, result) => {
    if (err) throw err;

    res.status(200).json(result.rows);
  });
});

module.exports = router;
