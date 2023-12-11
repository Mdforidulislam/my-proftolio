import Form from "./Form";

const Contact = () => {
  return (
    <div className=" mt-10 px-10">
      <div className=" p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Contact Information</h1>
            <p className="text-gray-600">Feel free to reach out to us!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Our Office</h2>
              <p className="text-gray-700 mb-2">123 Main Street</p>
              <p className="text-gray-700 mb-2">City, Country</p>
              <p className="text-gray-700 mb-2">Email: info@example.com</p>
              <p className="text-gray-700">Phone: +123 456 7890</p>
            </div>

            {/* Map Placeholder (replace with actual map component) */}
            
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Form></Form>
      </div>
    </div>
  );
};

export default Contact;
