import { useState } from "react";
import { motion } from "framer-motion";
import Buttons from "./Buttons";
function Header(props: { HideHeader: any }) {
  const [isOpen, setIsOpen] = useState(true);
  const screenSize: any = window.screen.availHeight;
  const variants = {
    grouUpAnimation: {
      scale: [0.5, 1],
    },
    fadeToTheTop: {
      y: [0, -screenSize],
      opacity: [1, 0],
    },
  };
  function hideHeader() {
    setIsOpen(false);
    setTimeout(() => props.HideHeader(), 1000);
  }

  return (
    <motion.header
      className="h-screen w-full px-4 py-12 bg-slate-800 text-slate-100 flex flex-col justify-center items-center"
      animate={isOpen ? "" : "fadeToTheTop"}
      variants={variants}
      transition={{ duration: 1 }}
    >
      <motion.div className="text-center" animate={variants.grouUpAnimation}>
        <p className="text-slate-400">Bienvenido a</p>
        <h1 className="text-6xl">Finance</h1>
        <p className=" text-slate-400 text-lg">
          Aplicacion web que te ayuda a controlar tus finanzas
        </p>
        <div className="py-10">
          <p className="text-center text-slate-400 text-xl pb-2 w-full">
            Comienza agregando un gasto o un ingreso
          </p>
          <Buttons hideHeader={() => hideHeader()} />
        </div>
      </motion.div>
    </motion.header>
  );
}

export default Header;
