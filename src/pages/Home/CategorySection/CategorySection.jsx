

const CategorySection = () => {
    return (
        <div className="container mx-auto px-80 top-[650px] left-[200px] absolute">
            <div className="flex justify-evenly text-center font-bold text-[#DB83A6] gap-10 items-center shadow-xl bg-white rounded-full p-4">
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
                    <p>Mini police car</p>
                </div>
                <div className="hover:text-[#57C4E4]">
                    <img className="w-[100px]" src="https://i.ibb.co/LZp1Hxm/fotor-2023-6-8-12-16-42.png" alt="" />
                    <p>Mini fire truck</p>
                </div>
            </div>
        </div>
    );
};

export default CategorySection;