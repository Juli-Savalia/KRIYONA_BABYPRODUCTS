import React from 'react'
import TopHedaer from '../Components/TopHedaer'
import { Link } from 'react-router-dom'
import FooterCopyright from '../Components/FooterCopyright'

const Products_create = () => {
  return (
    <div className='background_color'>
      <TopHedaer></TopHedaer>
      <section className='product_create pt-10 pb-20'>
        <div className="container">
            <div className="flex flex-wrap items-center">
                <div className="col-12 bg-white p-3 rounded-md">
                    <h3 className='font-semibold text-2xl'>Create Product</h3>
                    <form type='submit' className="py-4 flex flex-wrap items-center justify-center">
                        {/* 1 */}
                        <div className="px-2 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className='w-100'>
                            <label className='text-sm'>Product Name</label>
                            <input type="text" placeholder='Add Product Title' className='text-xs block my-3 w-100  p-3 background_color rounded-md outline-none' required/>
                            </div>
                        </div>
                        <div className="px-2 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className='w-100'>
                            <label className='text-sm'>Product Price</label>
                            <input type="number" placeholder='Add Product Price' className='block my-3 w-100 text-xs p-3 background_color rounded-md outline-none' required/>
                            </div>
                        </div>
                        <div className="px-2 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className='w-100'>
                            <label className='text-sm'>Quantity</label>
                            <input type="number" placeholder='Add Product Quantity' className='block my-3 w-100 text-xs p-3 background_color rounded-md outline-none' required/>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="px-2 my-3 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className='w-100'>
                            <label className='text-sm'>Category</label>
                            <select type="text" placeholder='Add Product Title' className='text-xs block my-3 w-100  p-3 background_color rounded-md outline-none' required>
                            <option value="">1</option>    
                            <option value="">2</option>    
                            <option value="">3</option>    
                            <option value="">4</option>    
                            <option value="">5</option>    
                            <option value="">6</option>    
                            </select>
                            </div>
                        </div>
                        <div className="px-2 my-3 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className='w-100'>
                            <label className='text-sm'>Brand</label>
                            <input type="number" placeholder='Add Product Brand' className='block my-3 w-100 text-xs p-3 background_color rounded-md outline-none' required/>
                            </div>
                        </div>
                        <div className="px-2 my-3 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className='w-100'>
                            <label className='text-sm'>Product Main Image (276 * 276)</label>
                            <input type="file" id="imageInput" accept="image/*" placeholder='Upload File' className='border-0 block my-3 w-100 text-xs p-3 background_color rounded-md outline-none' required/>
                            </div>
                        </div>
                        <div className="me-auto px-2 my-3 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className='w-100'>
                            <label className='text-sm'>Upload Multiple Image (376 * 376)</label>
                            <input type="file" id="imageInput" accept="image/*" placeholder='Upload File' className='border-0 block my-3 w-100 text-xs p-3 background_color rounded-md outline-none' required/>
                            </div>
                        </div>
                        <div className="px-2 my-3 col-12">
                            <div className='w-100'>
                            <label className='text-sm'>Description</label>
                            <textarea type="text" placeholder='Add Product Details..' rows={5} className='border-0 block my-3 w-100 text-xs p-3 background_color rounded-md outline-none' required/>
                            </div>
                        </div>
                        <div className='w-20 me-auto'>
                            <button className='rounded-md w-100 h-10 bg-indigo-500'>
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

export default Products_create
