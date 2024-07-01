import { Link } from "react-router-dom";

// animation
import { motion } from "framer-motion";

export default function CareerCard({ careers }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      className="careers"
    >
      {careers.map((career) => (
        <Link to={career.id} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </motion.div>
  );
}
