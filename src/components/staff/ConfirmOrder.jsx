import React, { useEffect, useState } from "react";
// import { auth, db } from "../config/Config";
import { dbstore } from '../Firebase/firebase';

import { THeader, HeaderTable } from "../common/table/cleanTable";
import { Fragment } from "react";

export const ConfirmOrder = () => {
  const [state, setstate] = useState({ Buyer: [] });
  useEffect(() => {
    const fdata = [];
    dbstore.collection("Buyer-info").onSnapshot((res) => {
      res.docChanges().forEach((change) => {
        const doc = { ...change.doc.data(), id: change.doc.id };

       // console.log(doc);
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
  }, []);

  const renderHeader = () => {
    return (
      <thead className="thead-dark">
        <HeaderTable header={THeader} />
      </thead>
    );
  };

  const renderBody = () => {
    //   TODO UPDATE COMPONENT -> COMMON
    const renderInformation = (isShipped, BuyerId, createTime) => {
      const dataId = BuyerId + "_" + createTime;
      return (
        <div>
          {isShipped === false ? (
            <i
              style={{ cursor: "pointer" }}
              onClick={() =>
                dbstore
                  .collection(`Buyer-info`)
                  .doc(dataId)
                  .update({ isShipped: true })
              }
            >
              UnShip
            </i>
          ) : (
            <i
              style={{ cursor: "pointer" }}
              onClick={() =>
                dbstore
                  .collection(`Buyer-info`)
                  .doc(dataId)
                  .update({ isShipped: false })
              }
            >
              Ship
            </i>
          )}
        </div>
      );
    };

    return (
      <tbody>
        {state.Buyer.map((items, index) => (
          <Fragment>
            <tr key={items.BuyerId + index + "buyer"}>
              <td>{items.BuyerId}</td>
              <td>{items.BuyerCell}</td>
              <td>{items.BuyerEmail}</td>
              <td>{items.BuyerName}</td>
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
              <td>
                {renderInformation(
                  items.isShipped,
                  items.BuyerId,
                  items.createTime
                )}
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
