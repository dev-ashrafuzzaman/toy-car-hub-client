import Banner from "../Banner/Banner";
import CategorySection from "../CategorySection/CategorySection";
import CollectionAdd from "../CollectionAdd/CollectionAdd";
import Gallery from "../Gallery/Gallery";
import ReactTabs from "../ReactTabs/ReactTabs";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <CategorySection></CategorySection>
            <Gallery></Gallery>
            <ReactTabs></ReactTabs>
            <CollectionAdd></CollectionAdd>
        </div>
    );
};

export default Home;