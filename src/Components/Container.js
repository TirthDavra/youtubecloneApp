
import ganesh from '../assets/images/ganesh.jpg';
import hero from '../assets/images/hero.png';
import messi from '../assets/images/messi.jpg';
import volvo from '../assets/images/volvo.jpg';
import samsung from '../assets/images/samsung.jpg';
import watch from '../assets/images/watch.jpg';
const Conatiner = () => {
    return (
        <>
            <div className="flex   flex-col lg:ml-60 w-full lg:w-4/5 xl:w-5/6  ">

                {/* <!-- tags pills fixed navbar --> */}
                <div className="tags-container  bg-neutral-800 relative sticky top-14 flex  flex-auto items-center space-x-3 px-5 py-2.5 border-t border-b border-sideBarHoverBg bg-topNavBg bg-opacity-95 z-20 ">

                    {/* <!-- one pill --> */}
                    <a href="#" className="text-sm bg-white py-1.5 px-3 rounded-full text-black">All</a>
                    <a href="#" className="text-sm  bg-neutral-800 hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">CSS</a>
                    <a href="#" className="text-sm  bg-neutral-800 hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">Tailwind</a>
                    <a href="#" className="text-sm  bg-neutral-800 hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">HTML</a>
                    <a href="#" className="text-sm  bg-neutral-800 hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">Programs</a>
                    <a href="#" className="text-sm  bg-neutral-800 hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">Design</a>
                    <a href="#" className="text-sm  bg-neutral-800 hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">Website</a>
                    <a href="#" className="text-sm  bg-neutral-800 hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">ReactJS</a>
                    <a href="#" className="text-sm  bg-neutral-800 hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">UI</a>
                    <a href="#" className="text-sm  bg-neutral-800 hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">Android</a>
                    <a href="#" className="text-sm  bg-neutral-800 hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">Jetpack</a>
                    <a href="#" className="text-sm  bg-neutral-800 hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">Bootstrap</a>
                    <a href="#" className="text-sm  bg-neutral-800 hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">JavaScript</a>
                    <a href="#" className="text-sm  bg-neutral-800 hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">PHP</a>
                    <a href="#" className="text-sm  bg-neutral-800 hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">Git</a>
                    <a href="#" className="text-sm  bg-neutral-800 hover:bg-gray-700 py-1.5 px-3 rounded-full text-white border border-gray-700 transition duration-150">SQL</a>
                    <a href="#" className="text-sm  bg-neutral-800 hover:bg-gray-700 py-1.5 px-3 rounded-full text-white border border-gray-700 transition duration-150">React</a>
                    <a href="#" className="text-sm  bg-neutral-800 hover:bg-gray-700 py-1.5 px-3 rounded-full text-white border border-gray-700 transition duration-150">Flutter</a>
                    <a href="#" className="text-sm  bg-neutral-800 hover:bg-gray-700 py-1.5 px-3 rounded-full text-white border border-gray-700 transition duration-150">Tech</a>
                    <a href="#" className="text-sm  bg-neutral-800 hover:bg-gray-700 py-1.5 px-3 rounded-full text-white border border-gray-700 transition duration-150">Java</a>
                </div>


                {/* <!-- videos container grid layout --> */}
                <div className="videos-container bg-stone-900 grid grid-cols-1 gap-y-6 p-2 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6 sm:p-4 md:grid-cols-3 md:gap-x-2 md:gap-y-6 md:p-4 lg:grid-cols-3 lg:gap-x-2 lg:gap-y-6 lg:p-4 xl:grid-cols-4 xl:gap-x-4 xl:gap-y-10 xl:p-6 h-full bg-mainBg mt-14 sm:mt-12" id="videos-container">
                    {/* <!-- one video card --> */}
                    <div className="flex flex-col  space-y-3 cursor-pointer ">
                        {/* <!-- thumbnail --> */}
                        <a href="#">
                            <div className="relative h-52 sm:h-36 w-full">
                                <img className="relative h-full w-full object-cover" src={ganesh} alt="" />
                                <span className="absolute right-1 bottom-1 p-0.5 px-1 rounded-sm bg-black text-white text-xs bg-opacity-70">38:38</span>
                            </div>
                        </a>
                        {/* <!-- video details --> */}
                        <div className="flex flex-col flex-auto space-y-1.5 mb-3 ">

                            <div className="flex items-center space-x-3">
                                {/* <!-- channel logo --> */}
                                <img className="w-12 h-12 rounded-full object-cover cursor-pointer" src={hero} alt="" />
                                <div className="flex items-start">
                                    <a href="#" className="text-sm text-bold text-white pr-1">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
                                    <i className="material-icons text-white md-21">more_vert</i>
                                </div>
                            </div>

                            {/* <!-- channel link and meta data --> */}
                            <div className="flex flex-col pl-1 sm:pl-0 ml-14">
                                <a href="" className="text-gray-400 text-sm hover:text-white">Jhon Doe</a>
                                <div className="flex space-x-1">
                                    <span className="text-sm text-gray-400">74K views</span>
                                    <span className="text-sm text-gray-400">• 1 month ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col  space-y-3 cursor-pointer ">
                        {/* <!-- thumbnail --> */}
                        <a href="#">
                            <div className="relative h-52 sm:h-36 w-full">
                                <img className="relative h-full w-full object-cover" src={messi} alt="" />
                                <span className="absolute right-1 bottom-1 p-0.5 px-1 rounded-sm bg-black text-white text-xs bg-opacity-70">38:38</span>
                            </div>
                        </a>
                        {/* <!-- video details --> */}
                        <div className="flex flex-col flex-auto space-y-1.5 mb-3 ">

                            <div className="flex items-center space-x-3">
                                {/* <!-- channel logo --> */}
                                <img className="w-12 h-12 rounded-full object-cover cursor-pointer" src={hero} alt="" />
                                <div className="flex items-start">
                                    <a href="#" className="text-sm text-bold text-white pr-1">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
                                    <i className="material-icons text-white md-21">more_vert</i>
                                </div>
                            </div>

                            {/* <!-- channel link and meta data --> */}
                            <div className="flex flex-col pl-1 sm:pl-0 ml-14">
                                <a href="" className="text-gray-400 text-sm hover:text-white">Jhon Doe</a>
                                <div className="flex space-x-1">
                                    <span className="text-sm text-gray-400">74K views</span>
                                    <span className="text-sm text-gray-400">• 1 month ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col  space-y-3 cursor-pointer ">
                        {/* <!-- thumbnail --> */}
                        <a href="#">
                            <div className="relative h-52 sm:h-36 w-full">
                                <img className="relative h-full w-full object-cover" src={volvo} alt="" />
                                <span className="absolute right-1 bottom-1 p-0.5 px-1 rounded-sm bg-black text-white text-xs bg-opacity-70">38:38</span>
                            </div>
                        </a>
                        {/* <!-- video details --> */}
                        <div className="flex flex-col flex-auto space-y-1.5 mb-3 ">

                            <div className="flex items-center space-x-3">
                                {/* <!-- channel logo --> */}
                                <img className="w-12 h-12 rounded-full object-cover cursor-pointer" src={hero} alt="" />
                                <div className="flex items-start">
                                    <a href="#" className="text-sm text-bold text-white pr-1">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
                                    <i className="material-icons text-white md-21">more_vert</i>
                                </div>
                            </div>

                            {/* <!-- channel link and meta data --> */}
                            <div className="flex flex-col pl-1 sm:pl-0 ml-14">
                                <a href="" className="text-gray-400 text-sm hover:text-white">Jhon Doe</a>
                                <div className="flex space-x-1">
                                    <span className="text-sm text-gray-400">74K views</span>
                                    <span className="text-sm text-gray-400">• 1 month ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col  space-y-3 cursor-pointer ">
                        {/* <!-- thumbnail --> */}
                        <a href="#">
                            <div className="relative h-52 sm:h-36 w-full">
                                <img className="relative h-full w-full object-cover" src={samsung} alt="" />
                                <span className="absolute right-1 bottom-1 p-0.5 px-1 rounded-sm bg-black text-white text-xs bg-opacity-70">38:38</span>
                            </div>
                        </a>
                        {/* <!-- video details --> */}
                        <div className="flex flex-col flex-auto space-y-1.5 mb-3 ">

                            <div className="flex items-center space-x-3">
                                {/* <!-- channel logo --> */}
                                <img className="w-12 h-12 rounded-full object-cover cursor-pointer" src={hero} alt="" />
                                <div className="flex items-start">
                                    <a href="#" className="text-sm text-bold text-white pr-1">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
                                    <i className="material-icons text-white md-21">more_vert</i>
                                </div>
                            </div>

                            {/* <!-- channel link and meta data --> */}
                            <div className="flex flex-col pl-1 sm:pl-0 ml-14">
                                <a href="" className="text-gray-400 text-sm hover:text-white">Jhon Doe</a>
                                <div className="flex space-x-1">
                                    <span className="text-sm text-gray-400">74K views</span>
                                    <span className="text-sm text-gray-400">• 1 month ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col  space-y-3 cursor-pointer ">
                        {/* <!-- thumbnail --> */}
                        <a href="#">
                            <div className="relative h-52 sm:h-36 w-full">
                                <img className="relative h-full w-full object-cover" src={watch} alt="" />
                                <span className="absolute right-1 bottom-1 p-0.5 px-1 rounded-sm bg-black text-white text-xs bg-opacity-70">38:38</span>
                            </div>
                        </a>
                        {/* <!-- video details --> */}
                        <div className="flex flex-col flex-auto space-y-1.5 mb-3 ">

                            <div className="flex items-center space-x-3">
                                {/* <!-- channel logo --> */}
                                <img className="w-12 h-12 rounded-full object-cover cursor-pointer" src={hero} alt="" />
                                <div className="flex items-start">
                                    <a href="#" className="text-sm text-bold text-white pr-1">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
                                    <i className="material-icons text-white md-21">more_vert</i>
                                </div>
                            </div>

                            {/* <!-- channel link and meta data --> */}
                            <div className="flex flex-col pl-1 sm:pl-0 ml-14">
                                <a href="" className="text-gray-400 text-sm hover:text-white">Jhon Doe</a>
                                <div className="flex space-x-1">
                                    <span className="text-sm text-gray-400">74K views</span>
                                    <span className="text-sm text-gray-400">• 1 month ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Conatiner;