import { Card } from "@mui/material";
import React from "react";

const Transaction = ({ transaction }) => {
  let transactionData = transaction.transactions;

  const renderItem = () => {
    if (transaction.length == 0) {
      return <>Loading</>
    } else {

      {
        transactionData.map((item) => (
          <div>
            <div>{item.authorized_date}</div>
            <div className="user">{item.amount}</div>
            <div className="user">{item.category}</div>
          </div>
        ))
      }


    }
  }
  return (
    <Card>
      {(transaction.length == 0)
        ? <h1>Loading</h1>
        : (
          transactionData.map((item) => (
            <div>
              <div>{item.authorized_date}</div>
              <div className="user">{item.amount}</div>
              <div className="user">{item.category}</div>
            </div>
          ))

        )
      }
    </Card>
  );
};

export default Transaction;
