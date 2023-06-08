
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ReactTabs = () => {
    return (
        <div className='container mx-auto md:p-10 p-2'>
            <div>
                <Tabs >
                    <TabList className="tabs font-bold gap-10 mb-10">
                        <Tab className="tab tab-lg tab-lifted text-white bg-[#f379a7]">Sports car</Tab>
                        <Tab className="tab tab-lg tab-lifted  text-white bg-[#f379a7]" >Truck</Tab>
                        <Tab className="tab  tab-lg tab-lifted  text-white bg-[#f379a7]">Fire truck</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid grid-cols-4 gap-4'>
                        
                        <div className="card  bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card  bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card  bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <h2>Content 2</h2>
                    </TabPanel>

                    <TabPanel>
                        <h2>Content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ReactTabs;