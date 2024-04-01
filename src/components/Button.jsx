// Import necessary dependencies from React
import { useRef, useState } from "react";
import { motion } from "framer-motion";

// Define the Button component
const Button = ({ children, onClick }) => {
  return (
    <div className="">
      {/* Render the EncryptButton component */}
      <EncryptButton onClick={onClick}>{children}</EncryptButton>
    </div>
  );
};

// Define the EncryptButton component
const EncryptButton = ({ children, onClick }) => {
  // Constants for encryption animation
  const TARGET_TEXT = children;
  const CYCLES_PER_LETTER = 2;
  const SHUFFLE_TIME = 50;
  
  // Characters for encryption animation
  const CHARS = "!@#$%^&*():{};|,.<>/?";
  // Ref for interval
  const intervalRef = useRef(null);
  // State for encrypted text
  const [text, setText] = useState(TARGET_TEXT);

  // Function to scramble text
  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("").map((char, index) => {
        if (pos / CYCLES_PER_LETTER > index) {
          return char;
        }

        const randomCharIndex = Math.floor(Math.random() * CHARS.length);
        const randomChar = CHARS[randomCharIndex];

        return randomChar;
      }).join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  // Function to stop scrambling
  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(TARGET_TEXT);
  };

  // Render the EncryptButton component
  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg border-[1px] border-copy bg-primary px-4 py-2 font-mono font-medium uppercase text-secondaryContent transition-colors hover:text-white hover:bg-primaryDark"
    >
      <div className="relative z-10 flex items-center gap-2">
        {/* Render the text */}
        <span>{text}</span>
      </div>
      {/* Animation span */}
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-primaryContent/0 from-40% via-border/100 to-primaryDark/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

// Export the Button component as the default export
export default Button;
