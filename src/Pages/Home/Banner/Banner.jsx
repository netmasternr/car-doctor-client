import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />

                <div className="absolute flex-1  left-0 top-0 gap-3  bottom-0 space-y-7  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] rounded-md h-full">

                    <div className='text-white  w-1/2 rounded-md pl-4 p-2'>
                        <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    </div>

                    <div>
                        <button className=" btn btn-success mr-3">Discover More</button>
                        <button className=" btn btn-success">Latest Project</button>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 gap-3 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />

                <div className="absolute flex-1  left-0 top-0 gap-3  bottom-0 space-y-7  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] rounded-md h-full">

                    <div className='text-white  w-1/2 rounded-md pl-4 p-2'>
                        <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    </div>

                    <div>
                        <button className=" btn btn-success mr-3">Discover More</button>
                        <button className=" btn btn-success">Latest Project</button>
                    </div>
                </div>


                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 gap-3 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex-1  left-0 top-0 gap-3  bottom-0 space-y-7  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] rounded-md h-full">

                    <div className='text-white  w-1/2 rounded-md pl-4 p-2'>
                        <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    </div>

                    <div>
                        <button className=" btn btn-success mr-3">Discover More</button>
                        <button className=" btn btn-success">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 gap-3 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />

                <div className="absolute flex-1  left-0 top-0 gap-3  bottom-0 space-y-7  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] rounded-md h-full">

                    <div className='text-white  w-1/2 rounded-md pl-4 p-2'>
                        <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    </div>

                    <div>
                        <button className=" btn btn-success mr-3">Discover More</button>
                        <button className=" btn btn-success">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 gap-3 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;