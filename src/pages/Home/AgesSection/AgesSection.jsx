const AgesSection = () => {
    return (
        <div className='container mx-auto md:p-10 p-2'>
 <h3 className="text-center md:mb-10 mt-10 font-bold text-4xl text-[#f379a7]">Shop toys by age</h3>
            <div className='grid md:grid-cols-6 gap-10 mt-10'>
                <div className='bg-blue-400 card shadow-md shadow-gray-400 text-white font-bold  px-6 py-6 text-xl hover:shadow-2xl text-center rounded-full'>
                    <p>0-18</p>
                    <p>Months</p>
                </div>
                <div className='bg-red-400 card shadow-md shadow-gray-400 text-white font-bold  px-6 py-6 text-xl hover:shadow-2xl text-center rounded-full'>
                    <p>18-36</p>
                    <p>Months</p>
                </div>
                <div className='bg-purple-400 card shadow-md shadow-gray-400 text-white font-bold  px-6 py-6 text-xl hover:shadow-2xl text-center rounded-full'>
                    <p>3-5</p>
                    <p>Years</p>
                </div>
                <div className='bg-amber-400 card shadow-md shadow-gray-400 text-white font-bold  px-6 py-6 text-xl hover:shadow-2xl text-center rounded-full'>
                    <p>6-8</p>
                    <p>Years</p>
                </div>
                <div className='bg-green-400 card shadow-md shadow-gray-400 text-white font-bold  px-6 py-6 text-xl hover:shadow-2xl text-center rounded-full'>
                    <p>9-11</p>
                    <p>Years</p>
                </div>
                <div className='bg-orange-400 card shadow-md shadow-gray-400 text-white font-bold  px-6 py-6 text-xl hover:shadow-2xl text-center rounded-full'>
                    <p>Big Kids </p>
                    <p>(12+)</p>
                </div>
             
            </div>
        </div>
    );
};

export default AgesSection;