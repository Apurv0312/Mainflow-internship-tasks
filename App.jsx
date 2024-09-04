import "./styles.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function App() {
  const images = [
    {
      original: "https://picsum.photos/id/381/1000/600/",
      thumbnail: "https://picsum.photos/id/381/250/150/"
    },
    {
      original: "https://picsum.photos/id/249/1000/600/",
      thumbnail: "https://picsum.photos/id/249/250/150/"
    },
    {
      original: "https://picsum.photos/id/434/1000/600/",
      thumbnail: "https://picsum.photos/id/434/250/150/"
    },
    {
      original: "https://picsum.photos/id/57/1000/600/",
      thumbnail: "https://picsum.photos/id/57/250/150/"
    },
    {
      original: "https://picsum.photos/id/406/1000/600/",
      thumbnail: "https://picsum.photos/id/406/250/150/"
    },
    {
      original: "https://picsum.photos/id/502/1000/600/",
      thumbnail: "https://picsum.photos/id/502/250/150/"
    }
  ];

  return (
    <div className="App">
     <h1>The Visual Odyssey</h1>
      <p><i>Discover the mesmerizing beauty of nature captured through the lens of our gallery. From the serene landscapes of lush green valleys to the majestic views of snow-capped mountains, our collection brings you closer to the wonders of the natural world.</i></p>
      <ImageGallery
        items={images}
        showPlayButton={true}
        showFullscreenButton={true}
        slideInterval={1000}
        slideOnThumbnailOver={true}
        showIndex={true}
        onPlay={() => {
          alert("slideshow is now playing!");
        }}
      />
    </div>
  );
}