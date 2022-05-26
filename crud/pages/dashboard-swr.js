import useSwr from "swr";
const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export default function DashboardSWR() {
  const { data, error } = useSwr("/api", fetcher);
  if (error) return "An error has occur";
  if (!data) return "Loading";
  return <h1>{data.text}</h1>;
}
