import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of the website.</p>
    </div>

  );

}
<main>
<Outlet/>
</main>

export default HomePage;
