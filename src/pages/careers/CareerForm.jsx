import { useEffect, useRef } from "react";
import { Form, redirect, useFetcher } from "react-router-dom";

// library
import { toast } from "react-toastify";

export const careerFormAction = async ({ request }) => {
  const data = await request.formData();

  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "addCareer") {
    try {
      const response = await fetch(
        "https://6682553a04acc3545a091590.mockapi.io/api/jobs/jobs",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      return toast.error(error);
    }

    toast.success("Added new Career");
    return redirect("/careers");
  }
};

export default function CareerForm() {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      // clear form
      formRef.current.reset();
      // reset focus
      focusRef.current.focus();
    }
  });

  return (
    <div className="contact">
      <h3>Create Job Vacancy</h3>
      <fetcher.Form method="POST" ref={formRef}>
        <input type="hidden" name="_action" value="addCareer" />
        <label>
          <span>Job Title</span>
          <input
            type="text"
            name="title"
            ref={focusRef}
            placeholder="Job Title"
            required
          />
        </label>
        <label>
          <span>Company</span>
          <input type="text" name="company" placeholder="Company" required />
        </label>
        <label>
          <span>Salary</span>
          <input
            type="number"
            name="salary"
            placeholder="salary"
            min="10"
            required
          />
        </label>
        <label>
          <span>Location</span>
          <input type="text" name="location" placeholder="Location" required />
        </label>
        <label>
          <span>Description</span>
          <textarea
            name="description"
            placeholder="description"
            required
          ></textarea>
        </label>
        <button disabled={isSubmitting}>ADD</button>
      </fetcher.Form>
    </div>
  );
}
