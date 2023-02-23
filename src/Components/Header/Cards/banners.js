export default function Banners() {
  const items = [
    {
      title: "BOOK AHEAD & SAVE UP TO 17%",
      image:
        "https://www.hilton.com/im/en/SJDLCHH/3254503/family-pool.jpg?impolicy=crop&cw=5000&ch=3259&gravity=NorthWest&xposition=0&yposition=36&rw=2048&rh=1336",
    },
    {
      title: "MULTIPLY YOUR POINTS",
      image:
        "https://www.hilton.com/im/en/NoHotel/15196711/shutterstock-269455079.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=1280&rh=854",
    },
    {
      title: "FREE BONUS POINTS",
      image:
        "https://www.hilton.com/im/en/NoHotel/13984175/cheers-5000x3333.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=1280&rh=854",
    },
    {
      title: "PARK & STAY WITH HILTON",
      image:
        "https://www.hilton.com/im/en/NoHotel/16156655/shutterstock-673616299.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=1280&rh=854",
    },
    {
      title: "MAKE YOUR STAY EVEN SWEETER",
      image:
        "https://www.hilton.com/im/en/NoHotel/14530273/f-por-157-heroimage-crop3-2.jpg?impolicy=crop&cw=1500&ch=1000&gravity=NorthWest&xposition=0&yposition=0&rw=1280&rh=854",
    },
    {
      title: "BREAKFAST INCLUDED ",
      image:
        "https://www.hilton.com/im/en/MultiHotel/7637864/african-american-father-and-daughter-having-breakfast.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=0&rw=1280&rh=854",
    },
  ];

  return (
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col  w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-black title-font mb-4 text-blue-800">
          Offers that bring you peace of mind
        </h1>
        <p>Find the perfect stay with our exclusive deals.</p>
      </div>
      <div class="flex flex-wrap m-0">
        {items.map((item, index) => {
          return (
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <article class="mx-auto max-w-sm shadow-xl bg-cover bg-center transform duration-500 hover:-translate-y-2 cursor-pointer group">
                  <img
                    alt="gallery"
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src={item.image}
                  />
                  <div class="bg-black bg-opacity-20 px-8 py-20 pt-20 flex flex-wrap flex-col  hover:bg-opacity-75 transform duration-300">
                    <h1 class="text-white text-3xl mb-10 transform translate-y-20 group-hover:translate-y-0 duration-200">
                      {item.title}
                    </h1>
                    <div class="w-1/3 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                  </div>
                </article>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
