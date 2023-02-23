import "./Destination.css";

export default function Destination() {
  return (
    <section class="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
      <section class="relative  md:p-0  ">
        <div class="srilanka-map-box">
          <img
            alt="maldives"
            class=" lazyloaded"
            data-src="https://www.cinnamonhotels.com/themes/cinnamon/images/srilanka.png"
            src="https://www.cinnamonhotels.com/themes/cinnamon/images/srilanka.png"
          />
        </div>
        <img
          class="w-[715px] h-[550px] ml-[153px]  bg-opacity-0"
          src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/misc/cinnamon-life-home-715x550.jpg"
          alt=""
        />
        <div class="card">
          <h5 class="text">Cinnamon Life</h5>
          <p class="my-3 text-justify text-base text-gray-700 leading-relaxed">
            Take a peak at the first-ever Integrated Resort in Sri Lanka opening
            in mid-2021. Envisoned to be the epicentre of modern South Asia, it
            is an urban sanctuary which includes a 5-Star hotel, residential
            units, office spaces and a wide range of shopping and entertainment
            options
          </p>
          <button class="mt-2 md:mt-5 p-3 px-5 bg-indigo-900 text-white  text-sm hover:bg-indigo-800 button">
            Discover More
          </button>
        </div>
      </section>
    </section>
  );
}
