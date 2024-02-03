"use client";
import ClientDetails from "@/components/invoicer/ClientDetails";
import Dates from "@/components/invoicer/Dates";
import Header from "@/components/invoicer/Header";
import MainDetails from "@/components/invoicer/MainDetails";
import Notes from "@/components/invoicer/Notes";
import Table from "@/components/invoicer/Table";
import Footer from "@/components/invoicer/Footer";
import React, { useState } from "react";
import TableForm from "@/components/invoicer/TableForm";

const Invoicer = () => {
  const [showInvoice, setShowInvoice] = useState(true);
  return (
    <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl rounded shadow bg-slate-700">
      {showInvoice ? (
        <div>
          <Header />
          <MainDetails />
          <ClientDetails />
          <Dates />
          <Table />
          <Notes />
          <Footer />
          <button
            onClick={() => setShowInvoice(false)}
            className="bg-blue-500 text-white font-bold py-2 px-8 mt-5 rounded shadow
            border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            Edit Information
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center">
            <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="name">Enter Your Name</label>
                <input
                  type="text"
                  name="text"
                  id="name"
                  placeholder="Enter Your Name"
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="address">Enter Your Address</label>
                <input
                  type="text"
                  name="text"
                  id="address"
                  placeholder="Enter Your Address"
                  autoComplete="off"
                />
              </div>
            </article>

            <article className="lg:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="email">Enter Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="website">Enter Your Website</label>
                <input
                  type="url"
                  name="website"
                  id="website"
                  placeholder="Enter Your Website"
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone">Enter Your Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter Your Phone"
                  autoComplete="off"
                />
              </div>
            </article>

            <article className="lg:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="bankName">Enter Your Bank Name</label>
                <input
                  type="text"
                  name="bankName"
                  id="bankName"
                  placeholder="Enter Your Bank Name"
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="bankAccount">
                  Enter Your Bank Account Number
                </label>
                <input
                  type="text"
                  name="bankAccount"
                  id="bankAccount"
                  placeholder="Enter Your Bank Account Number"
                  autoComplete="off"
                />
              </div>
            </article>

            <article className="lg:grid grid-cols-2 gap-10 md:mt-16">
              <div className="flex flex-col">
                <label htmlFor="clientName">
                  Enter Your Client&apos;s Name
                </label>
                <input
                  type="text"
                  name="clientName"
                  id="clientName"
                  placeholder="Enter Your Client's Name"
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="clientAddress">
                  Enter Your Client&apos;s Address
                </label>
                <input
                  type="text"
                  name="clientAddress"
                  id="clientAddress"
                  placeholder="Enter Your Client's Address"
                  autoComplete="off"
                />
              </div>
            </article>

            <article className="lg:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="invoiceNumber">Invoice Number</label>
                <input
                  type="text"
                  name="invoiceNumber"
                  id="invoiceNumber"
                  placeholder="Invoice Number"
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="invoiceDate">Invoice Date</label>
                <input
                  type="date"
                  name="invoiceDate"
                  id="invoiceDate"
                  placeholder="Invoice Date"
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="dueDate">Due Date</label>
                <input
                  type="date"
                  name="dueDate"
                  id="dueDate"
                  placeholder="Due Date"
                  autoComplete="off"
                />
              </div>
            </article>

            {/* this is our table  */}
            <article>
              <TableForm />
            </article>

            <label htmlFor="notes">Additional Notes</label>
            <textarea
              name="notes"
              id="notes"
              placeholder="Additional notes to the client "
            />

            <button
              onClick={() => setShowInvoice(true)}
              className="bg-blue-500 text-white font-bold py-2 px-8 mt-5 rounded shadow
              border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Preview Invoice
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default Invoicer;
