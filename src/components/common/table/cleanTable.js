export const THeader = [
    {
      key: "BuyerID",
      title: "Buyer ID",
    },
    {
      key: "BuyerCell",
      title: "Buyer Cell",
    },
    {
      key: "BuyerEmail",
      title: "Buyer Email",
    },
    { 
      key: "BuyerName", 
      title: "Buyer Name" 
    },
    {
      key: "BuyerPayment",
      title: "Buyer Payment",
    },
    {
      key: "BuyerQuantity",
      title: "Buyer Quantity",
    },
    {
      key: "Product",
      title: "Product",
    },
    {
      key: "Status",
      title: "Status",
    },
  ];
  export const TheaderCustomer = [
    {
      key: "1",
      title: "Payment",
    },
    {
      key: "2",
      title: "Quantity",
    },
    {
      key: "3",
      title: "Product",
    },
  ];
  export const HeaderTable = ({ header }) => {
    if (!header) return <div />;
    return header?.map((item) => {
      return <th key={item.key}>{item.title}</th>;
    });
  };
  