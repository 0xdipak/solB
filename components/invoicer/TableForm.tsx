import React, { useState } from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';


const list = [
  {
    id: "1",
    description: "potato",
    quantity: "1",
    price: "20",
    amount: "100",
  },
  {
    id: "2",
    description: "onoion",
    quantity: "2",
    price: "50",
    amount: "250",
  },
  {
    id: "3",
    description: "tomato",
    quantity: "5",
    price: "70",
    amount: "100",
  },
];


const TableForm = () => {
    const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      <form>
        <div className="flex flex-col md:mt-16">
          <label htmlFor="description"> Item Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item description"
            
          />
        </div>

        <div className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="quantity"> Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
            
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price"> Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount"> Amount</label>
            <p>00</p>
          </div>
        </div>

        <button
          className="bg-blue-500 text-white font-bold py-2 px-8 mb-5 rounded shadow
            border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          type="submit"
        >
          {isEditing ? "Editing Row Item" : "Add Table Item"}
        </button>
      </form>

      {/* table items  */}
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100/10 p-1 text-center">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <tbody key={id}>
            <tr className='text-center'>
              <td>{description}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td className="amount">{amount}</td>
              <td>
                <button >
                  <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                </button>
              </td>
              <td>
                <button>
                  <AiOutlineEdit className="text-green-500 font-bold text-xl" />
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      <div>
        <h2 className="text-white text-4xl font-bold mb-2 flex items-end justify-end">
          {" "}
          $ 00
        </h2>
      </div>
    </>
  );
}

export default TableForm