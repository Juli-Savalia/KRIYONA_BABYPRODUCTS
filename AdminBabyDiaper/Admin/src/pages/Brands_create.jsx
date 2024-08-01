import React from 'react'
import TopHedaer from '../Components/TopHedaer'
import FooterCopyright from '../Components/FooterCopyright'
import { Link } from 'react-router-dom'
const Brands_create = () => {
  return (
    <div className='background_color overflow-auto h-screen'>
    <TopHedaer></TopHedaer>
    <section className='product_create pt-10 pb-20'>
      <div className="container">
        <button className='rounded-md bg-indigo-500 w-40 h-12 mb-4'>
          <Link className='text-white text-decoration-none text-md' to={'/Create_Category'}>+ Create Category</Link>
        </button>
          <div className="flex flex-wrap items-center">
              <div className="col-12 bg-white p-3 rounded-md">
                  <h3 className='font-semibold text-2xl'>Create Brand</h3>
                  <form type='submit' className="py-4 flex flex-wrap items-center justify-center">
                      {/* 1 */}
                      <div className="px-2 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                          <div className='w-100'>
                          <label className='text-sm'>Brand Name</label>
                          <input type="text" placeholder='Add Brand Name' className='text-xs block my-3 w-100  p-3 background_color rounded-md outline-none' required/>
                          </div>
                      </div>
                      <div className="px-2 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                          <div className='w-100'>
                          <label className='text-sm'>Brand Icon</label>
                          <input type="text" placeholder='Add FontAwesome Class' className='block my-3 w-100 text-xs p-3 background_color rounded-md outline-none' required/>
                          </div>
                      </div>
                      <div className="px-2 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                          <div className='w-100'>
                          <label className='text-sm'>Brand Logo (use small logo .png file)</label>
                          <input type="file" className='block my-3 w-100 text-xs p-3 background_color rounded-md outline-none' required/>
                          </div>
                      </div>
                      <div className='w-20 me-auto'>
                          <button className='rounded-md ms-2 w-100 h-10 bg-indigo-500'>
                              <Link className='text-white text-decoration-none'>Save</Link>
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </section>
    <FooterCopyright></FooterCopyright>
  </div>
  )
}

export default Brands_create
