import React from 'react'
import { Link } from "react-router-dom";
import TopHedaer from "../Components/TopHedaer";
import FooterCopyright from "../Components/FooterCopyright";
import { IoIosSearch } from "react-icons/io";
const ManageUsers = () => {
  return (
    <div className="background_color overflow-auto h-screen">
      <TopHedaer></TopHedaer>
      <section className="product_create pt-10 pb-20">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="col-12 bg-white p-3 rounded-md">
              <div className="mb-3 border border-1 border-white-50 px-4 py-2 rounded-md col-6 flex items-center">
                <IoIosSearch className="text-slate-400" />
                <input
                  type="text"
                  placeholder="Search List..."
                  className="ps-2 outline-none w-100"
                />
              </div>
              {/* pagination */}
              <nav aria-label="Page navigation example">
                <table className="table my-7 px-3 table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Role</th>
                      <th scope="col">Phone</th>
                      <th>Join Date
                      </th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
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
  )
}

export default ManageUsers
