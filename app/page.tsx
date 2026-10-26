export default async function Home() {
  const res = await fetch(
    "https://api.freeapi.app/api/v1/public/randomjokes/joke/random",
  );
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
