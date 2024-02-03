const Footer = () => {
  return (
    <footer className="footer border-t-2 border-gray-300 pt-5">
      <ul className="flex flex-wrap items-center justify-center">
        <li>
          <span className="font-bold">Your Name: </span> Dipak Sharma
        </li>
        <li>
          <span className="font-bold">Your Email: </span> dipak@gmail.com
        </li>
        <li>
          <span className="font-bold">Phone Number:</span> 9800000000
        </li>
        <li>
          <span className="font-bold">Bank: </span> Nabil
        </li>
        <li>
          <span className="font-bold">Account Holder: </span> Dipak
        </li>
        <li>
          <span className="font-bold">Account Number: </span> 123-456-789
        </li>
        <li>
          <span className="font-bold">Website: </span>{" "}
          <a
            href="https://dipak.com"
            target="_blank"
            rel="noopenner noreferrer"
          >
            https://dipak.com
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
