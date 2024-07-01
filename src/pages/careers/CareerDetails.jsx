import { useLoaderData, useParams } from "react-router-dom";

// helper
import { formatCurrency, formatDateToLocalString } from "../../helper";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {formatCurrency(career.salary)}$</p>
      <p>Company: {career.company}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>{career.description}</p>
      </div>
      <p>Deadline: {formatDateToLocalString(career.deadline)}</p>
    </div>
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
