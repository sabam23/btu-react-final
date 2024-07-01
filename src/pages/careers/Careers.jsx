import { useLoaderData, Link } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

//loader function
export const careersLoader = async () => {
  const res = await fetch("https://6682553a04acc3545a091590.mockapi.io/api/jobs/jobs");

  return res.json();
};
