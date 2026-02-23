
const Contact = () => {
    
    const handleFormSubmit = (formData) => {
      const formInputData = Object.fromEntries(formData.entries());
      console.log(formInputData);
    }; 

  return (
    <section className="bg-black text-white py-16 sm:py-20 lg:py-24">

      {/* aligned container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* narrow form */}
        <div className="max-w-xl mx-auto">

          <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-10">
            Contact Us
          </h1>

          <form action={handleFormSubmit} className="flex flex-col gap-6">

            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-400 transition" />
                  
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-400 transition"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Enter Your Message"
              required
              className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-400 transition resize-none"
            />

            <button type="submit" className="w-full py-3 rounded-full border border-gray-600 hover:bg-white hover:text-black transition duration-300">
              Submit
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;