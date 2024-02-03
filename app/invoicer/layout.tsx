import { Metadata } from "next";

export const metadata: Metadata = {
  title: "solB - Invoicer",
  description:
    "One of the world's most secure, decentralized, transparent and trustless billing system",
};


export default function InvoicerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="container mx-auto flex-grow px-4">{children}</main>;
}
