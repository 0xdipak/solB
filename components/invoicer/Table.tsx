
const list = [
    {
        id: '1',
        description: 'potato',
        quantity: '1',
        price: '20',
        amount: '100'
    },
    {
        id: '2',
        description: 'onoion',
        quantity: '2',
        price: '50',
        amount: '250'
    },
    {
        id: '3',
        description: 'tomato',
        quantity: '5',
        price: '70',
        amount: '100'
    },
]

const Table = () => {
  return (
    <>
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100/10 p-1 text-center">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <tbody key={id}>
            <tr className="text-center">
              <td>{description}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td>{amount}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <div>
        <h2 className="flex items-end justify-end text-white text-4xl font-bold">
          {" "}
          $ 00
        </h2>
      </div>
    </>
  );
};

export default Table;
