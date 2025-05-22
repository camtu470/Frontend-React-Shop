const Introduce = () => {
  return (
    <div className=" flex gap-4">
      <div className="w-1/2">
        <img
          src="https://cdn.pixabay.com/photo/2022/05/08/02/37/trading-7181177_1280.jpg"
          alt=""
          className="object-cover"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-2">
        <h1 className="text-4xl font-bold">Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit temporibus officia autem ullam unde repudiandae sit
          excepturi at consectetur exercitationem.
        </p>
      </div>
    </div>
    // <section className="p-6 max-w-4xl mx-auto text-center">
    //   <h2 className="text-2xl font-semibold mb-4">About Us</h2>
    //   <p className="text-gray-600">
    //     We provide the best products for your needs with top-notch service and
    //     fast delivery.
    //   </p>
    // </section>
  );
};

export default Introduce;
