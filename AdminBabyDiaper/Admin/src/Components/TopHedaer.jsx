import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { ImProfile } from "react-icons/im";



const TopHedaer = () => {
  return (
    <div className="pb-3">
      <div className="bg-white px-4 py-2">
        <div className="flex flex-wrap items-center content-between">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 h-16 flex items-center">
            <h5>Dashboard</h5>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 h-16">
            <div className="w-100 flex items-center h-100 w-100 justify-content-end">
              <div className="flex items-center h-100 pe-2 border-e-2 border-gray-200 border-spacing-1">
                <button className="w-7 h-7 border-1 border-gray-200 rounded-md mx-2">
                  <a
                    href="#"
                    className="text-decoration-none text-black leading-[1px] text-xl"
                  >
                    +
                  </a>
                </button>
                <button className="w-7 h-7 border-1 border-gray-200 rounded-md mx-2">
                  <a
                    className="text-decoration-none text-black leading-[1px] text-lg"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                  >
                    {" "}
                    <IoMenuSharp className="mx-auto" />
                  </a>
                </button>
              </div>
              <div className="flex items-center h-100">
                <button className="w-7 h-7 mx-2">
                  <a
                    href="#"
                    className="text-decoration-none text-black leading-[1px] text-lg"
                  >
                    {" "}
                    <CiMail className="mx-auto" />
                  </a>
                </button>
                <button className="w-7 h-7 mx-2">
                  <a
                    href="#"
                    className="text-decoration-none text-black leading-[1px] text-lg"
                  >
                    {" "}
                    <FaRegBell className="mx-auto" />
                  </a>
                </button>
                <button className="w-7 h-7 mx-2">
                  <a
                    href="#"
                    className="text-decoration-none text-black leading-[1px] text-lg"
                  >
                    {" "}
                    <IoSettingsOutline className="mx-auto" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* offcanvas */}
        <div>
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul>
                <li className="py-3 rounded-md px-3 flex items-center">
                  <FaHome className="text-blue-600 me-3 text-sm" />
                  <Link
                    className="text-dark font-semibold text-decoration-none text-sm"
                    to={"/"}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="w-100 py-3 rounded-md px-3 block">
                  {/* faq */}
                  <div className="faq-drawer">
                    <input
                      className="faq-drawer__trigger"
                      id="faq-drawer"
                      type="checkbox"
                    />
                    <label className="w-100 font-semibold text-sm faq-drawer__title flex items-center justify-between" htmlFor="faq-drawer">
                    <div className="flex items-center">
                    <BsShop className="text-blue-600 me-3 text-sm" />
                    Products
                    </div>
                      <IoIosArrowForward />
                    </label>
                    <div className="faq-drawer__content-wrapper">
                      <div className="faq-drawer__content">
                       <ul className="p-0">
                        <li className="py-3 ps-4">
                            <Link className="text-decoration-none text-black text-xs" to={'/All_Products'}>All Products</Link>
                        </li>
                        <li className="pb-3 ps-4">
                            <Link className="text-decoration-none text-black text-xs" to={'/create_Products'}>Create Products</Link>
                        </li>
                        <li className="pb-3 ps-4">
                            <Link className="text-decoration-none text-black text-xs" to={'/Create_Category'}>Create Categories</Link>
                        </li>
                        <li className="pb-3 ps-4">
                            <Link className="text-decoration-none text-black text-xs" to={'/create_brands'}>Create Brands</Link>
                        </li>
                       </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="py-3 rounded-md px-3 flex items-center">
                  <LuShoppingCart
                  className="text-blue-600 me-3 text-sm" />
                  <Link
                    className="text-dark font-semibold text-decoration-none text-sm"
                    to={"/orderlist"}
                  >
                    Order Lists
                  </Link>
                </li>
                <li className="py-3 rounded-md px-3 flex items-center">
                  <FaRegUser
                  className="text-blue-600 me-3 text-sm" />
                  <Link
                    className="text-dark font-semibold text-decoration-none text-sm"
                    to={"/Customerorder"}
                  >
                    Customers & Orders
                  </Link>
                </li>
                <li className="py-3 rounded-md px-3 flex items-center">
                  <FaRegUserCircle
                  className="text-blue-600 me-3 text-sm" />
                  <Link
                    className="text-dark font-semibold text-decoration-none text-sm"
                    to={"/manageusers"}
                  >
                    Manage Users
                  </Link>
                </li>
                <li className="py-3 rounded-md px-3 flex items-center">
                  <BiCategory
                  className="text-blue-600 me-3 text-sm" />
                  <Link
                    className="text-dark font-semibold text-decoration-none text-sm"
                    to={"/category"}
                  >
                    Categories
                  </Link>
                </li>
                <li className="py-3 rounded-md px-3 flex items-center">
                  <ImProfile
                  className="text-blue-600 me-3 text-sm" />
                  <Link
                    className="text-dark font-semibold text-decoration-none text-sm"
                    to={"/profile"}
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHedaer;
