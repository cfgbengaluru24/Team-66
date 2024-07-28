
import Navbar from "./components/Navbar/page";




export default function Home() {
  return (
    <>
      <div data-theme="light">
        <Navbar />
        <section className="carousel w-full h-screen relative">
          {/* Carousel Items */}
          <div id="slide1" className="carousel-item relative w-full h-full">
            <img
              src="https://www.hkf.ind.in/Images/slider/banner-hope_4.jpg"
              className="w-full h-full object-cover"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
              <a
                href="#slide4"
                className="btn btn-circle bg-white bg-opacity-70 hover:bg-opacity-100 text-black"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle bg-white bg-opacity-70 hover:bg-opacity-100 text-black"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full h-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full h-full object-cover"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
              <a
                href="#slide1"
                className="btn btn-circle bg-white bg-opacity-70 hover:bg-opacity-100 text-black"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-circle bg-white bg-opacity-70 hover:bg-opacity-100 text-black"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full h-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="w-full h-full object-cover"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
              <a
                href="#slide2"
                className="btn btn-circle bg-white bg-opacity-70 hover:bg-opacity-100 text-black"
              >
                ❮
              </a>
              <a
                href="#slide4"
                className="btn btn-circle bg-white bg-opacity-70 hover:bg-opacity-100 text-black"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full h-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="w-full h-full object-cover"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
              <a
                href="#slide3"
                className="btn btn-circle bg-white bg-opacity-70 hover:bg-opacity-100 text-black"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-circle bg-white bg-opacity-70 hover:bg-opacity-100 text-black"
              >
                ❯
              </a>
            </div>
          </div>
        </section>

        <section className="my-12 px-6 bg-gray-100 py-12">
          <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
            About Us
          </h2>
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center">
              <img
                src="https://img.daisyui.com/images/stock/photo-1523612088671-e9e4c6e4b423.webp"
                alt="About Us"
                className="w-full md:w-1/3 h-60 object-cover rounded-lg mb-6 md:mb-0 md:mr-6"
              />
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                  Our Mission
                </h3>
                <p className="text-gray-600 mb-4">
                  At [Your Organization Name], our mission is to make a
                  difference in the world by supporting causes that matter. We
                  are dedicated to providing essential resources, fostering
                  education, and creating opportunities for those in need. Our
                  commitment is driven by a passion to uplift communities and
                  empower individuals for a better future.
                </p>
                <p className="text-gray-600">
                  Founded in [Year], we have been working tirelessly to create
                  positive change through various programs and initiatives. Our
                  team of dedicated volunteers and staff work collaboratively to
                  achieve our goals and ensure that every effort contributes to
                  the greater good. Join us in making a lasting impact.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="my-12 px-6">
          <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
            Our Causes
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Cause Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <figure className="relative">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                  alt="Clothing Donation"
                  className="w-full h-60 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
                  <h3 className="text-white text-lg font-semibold">
                    Clothing Donation
                  </h3>
                </div>
              </figure>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Help us provide warm clothes to those in need. Your old
                  clothes can bring warmth and comfort to many.
                </p>
                <a href="./clothes" className="btn btn-primary">
                  Donate
                </a>
              </div>
            </div>
            {/* Cause Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <figure className="relative">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                  alt="Education Donation"
                  className="w-full h-60 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
                  <h3 className="text-white text-lg font-semibold">
                    Education Funding and Scholarships
                  </h3>
                </div>
              </figure>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Your donations help provide educational resources and
                  scholarships to underprivileged children, paving the way for a
                  brighter future.
                </p>
                <button className="btn btn-primary">
                  Donate / Scholarships
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer p-10 bg-neutral text-neutral-content">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Clothing Donation</a>
            <a className="link link-hover">Education Funding</a>
            <a className="link link-hover">Volunteer</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </div>
    </>
  );
}
