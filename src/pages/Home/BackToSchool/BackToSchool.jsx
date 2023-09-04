
import bgbanner from '../../../assets/back-to-school-08-23-212121.jpg'
const BackToSchool = () => {
    return (
        <div className='bg-cover bg-center mt-10 md:py-20'
            style={{
                backgroundImage: `url(${bgbanner})`
            }}
        >
            <div className='text-white container mx-auto md:px-10 p-2 md:py-32 py-10 space-y-5'>
                <p className='text-4xl font-bold'>A class act in back-to-school treats!</p>
                <p className='text-xl '>Crayola, Play-Doh , Books , And More...</p>
                <button className='btn btn-outline rounded-full text-white'>Shop Now</button>
            </div>
        </div>
    );
};

export default BackToSchool;