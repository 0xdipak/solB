import { LiaNetworkWiredSolid } from "react-icons/lia";
import { MdOutlineSecurity } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const ServiceData = [
  {
    id: 1,
    title: "Decentralized",
    description:
      "Removing intermediaries reduces the risk of fraud and manipulation. It also ensures that the system operates autonomously without a central authority.",
    icon: <LiaNetworkWiredSolid className="text-7xl" />,
    aosDelay: "300",
  },
  {
    id: 2,
    title: "Security",
    description:
      "Utilize cryptographic techniques to secure transactions and user data. Public and private key pairs enhance the security of user identities.",
    icon: <MdOutlineSecurity className="text-7xl" />,
    aosDelay: "500",
  },
  {
    id: 3,
    title: "Trustless",
    description:
      "Every transaction is recorded on the blockchain, providing an immutable and transparent ledger. Users can trace the flow of funds, ensuring accountability.",
    icon: <VscWorkspaceTrusted className="text-7xl" />,
    aosDelay: "700",
  },
];

const Services = () => {
  return (
    <div className="bg-black text-white relative z-50">
      <div className="">
        <div className="min-h-[400px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 z-10">
            {ServiceData.map((service) => (
              <div
                key={service.id}
                className="min-h-[180px] flex flex-col gap-2 justify-center items-center
                            bg-sky-900/60 rounded-xl backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px]
                            mx-auto"
              >
                {service.icon}
                <h1>{service.title}</h1>
                <p>{""}</p>
                <p className="text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <img
            src={"/wave.gif"}
            alt="wave img"
            className="h-[200px] w-full object-cover mix-blend-screen
          -translate-y-24 relative z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
