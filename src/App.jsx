import "./App.css";

import bg from "./assets/images/BG-1.png";
import play from "./assets/images/play.png";
import about from "./assets/images/about.png";
import l1 from "./assets/images/logo_1.png";
import l2 from "./assets/images/logo_2.png";
import l3 from "./assets/images/logo_3.png";
import l4 from "./assets/images/logo_4.png";
import l5 from "./assets/images/logo_5.png";
import l6 from "./assets/images/logo_6.png";
import I1 from "./assets/images/icon_1.png";
import I2 from "./assets/images/icon_2.png";
import I3 from "./assets/images/icon_3.png";
import I4 from "./assets/images/icon_4.png";
import img3 from "./assets/images/img3.png";
import pro1 from "./assets/images/pro1.png";
import pro2 from "./assets/images/pro2.png";
import pro3 from "./assets/images/pro3.png";
import statistic from "./assets/images/Statistics.png";

function App() {
  return (
    <>
      <div>
        <nav className="container mx-auto py-6 hidden flex justify-between items-center ">
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
                <h1 className=" heading">
                  Inclusive care for <br /> children with special <br /> needs
                </h1>
              </div>
              <div className=" another ">
                {/* button and play  */}
                <button className="bg-white py-2  px-4 rounded mr-3 ">
                  what we do
                </button>
                <div className="text-white flex gap-4 ">
                  <img src={play} alt="" />
                  <p>play video</p>
                </div>
              </div>
            </div>

            <div className="absolute  pr-[90px] mx-auto  top-[24rem] w-full ">
              <div className="   flex  pt-3 justify-center items-center gap-3 ">
                <div className="text-white text-[0.7rem] font-bold">
                  230 children under our care
                </div>
                <div className="h-[.1rem] w-[70%] bg-white "></div>
                <div className="text-white text-[0.7rem] font-bold">
                  58 donations collected
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* hero sectio ends here  */}
        <section>
          <div className="container mx-auto my-7">
            <div className="flex flex-col px-8 md:px-0 md:flex-row justify-center items-center">
              {/* major 1  */}
              <div className="flex-1 mb-8 md:mb-0">
                <h2 className="my-[3rem] leading-3 tracking-wide text-slate-600 font-bold">
                  {" "}
                  Know About Us
                </h2>
                <h2 className="text-3xl font-bold mb-4">
                  We provide a place for <br /> children with special needs
                </h2>
                <p className="mb-5 text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique
                </p>
                <p className="text-slate-500">
                  ‍Duis cursus, mi quis viverra ornare, eros dolor interdum
                  nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh
                  et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                  risus tristique posuere.
                </p>
                <button className=" bg-yellow-300 px-5 py-2 mt-8 rounded ">
                  {" "}
                  Learn more
                </button>
              </div>

              <div className="flex-1  flex justify-end">
                <img
                  src={about}
                  alt="about us image"
                  className="  md:-mt-9 -z-20 "
                />
              </div>
            </div>

            <div className="px-10">
              <h2 className="my-[3rem] leading-3 tracking-wide text-slate-600 font-bold">
                {" "}
                Our support
              </h2>
              <ul className="flex flex-col gap-7 md:gap-0 md:flex-row justify-between items-center ">
                <li>
                  {" "}
                  <img src={l1} alt="" />{" "}
                </li>
                <li>
                  {" "}
                  <img src={l2} alt="" />{" "}
                </li>
                <li>
                  {" "}
                  <img src={l3} alt="" />{" "}
                </li>
                <li>
                  {" "}
                  <img src={l4} alt="" />{" "}
                </li>
                <li>
                  {" "}
                  <img src={l5} alt="" />{" "}
                </li>
                <li>
                  {" "}
                  <img src={l6} alt="" />{" "}
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className=" bg-[#fcedc6]">
          <div className="container mx-auto py-7 px-5 md:px-0">
            <h2 className="my-[3rem] leading-3 tracking-wide text-slate-600 font-bold">
              What we do
            </h2>
            <div className="flex flex-col md:flex-row  items-start  ">
              <div className="flex-1">
                <h2 className="text-4xl py-3 font-bold mb-3 ">
                  Some services we provide for our children
                </h2>
                <p className="mb-8 text-[14px] text-slate-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <ul>
                  <li className="flex justify-start items-start gap-4 mb-4">
                    <img src={I1} alt="" />
                    <div>
                      <h3 className="text-2xl font-bold">Family support</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros.
                      </p>
                    </div>
                  </li>

                  <li className="flex justify-start items-start mb-4 gap-4">
                    <img src={I2} alt="icon2" />
                    <div>
                      <h3 className="text-2xl font-bold">Health benefits</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros.
                      </p>
                    </div>
                  </li>
                  <li className="flex justify-start items-start mb-4 gap-4">
                    <img src={I3} alt="icon3" />
                    <div>
                      <h3 className="text-2xl font-bold">Scholarships</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros.
                      </p>
                    </div>
                  </li>
                  <li className="flex justify-start items-start mb-4 gap-4">
                    <img src={I4} alt="icon 4" />
                    <div>
                      <h3 className="text-2xl font-bold">Therapy</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex-1 flex justify-end">
                <img src={img3} alt=" What we do" />
              </div>
            </div>
          </div>
        </section>

        <section className="my-10">
          <div className="container mx-auto px-5 md:px-0">
            <h2 className="my-[3rem] leading-3 tracking-wide text-slate-600 font-bold">
              Project we have done{" "}
            </h2>
            <h1 className="text-4xl py-3 font-bold mb-3 md:w-[30rem]">
              We are creating a place where children with special needs can
              thrive
            </h1>
            <div className="flex md:flex-row flex-col gap-6 md:gap-0 justify-between">
              <div
                className="w-[20rem] md:w-[26rem] h-[27.5rem] rounded-md relative"
                style={{
                  background: `url(${pro1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="text-white absolute top-20 px-4 ">
                  <h3 className="text-3xl font-bold my-4">
                    Mission smile 1k: <br /> Outdoor charity
                  </h3>
                  <p className="my-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                  <button className="py-3 px-4 bg-white text-black rounded-md mt-6">
                    {" "}
                    Learn More
                  </button>
                </div>
              </div>
              <div
                className="w-[20rem] md:w-[26rem] h-[27.5rem] rounded-md relative"
                style={{
                  background: `url(${pro2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="text-white absolute top-20 px-4 ">
                  <h3 className="text-3xl font-bold my-4">
                    Mission smile 1k: <br /> Outdoor charity
                  </h3>
                  <p className="my-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                  <button className="py-3 px-4 bg-white text-black rounded-md mt-6">
                    {" "}
                    Learn More
                  </button>
                </div>
              </div>
              <div
                className="w-[20rem] md:w-[26rem] h-[27.5rem] rounded-md relative"
                style={{
                  background: `url(${pro3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="text-white absolute top-20 px-4 ">
                  <h3 className="text-3xl font-bold my-4">
                    Mission smile 1k: <br /> Outdoor charity
                  </h3>
                  <p className="my-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                  <button className="py-3 px-4 bg-white text-black rounded-md mt-6">
                    {" "}
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistic   section  */}
        <section className="bg-black">
          <div className="container mx-auto py-[3.5rem] flex md:flex-row flex-col  items-center">
            <div className="flex-1">
              <h2 className="text-4xl text-white py-3 font-bold mb-3 md:w-[30rem]">
                How we spend your donations and where it goes
              </h2>
              <p className="text-slate-400 my-6">
                We understand that when you make a donation, you want to know
                exactly where your money is going and we pledge to be
                transparent.
              </p>
              <div className="text-white">
                
              </div>
            </div>
            <div  className="flex-1 flex justify-end">
              <img src={statistic} alt="statistic image" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
