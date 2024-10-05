import React from 'react'
import tools from "../assets/tools.jpg"
import drone from "../assets/drone_01.jpg"
import assets from "../assets/asset_mangement.jpg"
import finish_goods from "../assets/finish_goods.jpg"
import deleveries from "../assets/deleveries.jpg"
const Services = () => {
    return (

        <section className="bg-white p-2 mb-10 -mt-[10rem] min-h-[600px]">
            <h1 className='text-4xl text-[#004c4c] leading-[39px] font-[neu-black] text-center w-[50%] max-md:w-[90%] max-md:text-2xl mx-auto mb-[1rem]'>From Asset Manegement to Tracking System, we offer numerous solutions</h1>
            <div className="py-4 px-2 mx-auto max-w-[80%] max-md:max-w-[100%] sm:py-4 lg:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                    <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                        <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                            <img src={assets} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            <h3 className="text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-sm md:text-xl">Fixed Assets</h3>
                        </a>
                    </div>
                    <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                        <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                            <img src={finish_goods} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            <h3 className=" text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-sm md:text-xl">Finish Goods</h3>
                        </a>
                        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                            <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                <img src={drone} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className=" text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-sm md:text-xl">Drone Tracking</h3>
                            </a>
                            <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                <img src={tools} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className=" text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-sm md:text-xl">Tools</h3>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                        <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                            <img src={deleveries} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            <h3 className=" text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-sm md:text-xl">Deliveries</h3>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Services