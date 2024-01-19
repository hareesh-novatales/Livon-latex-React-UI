import React from "react";
import './Header.css';
import mattressCategory from './../images/catg mattress.jpg';
import PillowCategory from './../images/categories pillows.jpg';
import TopperCategory from './../images/mattress-topper-being-laid-on-260nw-2299219255.jpg';
import ProtectorCategory from './../images/catg cotton protector.jpg';
import KidsCategory from './../images/catg kids.jpg';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
function Categories() {
   return (
      <div className="categories" >
         <div className="cat-heading">
            <h2>Categories</h2>
         </div>
         <div className="container-fluid">
            <div>
               <div className="row">
                  {/* <div className="col-lg-1"></div> */}
                  <div className="col">
                     <div className="catImage ">
                        <div className="relative">
                           <img
                              src={mattressCategory}
                              alt="mattress-category" className='img-thumbnail'
                           />
                           <div className="custom-shape-divider-bottom-1635508836">
                              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                 <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                              </svg>
                           </div>
                           <div className="card-name">
                              <h2>Mattress</h2>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col">
                     <div className="catImage">
                        <div className="relative">
                           <img
                              src={PillowCategory}
                              alt="pillow-category" className='img-thumbnail'
                           />
                           <div className="custom-shape-divider-bottom-1635508836">
                              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                 <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                              </svg>
                           </div>
                           <div className="card-name">
                              <h2>Pillows</h2>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="col">
                     <div className="catImage topper-image">
                        <div className="relative">
                           <img
                              src={TopperCategory}
                              alt="Toppers-category" className='img-thumbnail '
                           />
                           <div className="custom-shape-divider-bottom-1635508836">
                              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                 <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                              </svg>
                           </div>
                           <div className="card-name">
                              <h2>Toppers</h2>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="col">
                     <div className="catImage">
                        <div className="relative">
                           <img
                              src={ProtectorCategory}
                              alt="Protectors-category" className='img-fluid rounded'
                           />
                           <div className="custom-shape-divider-bottom-1635508836">
                              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                 <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                              </svg>
                           </div>
                           <div className="card-name">
                              <h2>Beddings</h2>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="col">
                     <div className="catImage ">
                        <div className="relative">
                           <img
                              src={KidsCategory}
                              alt="Kids-category" className='img-fluid rounded '
                           />
                           <div className="custom-shape-divider-bottom-1635508836">
                              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                 <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                              </svg>
                           </div>
                           <div className="card-name">
                              <h2>kids</h2>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );

}
export default Categories;