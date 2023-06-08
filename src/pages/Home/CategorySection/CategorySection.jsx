

const CategorySection = () => {
    return (
        <div className="container mx-auto md:px-28 md:top-[350px] md:left-[90px] lg:px-36 lg:top-[450px] lg:left-[100px]  xl:px-40 xl:top-[550px] xl:left-[10px]  2xl:px-80 2xl:top-[650px] 2xl:left-[200px] md:absolute p-2 md:p-0 ">
            <div className="flex justify-evenly text-center md:font-bold text-[10px] md:text-xl text-[#DB83A6] gap-10 items-center shadow-xl bg-white md:rounded-full rounded-lg p-4">
                <div className="hover:text-[#57C4E4]">
                    <img className="w-[100px]" src="https://i.ibb.co/fq8CsYg/fotor-2023-6-8-12-17-49.png" alt="" />
                    <p>Sports car</p>
                </div>
                <div className="hover:text-[#57C4E4]">
                    <img className="w-[100px]" src="https://i.ibb.co/H4DVcsj/fotor-2023-6-8-12-17-31.png" alt="" />
                    <p>Truck</p>
                </div>
                <div className="hover:text-[#57C4E4]">
                    <img className="w-[100px]" src="https://i.ibb.co/QrkM98h/fotor-2023-6-8-12-17-7.png" alt="" />
                    <p>Police car</p>
                </div>
                <div className="hover:text-[#57C4E4]">
                    <img className="w-[100px]" src="https://i.ibb.co/LZp1Hxm/fotor-2023-6-8-12-16-42.png" alt="" />
                    <p>Fire truck</p>
                </div>
            </div>
        </div>
    );
};

export default CategorySection;