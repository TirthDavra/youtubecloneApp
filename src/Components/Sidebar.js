

const Sidebar = () => {
    return (
        <>

            <div className="flex flex-row">
                <div className="sidebar hidden fixed w-60 bg-neutral-800  h-full lg:flex flex-col mt-12 pb-16 pr-4 pt-2 scrollbar-thin  scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-track-sideBarBg" id="sideBar" >
                    {/* <!-- main home explore btns --> */}
                    <div className="flex flex-col w-full mb-2">
                        <div className="flex items-center space-x-5 hover:bg-stone-700 px-7 py-2.5 cursor-pointer">
                            <i className="material-icons text-white md-21">home</i>
                            <h2 className="text-sm font-semibold text-white">Home</h2>
                        </div>

                        <div className="flex items-center space-x-5 hover:bg-stone-700 px-7 py-2.5 cursor-pointer">
                            <i className="material-icons text-gray-400 md-21">explore</i>
                            <h2 className="text-sm text-white">Explore</h2>
                        </div>

                        <div className="flex items-center space-x-5 hover:bg-stone-700 px-7 py-2.5 cursor-pointer">
                            <i className="material-icons text-gray-400 md-21">subscriptions</i>
                            <h2 className="text-sm text-white">Subscriptions</h2>
                        </div>

                    </div>

                    <div className="border border-gray-300"></div>

                    {/* <!-- library history btns --> */}
                    <div className="flex flex-col w-full mb-2 mt-3">

                        <div className="flex items-center space-x-5 hover:bg-stone-700 px-7 py-2.5 cursor-pointer">
                            <i className="material-icons text-gray-400 md-21">video_library</i>
                            <h2 className="text-sm text-white">Library</h2>
                        </div>

                        <div className="flex items-center space-x-5 hover:bg-stone-700 px-7 py-2.5 cursor-pointer">
                            <i className="material-icons text-gray-400 md-21">history</i>
                            <h2 className="text-sm text-white">History</h2>
                        </div>

                        <div className="flex items-center space-x-5 hover:bg-stone-700 px-7 py-2.5 cursor-pointer">
                            <i className="material-icons text-gray-400 md-21">slideshow</i>
                            <h2 className="text-sm text-white">Your videos</h2>
                        </div>

                        <div className="flex items-center space-x-5 hover:bg-stone-700 px-7 py-2.5 cursor-pointer">
                            <i className="material-icons text-gray-400 md-21">watch_later</i>
                            <h2 className="text-sm text-white">Watch later</h2>
                        </div>

                        <div className="flex items-center space-x-5 hover:bg-stone-700 px-7 py-2.5 cursor-pointer">
                            <i className="material-icons text-gray-400 md-21">thumb_up</i>
                            <h2 className="text-sm text-white">Liked videos</h2>
                        </div>

                    </div>

                    <div className="border border-searchIconBg"></div>

                    {/* <!-- library history btns --> */}
                    <div className="flex flex-col w-full mb-2 mt-3">
                        <h2 className="uppercase text-sm px-7 py-1.5 text-gray-400">more from youtube</h2>

                        <div className="flex items-center space-x-5 hover:bg-stone-700 px-7 py-2.5 cursor-pointer">
                            <i className="material-icons text-gray-400 md-21">smart_display</i>
                            <h2 className="text-sm text-white">YouTube Premium</h2>
                        </div>

                        <div className="flex items-center space-x-5 hover:bg-stone-700 px-7 py-2.5 cursor-pointer">
                            <i className="material-icons text-gray-400 md-21">theaters</i>
                            <h2 className="text-sm text-white">Films</h2>
                        </div>

                        <div className="flex items-center space-x-5 hover:bg-stone-700 px-7 py-2.5 cursor-pointer">
                            <i className="material-icons text-gray-400 md-21">sports_esports</i>
                            <h2 className="text-sm text-white">Gaming</h2>
                        </div>

                        <div className="flex items-center space-x-5 hover:bg-stone-700 px-7 py-2.5 cursor-pointer">
                            <i className="material-icons text-gray-400 md-21">stream</i>
                            <h2 className="text-sm text-white">Live</h2>
                        </div>

                        <div className="flex items-center space-x-5 hover:bg-stone-700 px-7 py-2.5 cursor-pointer">
                            <i className="material-icons text-gray-400 md-21">dry_cleaning</i>
                            <h2 className="text-sm text-white">Fashion & beauty</h2>
                        </div>

                        <div className="flex items-center space-x-5 hover:bg-stone-700 px-7 py-2.5 cursor-pointer">
                            <i className="material-icons text-gray-400 md-21">lightbulb</i>
                            <h2 className="text-sm text-white">Learning</h2>
                        </div>

                        <div className="flex items-center space-x-5 hover:bg-stone-700 px-7 py-2.5 cursor-pointer">
                            <i className="material-icons text-gray-400 md-21">emoji_events</i>
                            <h2 className="text-sm text-white">Sport</h2>
                        </div>

                    </div>

                    <div className="border border-searchIconBg"></div>

                    {/* <!-- settings support btns --> */}
                    <div className="flex flex-col w-full mb-2 mt-3">

                        <div className="flex items-center space-x-5 hover:bg-stone-700 px-7 py-2.5 cursor-pointer">
                            <i className="material-icons text-gray-400 md-21">settings</i>
                            <h2 className="text-sm text-white">Settings</h2>
                        </div>

                        <div className="flex items-center space-x-5 hover:bg-stone-700 px-7 py-2.5 cursor-pointer">
                            <i className="material-icons text-gray-400 md-21">flag</i>
                            <h2 className="text-sm text-white">Report history</h2>
                        </div>

                        <div className="flex items-center space-x-5 hover:bg-stone-700 px-7 py-2.5 cursor-pointer">
                            <i className="material-icons text-gray-400 md-21">help</i>
                            <h2 className="text-sm text-white">Help</h2>
                        </div>

                        <div className="flex items-center space-x-5 hover:bg-stone-700 px-7 py-2.5 cursor-pointer">
                            <i className="material-icons text-gray-400 md-21">feedback</i>
                            <h2 className="text-sm text-white">Send feedback</h2>
                        </div>
                    </div>

                    <div className="border border-searchIconBg"></div>

                    {/* <!-- about press --> */}
                    <div className="flex flex-col px-6 py-2">
                        <div className="flex flex-wrap space-x-2">
                            <a className="text-xs text-gray-400" href="">About</a>
                            <a className="text-xs text-gray-400" href="">Press</a>
                            <a className="text-xs text-gray-400" href="">Copyright</a>
                        </div>
                        <div className="flex flex-wrap space-x-2">
                            <a className="text-xs text-gray-400" href="">Contact us</a>
                            <a className="text-xs text-gray-400" href="">Creator</a>
                            <a className="text-xs text-gray-400" href="">Advertise</a>
                        </div>
                        <a className="text-xs text-gray-400" href="">Developers</a>
                    </div>

                    {/* <!-- terms privacy --> */}
                    <div className="flex flex-col px-6 py-2">
                        <div className="flex flex-wrap space-x-2">
                            <a className="text-xs text-gray-400" href="">Terms</a>
                            <a className="text-xs text-gray-400" href="">Privacy</a>
                            <a className="text-xs text-gray-400" href="">Policy & Safety</a>
                        </div>
                        <a className="text-xs text-gray-400" href="">How YouTube works</a>
                        <a className="text-xs text-gray-400" href="">Test new features</a>
                    </div>

                    {/* <!-- copyright --> */}
                    <span className="text-gray-500 text-xs px-6 py-2">&copy; 2021 Google LLC</span>

                </div>

            </div>

        </>
    )
}

export default Sidebar;