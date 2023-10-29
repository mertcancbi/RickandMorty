import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="py-10">
      <div className="container justify-center sm:flex sm:justify-center z-10 relative">
        <Link to="/">
          <img src="https://res.cloudinary.com/lennyj/image/upload/v1593515673/58f37720a4fa116215a9240f_1.png" />
        </Link>
      </div>
    </header>
  );
}
