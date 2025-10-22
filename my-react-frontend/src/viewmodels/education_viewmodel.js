import { useEffect, useState } from "react";
import { getAllEducation } from "../models/education_model";

export function useEducationViewModel() {
  const [education, setEducation] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllEducation()
      .then((data) => {
        setEducation(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return {
    education,
    error,
    loading,
  };
}
