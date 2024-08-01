import React from "react";
import TopHedaer from "../Components/TopHedaer";
import FooterCopyright from "../Components/FooterCopyright";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div className="background_color overflow-auto h-screen">
      <TopHedaer></TopHedaer>
      <section className="product_create pt-6 pb-20">
        <div className="container">
          <button className="rounded-md bg-indigo-500 w-40 h-12 mb-4">
            <Link
              className="text-white text-decoration-none text-md"
              to={"/Create_Category"}
            >
              + Create Category
            </Link>
          </button>
          <div className="flex flex-wrap items-center">
            <div className="col-12 bg-white p-3 rounded-md">
              <div className="mb-3 border border-1 border-white-50 px-4 py-2 rounded-md col-5 flex items-center">
                <IoIosSearch className="text-slate-400" />
                <input
                  type="text"
                  placeholder="Search Product"
                  className="ps-2 outline-none w-100"
                />
              </div>
              <h3 className="text-start py-4 text-2xl">All Category</h3>
              {/* pagination */}
              <nav aria-label="Page navigation example">
                <table className="table my-7 px-3 table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Category Name</th>
                      <th scope="col">Category icon Class</th>
                      <th>Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                    </tr>
                  </tbody>
                </table>

                <ul className="pagination pt-6 justify-end">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="juli">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <FooterCopyright />
    </div>
  );
};

export default Categories;
