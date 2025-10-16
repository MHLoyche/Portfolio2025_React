import { useEffect, useState } from "react";
import { getAllProjects } from "../models/project_model";

export function useProjectViewModel() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProjects()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return {
    projects,
    error,
    loading,
  };
}
