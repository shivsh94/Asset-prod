import { AnimatePresence, motion } from "framer-motion";
import { IoIosMail, IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Spinner from "./Spinner";
const ModalBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="  grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#004c4c] text-white font-medium px-4 py-2 hover:opacity-90 transition-opacity rounded-full mt-6"
      >
        Get notified when we are live
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL; 
  async function handleSubmit() {
    if (!email) {
      return toast.error('Please enter an email address');
    }
    try {
      setLoading(true);
      const res = await axios.post(`${backendUrl}/api/subscriptions`, { email });
      console.log(res.data);
      setEmail('');
      setIsOpen(false);
      setLoading(false);
      toast.success(res.data.message);
    } catch (error) {
      setIsOpen(false);
      setLoading(false);
      toast.error('Something went wrong. Please try again later.');
    }
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="p-8 absolute inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer "
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#004c4c]  text-white p-6 rounded-lg w-full max-w-lg shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]  cursor-default relative overflow-hidden"
          >

            <IoIosMail className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-[#004c4c] grid place-items-center mx-auto">
                <IoIosMail />
              </div>
              <h3 className="text-3xl font-bold text-start mb-2 ">
                Drop your Mail
              </h3>
              <input
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-white text-[#004c4c] px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 my-4"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-0 right-0 text-white text-2xl"
                >
                  <IoMdCloseCircleOutline />
                </button>
              </div>
              <button
                className="bg-white relative hover:opacity-90 transition-opacity text-[#004c4c] font-semibold py-2 rounded w-fit min-w-52 min-h-10 px-4 flex items-center justify-center"
                onClick={handleSubmit}
              >
                {
                  loading ? <Spinner /> : 'Join waiting list!'
                }
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalBox;