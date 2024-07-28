import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
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
                <li className="py-2 flex items-center">
                <FaHome className="text-blue-600 me-3 text-sm"/>
                    <Link className="text-dark text-decoration-none text-sm" to={'/'}>Dashboard</Link>
                </li>
                <li className="py-2 flex items-center">
                <div class="accordion-item bg-transparent border-0 py-3">
                        <h2 class="accordion-header py-3 fs-5" id="flush-headingOne">
                            <button
                                class="w-100 align-items-center d-flex bg-transparent border-0 outline-none text-white-50  collapsed"
                                type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="false" aria-controls="flush-collapseOne">
                                <BsShop className="text-blue-600 me-3 text-sm"/>
                                <Link className="text-black text-decoration-none text-sm" to={'/Products'}>Products</Link>
                                <a href="#" class="text-decoration-none text-black ms-auto">
                                    <IoIosArrowDown></IoIosArrowDown>
                                </a>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul class="p-0 m-0">
                                    <li class="py-3">
                                        <a href="#" class="text-decoration-none text-dark">
                                            Accordian
                                        </a>
                                    </li>
                                    <li class="py-3">
                                        <a href="#" class="text-decoration-none text-dark">
                                            Breadcrumb
                                        </a>
                                    </li>
                                    <li class="py-3">
                                        <a href="#" class="text-decoration-none text-dark">
                                            Cards
                                        </a>
                                    </li>
                                    <li class="py-3">
                                        <a href="#" class="text-decoration-none text-dark">
                                            Carseoul
                                        </a>
                                    </li>
                                    <li class="py-3">
                                        <a href="#" class="text-decoration-none text-dark">
                                            Collapse
                                        </a>
                                    </li>
                                    <li class="py-3">
                                        <a href="#" class="text-decoration-none text-dark">
                                            ListGroup
                                        </a>
                                    </li>
                                    <li class="py-3">
                                        <a href="#" class="text-decoration-none text-dark">
                                            Navs & Tabs
                                        </a>
                                    </li>
                                    <li class="py-3">
                                        <a href="#" class="text-decoration-none text-dark">
                                            Pagination
                                        </a>
                                    </li>
                                    <li class="py-3">
                                        <a href="#" class="text-decoration-none text-dark">
                                            Placeholders
                                        </a>
                                    </li>
                                    <li class="py-3">
                                        <a href="#" class="text-decoration-none text-dark">
                                            Popovers
                                        </a>
                                    </li>
                                    <li class="py-3">
                                        <a href="#" class="text-decoration-none text-dark">
                                            Progress
                                        </a>
                                    </li>
                                    <li class="py-3">
                                        <a href="#" class="text-decoration-none text-dark">
                                            Spinners
                                        </a>
                                    </li>
                                    <li class="py-3">
                                        <a href="#" class="text-decoration-none text-dark">
                                            Tables
                                        </a>
                                    </li>
                                    <li class="py-3">
                                        <a href="#" class="text-decoration-none text-dark">
                                            Tooltips
                                        </a>
                                    </li>
                                    <li class="py-3">
                                        <a href="#" class="text-decoration-none text-dark">
                                            Nav
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                
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
