import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "primereact/button";
import "./Table.css";

function TableForm({
  subheader,
  setSubheader,
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  mrp,
  setMrp,
  list,
  setList,
  total,
  setTotal,
}) {
  const [isEditing, setIsEditing] = useState(false);

  // Submit form function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !quantity || !price || !mrp) {
      toast.error("Please fill in all inputs");
    } else {
      const newItems = {
        id: uuidv4(),
        subheader,
        description,
        quantity,
        price,
        amount,
        mrp,
      };
      setSubheader("");
      setDescription("");
      setQuantity("");
      setPrice("");
      setAmount("");
      setMrp("");
      setList([...list, newItems]);
      setIsEditing(false);
    }
  };

  // Calculate items amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price);
    };

    calculateAmount(amount);
  }, [amount, price, quantity, setAmount]);

  // Calculate total amount of items in table
  useEffect(() => {
    let rows = document.querySelectorAll(".amount");
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
    }
  });

  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setSubheader(editingRow.subheader);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
    setMrp(editingRow.mrp);
  };

  // Delete function
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id));

  return (
    <>
      <ToastContainer position="top-right" theme="colored" />

      <form onSubmit={handleSubmit}>
        <div>
          <div className="md:grid grid-cols-2 gap-x-10">
            <div className="flex flex-col">
              <label htmlFor="subheader">Sub Header</label>
              <input
                type="text"
                name="subheader"
                id="subheader"
                placeholder="Enter subheader if you want"
                value={subheader}
                onChange={(e) => setSubheader(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description">Item description</label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Item description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="md:grid grid-cols-4 gap-x-10">
            <div className="flex flex-col">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="text"
                name="quantity"
                id="quantity"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                name="amount"
                id="amount"
                placeholder="amount"
                value={amount}
                disabled
                onChange={(e) => setTotal(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="mrp">MRP / Unit</label>
              <input
                type="text"
                name="mrp"
                id="mrp"
                placeholder="mrp"
                value={mrp}
                onChange={(e) => setMrp(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            type="submit"
            className="mt-4 addbtn bg-blue-500 text-white font-bold py-2 rounded shadow border-none hover:bg-blue-700 transition-all duration-300"
          >
            {isEditing ? "Editing Row Item" : "Add Table Item"}
          </button>
          </div>
        </div>
      </form>

      {/* Table items */}

      <table width="100%" className="mb-2 mt-10">
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr className="p-1 text-left">
            <td className="font-bold p-2">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
            <td className="font-bold">MRP / Unit</td>
            <td className="font-bold text-center">Action</td>
          </tr>
        </thead>
        {list.map(
          ({ id, description, quantity, price, amount, mrp, subheader }) => (
            <React.Fragment key={id}>
              <tbody>
                <tr>
                  <td
                    colspan="6"
                    className="p-1 col font-semibold border-solid border-b border-gray-300 text-center text-teal-800"
                  >
                    {/* bg-teal-50 */}
                    {subheader}{" "}
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="h-10 text-left">
                  <td className="px-2">{description}</td>
                  <td className="px-1">{quantity}</td>
                  <td className="px-1">{price}</td>
                  <td className="amount">{amount}</td>
                  <td className="px-1">{mrp}</td>
                  <td className="px-1 text-center">
                    <Button
                      onClick={() => editRow(id)}
                      icon="pi pi-pencil"
                      className="p-button-rounded p-button-text font-bold"
                      style={{ color: "green" }}
                      aria-label="Submit"
                    />
                    <Button
                      onClick={() => deleteRow(id)}
                      icon="pi pi-trash"
                      className="p-button-rounded p-button-text font-bold"
                      style={{ color: "red" }}
                      aria-label="Submit"
                    />
                  </td>
                </tr>
              </tbody>
            </React.Fragment>
          )
        )}
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          Rs. {total.toLocaleString()}
        </h2>
      </div>
    </>
  );
}

export default TableForm;
