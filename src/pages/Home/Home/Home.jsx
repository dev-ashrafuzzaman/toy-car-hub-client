import Banner from "../Banner/Banner";
import CategorySection from "../CategorySection/CategorySection";
import Gallery from "../Gallery/Gallery";
import ReactTabs from "../ReactTabs/ReactTabs";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <CategorySection></CategorySection>
            <Gallery></Gallery>
            <ReactTabs></ReactTabs>
        </div>
    );
};

export default Home;