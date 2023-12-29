const HomePageHeading = () => {
  return (
    <div className="py-10">
      <h1 className="text-6xl font-thin leading-snug	">
        <span className="text-black font-bold">
          Grammar Gems & IELTS Hacks.
        </span>{" "}
        Unveiling
        <br />
        Language Mastery at English Edge Hub.
      </h1>
      <div className="flex items-center mt-5">
        <div className="bg-gray-100 rounded-l-3xl">
          <input
            type="text"
            placeholder="Your email address "
            className="py-5 px-5 rounded-l-3xl bg-gray-100 outline-none"
          />
          <button className="bg-black text-white py-5 px-5 rounded-3xl">
            Subscribe
          </button>
        </div>
        <p className="pl-5 text-gray-600 text-sm">
          Subscribe for Exclusive Updates <br /> and Members-Only Content
        </p>
      </div>
    </div>
  );
};

export default HomePageHeading;
