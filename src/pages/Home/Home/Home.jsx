import { useEffect } from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import CategorySection from "../CategorySection/CategorySection";
import CollectionAdd from "../CollectionAdd/CollectionAdd";
import Gallery from "../Gallery/Gallery";
import ReactTabs from "../ReactTabs/ReactTabs";


const Home = () => {
    useTitle('Home')

    return (
        <div>
            <Banner></Banner>
            <CategorySection></CategorySection>
            <Gallery></Gallery>
            <ReactTabs></ReactTabs>
            <CollectionAdd></CollectionAdd>
            <Brand></Brand>
        </div>
    );
};

export default Home;