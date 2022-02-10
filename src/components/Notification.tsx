import { motion } from "framer-motion";

function Notification(props: { message: string }) {
  const { message } = props;
  return (
    <motion.div className="fixed flex items-center justify-center bottom-0 p-2">
      <p className="bg-slate-100 p-2 rounded-lg text-slate-900">{message}</p>
    </motion.div>
  );
}

export default Notification;
