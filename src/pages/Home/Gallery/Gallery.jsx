
const Gallery = () => {
    return (
        <div className="container mx-auto">
            <h3 className="text-center md:mt-28 mt-10 font-bold text-4xl text-[#f379a7]">Gallery</h3>
            <div className="grid-cols-3 md:p-10 p-2 space-y-2 mt-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
                <div className="w-full overflow-hidden rounded-lg">
                    <img className="rounded-lg hover:scale-125 transition-all duration-500 cursor-pointer" src="https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="image" />
                </div>



                <div className="w-full col-span-2 row-span-2 overflow-hidden rounded-lg">
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full overflow-hidden rounded-lg">
                            <img src="https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full hover:scale-125 transition-all duration-500 cursor-pointer" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle bg-[#f379a7]">❮</a>
                                <a href="#slide2" className="btn btn-circle bg-[#f379a7]">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full overflow-hidden rounded-lg">
                            <img src="https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full hover:scale-125 transition-all duration-500 cursor-pointer" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle bg-[#f379a7]">❮</a>
                                <a href="#slide3" className="btn btn-circle bg-[#f379a7]">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full overflow-hidden rounded-lg">
                            <img src="https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full hover:scale-125 transition-all duration-500 cursor-pointer" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle bg-[#f379a7]">❮</a>
                                <a href="#slide4" className="btn btn-circle bg-[#f379a7]">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full overflow-hidden rounded-lg">
                            <img src="https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full hover:scale-125 transition-all duration-500 cursor-pointer" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle bg-[#f379a7]">❮</a>
                                <a href="#slide1" className="btn btn-circle bg-[#f379a7]">❯</a>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="w-full overflow-hidden rounded-lg">
                    <img className="rounded-lg hover:scale-125 transition-all duration-500 cursor-pointer" src="https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="image" />
                </div>
                <div className="w-full overflow-hidden rounded-lg">
                    <img className="rounded-lg hover:scale-125 transition-all duration-500 cursor-pointer" src="https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="image" />
                </div>
                <div className="w-full overflow-hidden rounded-lg">
                    <img className="rounded-lg hover:scale-125 transition-all duration-500 cursor-pointer" src="https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="image" />
                </div>
                <div className="w-full overflow-hidden rounded-lg">
                    <img className="rounded-lg hover:scale-125 transition-all duration-500 cursor-pointer" src="https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="image" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;