import { useEffect, useState } from "react";

const WatchList = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWatchListImages = async () => {
      const watchListIds = JSON.parse(localStorage.getItem("watchList")) || [];

      if (watchListIds.length > 0) {
        try {
          const response = await fetch("http://localhost:3000/getImages");
          if (!response.ok) throw new Error("Failed to fetch images");
          const allImages = await response.json();
          const watchListImages = allImages.filter((image) =>
            watchListIds.includes(image._id),
          );
          setImages(watchListImages);
        } catch (error) {
          console.error("Error fetching watchlist images:", error);
          setError("Failed to load images. Please try again later.");
        }
      }
    };

    fetchWatchListImages();
  }, []);

  return (
    <div className="sm:columns-1 md:columns-4 gap-3 m-2">
      {error && <p className="text-center text-red-500">{error}</p>}
      {images.length > 0
        ? images.map((i) => (
            <div
              key={i._id}
              className="w-full aspect-auto mb-2 relative group cursor-zoom-in"
            >
              <img
                className="rounded-2xl w-full"
                src={i.imageUrl}
                alt={i.title}
              />
              <div className="invisible absolute bottom-3 right-3 group-hover:visible">
                <button className="bg-slate-50 rounded-full h-8 w-8 text-center">
                  ...
                </button>
              </div>
            </div>
          ))
        : !error && <p className="text-center">No images in watchlist</p>}
    </div>
  );
};

export default WatchList;
