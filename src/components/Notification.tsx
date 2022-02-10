import { motion } from "framer-motion";

function Notification(props: { message: string }) {
  const { message } = props;
  return (
    <motion.div
      className="fixed flex items-center justify-center bottom-0 p-2"
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{ duration: 2 }}
      initial={{ opacity: 0 }}
    >
      <p className="bg-slate-200 py-2 px-4 rounded-lg text-slate-900 w-80 text-center">
        {message}
      </p>
    </motion.div>
  );
}

export default Notification;
