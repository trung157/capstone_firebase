import React, { useEffect, useState } from "react";
import { auth, dbstore } from "../../Firebase/firebase"
import { HeaderTable, TheaderCustomer } from "../../common/table/cleanTable";
import { Fragment } from "react";

export const HistoryBuy = () => {
  const [state, setstate] = useState({ Buyer: [] });
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const fdata = [];
        dbstore.collection("Buyer-info")
          .where("BuyerId", "==", user.uid)
          .onSnapshot((res) => {
            res.docChanges().forEach((change) => {
              const doc = { ...change.doc.data(), id: change.doc.id };
              console.log(doc);
              switch (change.type) {
                case "added":
                  fdata.push(doc);
                  break;
                case "modified":
                  const i = fdata.findIndex((i) => i.id === doc.id);
                  fdata[i] = doc;
                  break;
                case "removed":
                  fdata = fdata.filter((i) => i.id !== doc.id);
                  break;
                default:
                  break;
              }
            });
            setstate((s) => ({ ...s, Buyer: fdata }));
          });
      }
    });
  }, []);

  const renderHeader = () => {
    return (
      <thead className="thead-dark">
        <HeaderTable header={TheaderCustomer} />
      </thead>
    );
  };

  const renderBody = () => {
    return (
      <tbody>
        {state.Buyer.map((items, index) => (
          <Fragment>
            <tr key={items.BuyerId + index + "buyer"}>
              <td>{items.BuyerPayment}</td>
              <td>{items.BuyerQuantity}</td>
              <td>
                {items.Information.map((item) => {
                  return (
                    <tr key={item.productId + index + "buyer"}>
                      <td>{item.ProductName}</td>
                      <td>{item.qty}</td>
                    </tr>
                  );
                })}
              </td>
            </tr>
          </Fragment>
        ))}
      </tbody>
    );
  };

  return (
    <div>
      <table>
        {renderHeader()}
        {renderBody()}
      </table>
    </div>
  );
};
