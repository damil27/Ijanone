import "./App.css";

import bg from "./assets/images/BG-1.png";
import play from "./assets/images/play.png"

function App() {
  return (
    <>
      <div>
        <nav className="container mx-auto py-6  flex justify-between items-center ">
          <div>
            {/* logo  */}
            foltFoundation i
          </div>
          <div>
            {/* link  */}
            <ul className="flex justify-center gap-5">
              <li>Home</li>
              <li>What we do</li>
              <li>Media</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            {/* button  */}
            <button className="bg-black text-white py-3 px-6 rounded-lg font-bold ">
              Donate
            </button>
          </div>
        </nav>
        {/* hero banner start here  */}
        <section
          className="h-[32rem]"
          style={{
            background: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto relative ">
            <div className=" absolute top-[5rem]">
              <div>
                {/* header */}
                <h1 className="text-white text-4xl font-bold ">
                  Inclusive care for <br /> children with special <br /> needs
                </h1>
              </div>
              <div className="mt-[3.5rem] flex items-center justify-start ">
                {/* button and play  */}
                <button className="bg-white py-2  px-4 rounded mr-3 ">
                  what we do
                </button>
                <div className="text-white flex gap-4 ">
                  <img src={play} alt="" />
                  <p>

                  play video
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
