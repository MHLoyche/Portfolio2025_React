export async function getAllProjects() {
  const response = await fetch("/api/get_data.php");
  if (!response.ok) throw new Error("Failed to fetch projects");
  return response.json();
}