import { Link, useLoaderData } from "react-router-dom";

// helper
import { deleteCareer, fetchData } from "../../helper";

// assets
import { TrashIcon } from "@heroicons/react/16/solid";

// animation
import { motion } from "framer-motion";

// library
import { toast } from "react-toastify";

export default function SavedCareers() {
  const { careers } = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
          className="careers"
        >
          <Link to="/careers/saved" className="saved-job" key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
            <TrashIcon
              className="icon"
              width={20}
              onClick={() => {
                deleteCareer("savedCareers", career.id);
                toast.success("Deleted")
              }}
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

// loader
export async function savedCareersLoader() {
  const careers = await fetchData("savedCareers");

  return { careers };
}
