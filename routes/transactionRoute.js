const express = require("express");
const {
  addTransaction,
  getAllTransactions,
  editTransaction,
  deleteTransaction
} = require("../controllers/transactionController");

//router obj
const router = express.Router();

//routes
//add transaction POST method
router.post("/add-transactions", addTransaction);

//edit transaction POST method
router.post("/edit-transactions", editTransaction);

//Delete transaction POST method
router.post("/delete-transactions", deleteTransaction);

//get transactions
router.post("/get-transaction", getAllTransactions);

module.exports = router;
