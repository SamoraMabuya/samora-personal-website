const Hero = () => {
  return (
    <div className="md:w-10/12 container mx-auto flex flex-col items-center justify-between mt-20 px-4 lg:flex-row ">
      <hr />
      <div className="container mx-auto">
        <div className="border-t border-b border-gray-300 py-8">
          <h1 className="text-lg md:text-4xl text-center md:text-left">
            Samora is a frontend developer living in South Africa and focused on
            creating the best web experiences for users.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
