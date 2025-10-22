export async function getAllEducation() {
  const response = await fetch("/api/get_education.php");
  if (!response.ok) throw new Error("Failed to fetch education data");
  return response.json();
}
