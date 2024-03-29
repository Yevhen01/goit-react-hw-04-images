import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SearhBar from "./SearchBar/SearchBar";
import ImageGallery from "./Gallery/ImageGallery/ImageGallery";
import LoadMoreButton from "./Button/Button";
import { AppContainer } from "./App.styled";
import fetchApi from "../components/service/api";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";

axios.defaults.baseURL = "https://pixabay.com/api/";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [alt, setAlt] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [totalHits, setTotalHits] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    async function fetchImages() {
      setStatus("pending");
      try {
        const imageData = await fetchApi(searchQuery, page);
        setTotalHits(imageData.total);
        const imagesHits = imageData.hits;
        if (!imagesHits.length) {
          toast.warning(
            "No images were found for your search, please try something else.",
            { transition: Zoom, position: "top-right" }
          );
        }
        setImages((prevImg) => [...prevImg, ...imagesHits]);
        setStatus("resolved");

        if (page > 1) {
          const CARD_HEIGHT = 300; // preview image height
          window.scrollBy({
            top: CARD_HEIGHT * 2,
            behavior: "smooth",
          });
        }
      } catch (error) {
        setError(new Error(`Sorry something went wrong. ${error.message}`));
        toast.error(`Sorry something went wrong.`);
        setStatus("rejected");
      }
    }
    fetchImages();
  }, [searchQuery, page]);

  const handleFormSubmit = (query) => {
    if (searchQuery === query) {
      return;
    }
    resetState();
    setSearchQuery(query);
  };
  const handleSelectedImage = (largeImageUrl, tags) => {
    setSelectedImage(largeImageUrl);
    setAlt(tags);
  };

  const resetState = () => {
    setSearchQuery("");
    setPage(1);
    setImages([]);
    setSelectedImage(null);
    setAlt(null);
    setStatus("idle");
    setTotalHits(null); // try
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <AppContainer>
      <SearhBar onSubmit={handleFormSubmit} />
      <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
      {status === "pending" && <Loader />}
      {error && (
        <h1 style={{ color: "orangered", textAlign: "center" }}>
          {error.message}
        </h1>
      )}
      {images.length > 0 && (
        <ImageGallery images={images} selectedImage={handleSelectedImage} />
      )}
      {images.length > 0 && images.length !== totalHits && (
        <LoadMoreButton onClick={loadMore} />
      )}
      {selectedImage && (
        <Modal selectedImage={selectedImage} tags={alt} onClose={closeModal} />
      )}
    </AppContainer>
  );
}

export default App;
