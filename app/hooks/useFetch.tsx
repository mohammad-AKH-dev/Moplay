import React from "react";

async function useFetch(url: string) {
  const resData = await fetch(url, {
    next: { revalidate: 3600 },
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTA2YzQ4ODRlOGM5YWEwNDhlMGZlODMzNjFjZDUzMiIsIm5iZiI6MTc0Njg5MzkxOS40MjUsInN1YiI6IjY4MWY3YzVmNzQyNjZmYmU1OTdlNzNlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XM9yjPjRYR3ho3ME22z_QHWmu8tHKJYkGuSMBqwoLnw",
    },
  });
  const jsonedData = await resData.json();

  return jsonedData;
}

export default useFetch;
