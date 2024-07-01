import { Link, useLoaderData } from "react-router-dom";

// helper
import { deleteCareer, fetchData } from "../../helper";

// assets
import { TrashIcon } from "@heroicons/react/16/solid";

export default function SavedCareers() {
  const { careers } = useLoaderData();
  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to="/careers" className="saved-job" key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
          <TrashIcon className="icon" width={20} onClick={() => deleteCareer("savedCareers", career.id)} />
        </Link>
      ))}
    </div>
  );
}

// loader
export async function savedCareersLoader() {
  const careers = await fetchData("savedCareers");

  return { careers };
}
