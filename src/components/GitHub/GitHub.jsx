import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData()
  // const [data,setData] = useState([])
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Murfadahmed")
  //     .then((res) => res.json())
  //     .then(data=>{
  //       console.log(data);
  //       setData(data)
  //     });
  // }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col justify-center ">
      GitHub Followers :{data.followers}
      <img
        className="m-auto"
        src={data.avatar_url}
        alt="gitPicture"
        width={300}
      />
      <h4>GutHub Repositories : {data.public_repos}</h4>
    </div>
  );
}

export default GitHub;

export const GitubInfoLaoder = async () => {
  const response = await fetch("https://api.github.com/users/Murfadahmed")
  return response.json()
};
