import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";

// helper
import {
  deleteCareer,
  formatCurrency,
  formatDateToLocalString,
  itemExistsInLocalStorage,
  saveCareer,
} from "../../helper";

// assets
import { StarIcon, TrashIcon } from "@heroicons/react/16/solid";

// animation
import { motion } from "framer-motion";

// library
import { toast } from "react-toastify";

export default function CareerDetails() {
  const career = useLoaderData();
  const [saved, setSaved] = useState(
    itemExistsInLocalStorage("savedCareers", career.id)
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      className="career-details"
    >
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {formatCurrency(career.salary)}$</p>
      <p>Company: {career.company}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>{career.description}</p>
      </div>
      <p>Deadline: {formatDateToLocalString(career.deadline)}</p>
      {!saved ? (
        <StarIcon
          className="icon"
          width={20}
          onClick={() => {
            saveCareer(career);
            setSaved(true);
            toast.success("Saved");
          }}
        />
      ) : (
        <TrashIcon
          className="icon"
          width={20}
          onClick={() => {
            deleteCareer("savedCareers", career.id);
            setSaved(false);
            toast.success("Deleted");
          }}
        />
      )}
    </motion.div>
  );
}

//loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(
    `https://6682553a04acc3545a091590.mockapi.io/api/jobs/jobs/` + id
  );

  return res.json();
};
