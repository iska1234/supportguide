import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className = "" }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(href);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={`${className} relative group cursor-pointer`}
      onClick={handleNavigation}
    >
      <span>{title}</span>
      <motion.span
        className={`
          h-[1px] inline-block bg-dark dark:bg-light
          absolute left-0 -bottom-0.5
        `}
        initial={{ width: "0%" }}
        animate={{
          width: window.location.pathname === href ? "100%" : "0%",
        }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default CustomLink;
