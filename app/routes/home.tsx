import type { Route } from "./+types/home";
import Navbar from "../../components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return(
      <div className="home">
        <Navbar/>

        <section className="hero">
            <div className="announce">
                <div className="dot">
                    <div className="pulse"></div>
                </div>
                <p>Introducing Vision 2.0</p>
            </div>
            <h1>Build beautiful spaces at the speed to thought with Vision </h1>

        </section>
      </div>

  )
}
