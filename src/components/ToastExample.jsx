import { Toaster, toast } from "sonner";

const logo =
  "https://res.cloudinary.com/cloudinary/image/upload/v1/logo/for_white_bg/cloudinary_logo_for_white_bg.svg";

// Just for testing
const ToastExample = () => {
  return (
    <div>
      {/* Sonner - For a toast notification */}
      <div className="">
        <button
          type="button"
          onClick={() => {
            // toast.success("Hello World!");
            // toast("Hello World!", {
            //   description: "This is a description",
            //   icon: <img src={logo} alt="logo" className="w-6 h-6" />,
            //   // icon: <FaCheckCircle className="text-white" />,
            //   // icon: <img src={images.logo} alt="logo" className="w-6 h-6" />,
            // });
            // toast.custom((t) => {
            //   return (
            //     <div
            //       className={`${
            //         t.visible ? "animate-enter" : "animate-leave"
            //       } max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 overflow-hidden`}
            //     >
            //       <div className="p-4">
            //         <img src={logo} alt="logo" className="w-6 h-6" />
            //         <p className="text-sm text-gray-500">Hello World!</p>
            //       </div>
            //     </div>
            //   );
            // });
            toast.loading("Loading...", {
              description: "This is a description",
              icon: <img src={logo} alt="logo" className="w-6 h-6" />,
            });
            toast.success("Submitted!", {
              description: "Your message has been sent successfully.",
              background: "#4caf50",
              icon: <img src="/path/to/success-icon.png" alt="Success" />,

              iconTheme: {
                primary: "#4caf50",
                secondary: "#fff",
              },
              // icon: <img src={images.logo} alt="logo" className="w-6 h-6" />,
              // icon: <FaCheckCircle className="text-white" />,
            });
            setTimeout(() => {
              toast.dismiss();
              toast.success("Hello World!", {
                description: "This is a description",
                icon: <img src={logo} alt="logo" className="w-6 h-6" />,
              });
            }, 2000);
          }}
        >
          success Toast
        </button>
        <button type="button" onClick={() => toast.error("Hello World!")}>
          Fail Toast
        </button>
        <Toaster
          position="top-right" // top-center, top-left, bottom-right, bottom-center, bottom-left
          richColors
          toastOptions={{
            // className: "bg-blue-800 text-white",
            duration: 5000, // speed of the toast before it disappears
            // style: {
            //   background: "#1e3a8a",
            //   color: "#fff",
            // },
            // iconTheme: {
            //   primary: "#f00",
            //   secondary: "#f00",
            // },
            // icon: <img src={images.logo} alt="logo" className="w-6 h-6" />,
            // icon: <FaCheckCircle className="text-white" />,
          }}
        />
      </div>
    </div>
  );
};

export default ToastExample;
