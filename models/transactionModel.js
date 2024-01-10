const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userid:{
      type:String,
      required:true,
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    type:{
      type:String,
      required:[true, "Type is necessary"]
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    description: {
      type: String,
      required: [true, "Description required"],
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transactions", transactionSchema);
module.exports = transactionModel;
