import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import Card from "../components/Card";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

let GET_ALL_ACTORS = gql`
  query ($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        pages
        count
        next
        prev
      }
      results {
        id
        name
        image
        status
        gender
      }
    }
  }
`;

function AllActors() {
  let { data, loading, fetchMore } = useQuery(GET_ALL_ACTORS, {
    variables: { page: 1, filter: {} },
  });
  let [nextPBtn, setNextPBtn] = useState(1);
  let [allActors, setAllActors] = useState("");

  if (loading) {
    <h3>Loading Data</h3>;
  }

  const nextPageFun = () => {
    fetchMore({
      variables: { page: nextPBtn, filter: {} },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        return fetchMoreResult;
      },
    });
  };

  const prevPageFun = () => {
    fetchMore({
      variables: { page: data.characters.info.prev, filter: {} },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        return fetchMoreResult;
      },
    });
  };

  useEffect(() => {
    if (data) {
      setNextPBtn(data.characters.info.next);
      return setAllActors(data.characters.results);
    }
  }, [data]);

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 pb-10">
        {!allActors ? (
          <Loading />
        ) : (
          allActors.map((detailActors, iValue) => (
            <Card key={iValue} actor={detailActors} />
          ))
        )}
      </div>

      <Pagination
        nextPageFun={nextPageFun}
        prevPageFun={prevPageFun}
        nextPBtn={nextPBtn}
      />
    </div>
  );
}

export default AllActors;
