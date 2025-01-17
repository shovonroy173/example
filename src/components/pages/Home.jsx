import MultiCardCarousel from "./Carousel";


const Home = () => {
  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];
  return (
    <div>
     <MultiCardCarousel slides={slides} />
     <MultiCardCarousel slides={slides} />
     <MultiCardCarousel slides={slides} />
     <MultiCardCarousel slides={slides} />
     <MultiCardCarousel slides={slides} />
     <MultiCardCarousel slides={slides} />
     <MultiCardCarousel slides={slides} />
     

    </div>
  );
};

export default Home;
