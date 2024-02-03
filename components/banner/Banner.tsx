import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center pb-12">
          <div>
            <img
              src={"/1.jpeg"}
              alt=""
              className="w-full sm:w-[70%] mx-auto mah-h-[350px] object-cover"
            />
          </div>
          <div className="space-y-3 p-4 border-b-2 border-b-sky-800">
            <p className="text-sky-800 uppercase">Our Mission</p>
            <h1 className="uppercase text-5xl">Trust & Security</h1>
            <p>
              By eliminating intermediaries and employing decentralized
              consensus mechanisms, our blockchain billing system establishes a
              trustless environment, fostering confidence in transactions.
              Utilizing cryptographic techniques ensures heightened security,
              safeguarding sensitive information and maintaining the integrity
              of billing records
            </p>
            <Link href="/blog">
              <button className="primary-button mt-2">Learn More</button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="space-y-3 xl:pr-36 p-4 border-b-2 border-b-sky-800">
            <p className="text-sky-800 uppercase">Our Mission</p>
            <h1 className="uppercase text-5xl">Smart Contracts</h1>
            <p>
              Empowering trust through the elimination of intermediaries and
              decentralized consensus mechanisms, our blockchain billing system
              ensures confidence in transactions. Leveraging cryptographic
              techniques for heightened security and integrity, we further
              innovate by employing programming languages, enabling the
              automation of our billing system in a decentralized, transparent,
              and immutable manner through smart contracts.
            </p>
            <Link href="/blog">
              <button className="primary-button mt-2">Learn More</button>
            </Link>
          </div>
          <div>
            <img
              className="w-full sm:w-[70%] mx-auto mah-h-[350px] object-cover"
              src={"/2.gif"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
