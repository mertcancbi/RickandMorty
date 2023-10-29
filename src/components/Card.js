import { Link } from "react-router-dom";

export default function Card({ actor }) {
  return (
    <Link to={`/actor/${actor.id}`} className="hover:scale-105 transition-all">
      <div key={actor.id}>
        <div className="relative">
          <div className="relative h-72 w-full overflow-hidden rounded-lg">
            <img
              src={actor.image}
              alt={actor.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative mt-4">
            <h3 className="text-sm font-medium text-white">{actor.name}</h3>
            <p className="mt-1 text-sm text-gray-300">{actor.gender}</p>
          </div>
          <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
            />
            <p
              className={
                actor.status === "Alive"
                  ? "relative text-lg font-semibold text-green-400"
                  : actor.status === "Dead"
                  ? "relative text-lg font-semibold text-red-400"
                  : "relative text-lg font-semibold text-gray-300"
              }
            >
              {actor.status}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
