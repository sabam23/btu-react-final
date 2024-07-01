import { useLoaderData } from "react-router-dom";

// component
import CareerCard from "../../components/CareerCard";

export default function Careers() {
  const careers = useLoaderData();

  return <CareerCard careers={careers} />;
}

//loader function
export const careersLoader = async () => {
  const res = await fetch(
    "https://6682553a04acc3545a091590.mockapi.io/api/jobs/jobs"
  );

  return res.json();
};
