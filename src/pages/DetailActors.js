import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

let GET_SINGLE_ACTOR = gql`
  query ($id: ID!) {
    character(id: $id) {
      name
      gender
      status
      image
      created
      species
      origin {
        name
      }
      location {
        name
        type
      }
    }
  }
`;

function DetailActors() {
  let { actorId } = useParams();
  let { data, loading } = useQuery(GET_SINGLE_ACTOR, {
    variables: { id: actorId },
  });

  if (loading) {
    <Loading />;
  }

  return (
    <>
      {data ? (
        <div className="container flex gap-8 justify-center relative z-10 ">
          <div>
            <img src={data.character.image} alt="" />
            <h1 className="text-center pt-2 font-medium text-base">
              {data.character.name}
            </h1>
          </div>
          <div className="text-white">
            <div>
              <h3>
                Status:{" "}
                <span
                  style={
                    data.character.status === "Alive"
                      ? { color: "green" }
                      : data.character.status === "Dead"
                      ? { color: "red" }
                      : { color: "purple" }
                  }
                >
                  {data.character.status}
                </span>
              </h3>
              <h3 className="pt-2 text-white">
                Gender: {data.character.gender}
              </h3>
              <h3 className="pt-2 text-white">
                Species: {data.character.species}
              </h3>
              <h4 className="pt-2 text-white">
                Origin: {data.character.origin.name}
              </h4>
              <h4 className="pt-2 text-white">
                Location Type: {data.character.location.type}
              </h4>
              <h4 className="pt-2 text-white">
                Created On: {data.character.created}
              </h4>
              <h5 className="pt-2 text-white">
                Last seen location: {data.character.location.name}
              </h5>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default DetailActors;
