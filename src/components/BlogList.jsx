import PropTypes from "prop-types";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const BlogList = ({ posts }) => {
  // State for search and category filtering
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div>
      {/* Search and category filter input elements */}
      <div className="mb-2 md:w-full p-2 px-10 flex flex-col md:flex-row justify-end md:space-x-3 space-y-2 md:space-y-0 mx-auto">
        <input
          className="border border-gray-400 outline-none px-2"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          placeholder="Search..."
          type="text"
        />
        <select
          className="px-2 border border-gray-400 outline-none"
          name="Category"
          id="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="">--Choose an option--</option>
          {posts.map((post) => (
            <option key={post.id} value={post?.attributes.category}>
              {post?.attributes.category}
            </option>
          ))}
        </select>
      </div>
      <hr className="border-[#050505] mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-1 px-10 gap-10 gap-y-16 pb-24">
        {posts
          .filter((post) => {
            if (
              (post?.attributes.headline
                .toLowerCase()
                .includes(search.toLowerCase()) ||
                search === "") && // Include this condition to check if search is empty
              (category === "" || post?.attributes.category === category) // Filter by selected category
            ) {
              return post;
            } else {
              return false;
            }
          })
          .map((post) => (
            <div
              key={post.id}
              className="border p-4 shadow-md rounded-lg cursor-pointer group"
            >
              <div className="relative w-full h-80">
                {post.attributes?.newsIcon && (
                  <img
                    style={{ border: "1px solid black", borderRadius: '10px' }}
                    className=" shadow-md object-cover mb-1 w-56 h-56 origin-center mx-auto lg:object-center"
                    src={post?.attributes?.newsIcon}
                    alt={post?.attributes?.category}
                  />
                )}
                <div className="absolute bottom-0 w-full bg-blue-300 rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold text-lg">
                      {post?.attributes?.headline}
                      <span className="text-black-300">: {post?.attributes?.newsSource}</span>
                    </p>

                    <p className="font-bold text-lg">
                      {new Date(post?.attributes?.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                <p className="text-lg font-bold">
                  <span className="text-white m-1 bg-blue-300 rounded-lg p-1 font-bold">#{post?.attributes?.hashtags}  </span>
                  <span className="text-white bg-blue-300 rounded-lg p-1 font-bold"> #{post?.attributes?.category}</span>
                </p>
              </div>
              <a
                href={post?.attributes?.newsIcon}
                className="mt-5 text-lg font-bold flex justify-center items-center group-hover:underline"
              >
                Read Post
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

BlogList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default BlogList;
