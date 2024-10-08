import { useEffect, useState } from "react";

const Body = ({ searchTerm }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    try {
      const response = await fetch("http://localhost:3000/getImages");
      if (!response.ok) throw new Error("Failed to fetch images");
      const imagesData = await response.json();
      setImages(imagesData);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/deleteImage/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete image");
      const result = await response.json();
      console.log("Delete result:", result);

      getImages();
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const handleWatchList = (id) => {
    const existingWatchList =
      JSON.parse(localStorage.getItem("watchList")) || [];
    if (!existingWatchList.includes(id)) {
      existingWatchList.push(id);
      localStorage.setItem("watchList", JSON.stringify(existingWatchList));
    }
  };
  const filteredImages = images.filter(
    (image) =>
      image.title &&
      image.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="sm:columns-1 md:columns-4 gap-3 m-2">
      {filteredImages.length > 0 ? (
        filteredImages.map((i) => (
          <div
            key={i._id}
            className="w-full aspect-auto mb-2 relative group cursor-zoom-in"
          >
            <img
              className="rounded-2xl w-full"
              src={i.imageUrl}
              alt={i.title}
            />
            <div className="invisible absolute top-3 right-5 group-hover:visible">
              <button
                className="bg-red-600 text-white rounded-3xl p-3 font-bold"
                onClick={() => handleDelete(i._id)}
              >
                Delete
              </button>
            </div>
            <div className="invisible absolute bottom-3 right-3 group-hover:visible">
              <button
                className="bg-red-600 text-white rounded-3xl p-3 font-bold"
                onClick={() => handleWatchList(i._id)}
              >
                WatchList
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p className=" text-center">No images found</p>
        </div>
      )}
    </div>
  );
};

export default Body;
