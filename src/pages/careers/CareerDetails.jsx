import { useLoaderData } from "react-router-dom";

export default function CareerDetails() {
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary_from} $</p>
      <p>Company: {career.company}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          {career.description}
        </p>
      </div>
      <p>Deadline: {career.application_deadline}</p>
    </div>
  );
}

//loader function
export const careerDetailsLoader = async () => {
    const res = await fetch("https://jsonfakery.com/jobs/random");

    return res.json()
}
