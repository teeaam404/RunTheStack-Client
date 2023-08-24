import Container from "../../Shared/Container/Container";
import { useState } from "react";

const QnaSection = () => {
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };

  return (
    <Container>
      <div className="my-10">
        {/* Todo */}
        <h2 className="text-5xl font-bold text-red-300 text-center py-5 my-3">Ask your question?</h2>
        <form>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="category" className="block text-gray-600">
                  Category
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                  name="category"
                >
                  {/* ekhane category loop kore dekhano lagbe */}
                </select>
                <div className="space-y-1 text-sm">
                  <label htmlFor="title" className="block text-gray-600">
                    Title
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-info rounded-md "
                    name="title"
                    id="title"
                    type="text"
                    placeholder="Title"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="title" className="block text-gray-600">
                    Tags
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-info rounded-md "
                    name="tags"
                    id="tags"
                    type="text"
                    placeholder="Add your question related tags"
                    required
                  />
                </div>

                <div className=" p-4 bg-white w-full  m-auto rounded-lg">
                  <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                    <div className="flex flex-col w-max mx-auto text-center">
                      <label>
                        <input
                          onChange={(event) => {
                            handleImageChange(event.target.files[0]);
                          }}
                          className="text-sm cursor-pointer w-36 hidden"
                          type="file"
                          name="image"
                          id="image"
                          accept="image/*"
                          hidden
                        />
                        <div className="bg-primary text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-red-900">
                          {uploadButtonText}
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="description" className="block text-gray-600">
                  Description
                </label>
                <textarea
                  id="description"
                  className="block rounded-md focus:rose-300 w-full h-56 px-4 py-3 text-gray-800  border border-info"
                  name="description"
                  placeholder="Type your problem here"
                ></textarea>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-purple-600"
          >
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
};

export default QnaSection;