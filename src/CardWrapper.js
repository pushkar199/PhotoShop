import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./CardWrapper.css";
import ImgCard from "./ImgCard";
import Loader from "./Loader";

function CardWrapper({ search, category, setLoading }) {
  // ---------------------------------------------
  // States
  const [data, setData] = useState([]);
  // ---------------------------------------------

  const apiKey = "41774584-da9031f1e538150ff4f2e19fa";

  // ---------------------------------------------
  // Check the response returned by api call
  const checkResponse = (response) => {
    // if response is not empty set as response Data
    if (response.length) {
      setData([]);
      setData(response);
      setLoading(false);
    }
    // if response is empty then set empty array as data so that app will show "no recods found" page
    else {
      setData([]);
      setLoading(false);
    }
  };
  // ---------------------------------------------

  // ---------------------------------------------
  // Call the api when the search value is changed
  useEffect(() => {
    // set loading true to show loading screen
    setLoading(true);
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${search}&image_type=photo&category=${category}`;
    let tempArray = [];
    const fetchData = async () => {
      const request = await Axios.get(url);
      // assign the data array to temparray to put it as parameter in checkResponse()
      tempArray = request.data.hits;
      checkResponse(tempArray);
    };
    // Calling The Function
    fetchData();
  }, [search]);
  // ---------------------------------------------

  // ---------------------------------------------
  // Call the api when the category is changed
  useEffect(() => {
    // set loading true to show loading screen
    setLoading(true);
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${search}&image_type=photo&category=${category}`;
    let tempArray = [];
    const fetchData = async () => {
      const request = await Axios.get(url);
      // assign the data array to temparray to put it as parameter in checkResponse()
      tempArray = request.data.hits;
      checkResponse(tempArray);
    };
    // Calling The Function
    fetchData();
  }, [category]);
  // ---------------------------------------------

  return (
    <div className="cardWrapper">
      <div
        className={
          data[0] ? "cardWrapper__container" : "cardWrapper__errorPage"
        }
      >
        {data[0] ? (
          data.map((item) => (
            <ImgCard img={item.webformatURL} tags={item.tags} />
          ))
        ) : (
          <img
            src="https://cdn.dribbble.com/users/1883357/screenshots/6016190/search_no_result.png"
            alt="No Image Found"
          />
        )}
      </div>
    </div>
  );
}

export default CardWrapper;
