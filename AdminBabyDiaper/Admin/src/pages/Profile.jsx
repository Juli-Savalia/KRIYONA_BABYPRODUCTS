import React from "react";
import { Link } from "react-router-dom";
import TopHedaer from "../Components/TopHedaer";
import FooterCopyright from "../Components/FooterCopyright";
const Profile = () => {
  return (
    <div className="background_color overflow-auto h-screen">
      <TopHedaer></TopHedaer>
      <section className="product_create pt-10 pb-20">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="col-12 bg-white p-3 rounded-md px-4">
              <h3 className="font-semibold text-2xl">Profile</h3>
              <form
                type="submit"
                className="py-4 flex flex-wrap items-center justify-center"
              >
                {/* img */}
                <div className="flex fex-wrap items-center col-12 pt-3 pb-6">
                  <img
                    src="public/userpic.jpg"
                    alt="user"
                    className="rounded-circle w-[150px] h-[150px]"
                  />
                  <p className="ps-4">
                    <span className="text-lg font-medium block">Name</span>
                    <span className="pt-2 text-gray-400 text-sm">
                      Admin User
                    </span>
                  </p>
                </div>
                {/* upload */}
                <div className="col-12">
                  <div className="w-25">
                    <input
                      type="file"
                      className="block my-3 w-100 text-xs p-3 background_color rounded-md outline-none"
                      required
                    />
                  </div>
                </div>
                {/* 1 */}
                <div className="px-2 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                  <div className="w-100">
                    <label className="text-sm">Name</label>
                    <input
                      type="text"
                      placeholder="Add Name"
                      className="text-xs block my-3 w-100  p-3 background_color rounded-md outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="px-2 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                  <div className="w-100">
                    <label className="text-sm">Contact</label>
                    <input
                      type="tel"
                      placeholder="Add FontAwesome Class"
                      className="block my-3 w-100 text-xs p-3 background_color rounded-md outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="px-2 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                  <div className="w-100">
                    <label className="text-sm">E-Mail</label>
                    <input
                      type="email"
                      placeholder="Your Mail Address"
                      className="block my-3 w-100 text-xs p-3 background_color rounded-md outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="px-2 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 me-auto">
                  <div className="w-100">
                    <label className="text-sm">Gender</label>
                    <select
                      className="block my-3 w-100 text-xs p-3 background_color rounded-md outline-none"
                      required
                    >
                      <option value="Female">Female</option>
                      <option value="Female">male</option>
                      <option value="Female">Others</option>
                    </select>
                  </div>
                </div>
                <div className="py-4 me-auto col-12 flex">
                  <button className="w-25 rounded-md ms-2 h-10 bg-indigo-500">
                    <Link className="text-white text-decoration-none">
                      Update
                    </Link>
                  </button>
              {/* Button trigger modal  */}
                  <button
                type="button"
                className="w-25 rounded-md ms-2 h-10 bg-orange-400 text-white"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Launch static backdrop modal
              </button>
                </div>
              </form>
             

              {/* Modal */}
              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">...</div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Understood
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterCopyright></FooterCopyright>
    </div>
  );
};

export default Profile;
