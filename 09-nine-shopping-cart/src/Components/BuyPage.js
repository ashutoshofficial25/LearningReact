import React, { useState, useEffect } from "react";
// import { Axios } from "axios";
import axios from "axios";
import { faker } from "@faker-js/faker";
// import { random, commerce } from "faker";
import { Container, Col, Row } from "reactstrap";

const apiKey = "563492ad6f91700001000001fce275a7930c4663918b65050818453f";
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const localUrl = "http://myjson.dit.upm.es/api/bins/5mxw";

const BuyPage = ({ addInCart }) => {
  const [product, serProduct] = useState([]);

  const youtubeApi = "AIzaSyDiHAnGOBChWC_gkhDsMk2IFKUW8ROdxJM";
  const getYoutubeData = async () => {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?key=${youtubeApi}`,
      {
        Authorization: youtubeApi,
        Accept: "application/json",
      }
    );
    console.log("res:", response);
  };

  const fetchPhotos = async () => {
    const response = await axios.get(url, {
      headers: {
        Authorization: apiKey,
      },
    });
    console.log(response);
  };

  const fetchLocalPhotos = async () => {
    const { data } = await axios.get(localUrl);

    const { photos } = data;

    const allProducts = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: faker.random.word(),
      productPrice: faker.commerce.price(),
      id: faker.random.uuid,
    }));

    serProduct(allProducts);
  };
  useEffect(() => {
    fetchPhotos();
    fetchLocalPhotos();
    getYoutubeData();
  }, []);

  return (
    <Container>
      <h1 className="text-success text-center">BuyPage</h1>
      <Row>
        {product.map((product) => (
          <span key={product.id}>{product.productName}</span>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
