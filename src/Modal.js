import React from 'react';
import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ isToggled, setToggle, children }) => {
  return (
    <div>
      <AnimatePresence>
        {isToggled && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                top: "30px",
                left: "50%",
                transform: "translate3d(-50%, 0, 0)"
              }}
            >
              <motion.div initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: 30 }}>
                <button onClick={() => setToggle(false)}>Close</button>
                {children}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Modal;
