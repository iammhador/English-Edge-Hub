const HomePageHeading = () => {
  return (
    <div className="py-10">
      <h1 className="text-6xl font-thin leading-snug text-black">
        <span className="text-black font-bold k">
          Grammar Gems & IELTS Hacks.
        </span>{" "}
        Unveiling
        <br />
        Language Mastery at English Edge Hub.
      </h1>
      <div className="flex items-center mt-5">
        <div className="bg-White rounded-l-3xl rounded-r-3xl">
          <input
            type="text"
            placeholder="Your email address "
            className="py-5 px-5 rounded-l-3xl outline-none bg-White placeholder:text-Secondary"
          />
          <button className="text-white py-5 px-7 rounded-3xl bg-Primary text-White hover:bg-black">
            Subscribe
          </button>
        </div>
        <p className="pl-5 text-gray-600 text-sm text-Secondary">
          Subscribe for Exclusive Updates <br /> and Members-Only Content
        </p>
      </div>
    </div>
  );
};

export default HomePageHeading;
