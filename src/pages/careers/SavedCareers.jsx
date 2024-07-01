import { Link, useLoaderData, useRevalidator } from "react-router-dom";

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
  const revalidator = useRevalidator();

  return (
    <div className="careers">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        className="careers"
      >
        {careers.map((career) => (
          <div className="saved-jobs" key={career.id}>
            <Link to={`/careers/` + career.id} className="saved-job">
              <p>{career.title}</p>
              <p>Based in {career.location}</p>
            </Link>
            <TrashIcon
              className="icon"
              width={20}
              onClick={() => {
                deleteCareer("savedCareers", career.id);
                toast.success("Removed from saved");
                revalidator.revalidate();
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// loader
export async function savedCareersLoader() {
  const careers = await fetchData("savedCareers");

  return { careers };
}
