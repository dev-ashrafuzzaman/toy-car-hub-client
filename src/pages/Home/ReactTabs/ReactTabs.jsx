
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabsProducts from './TabsProducts';

const ReactTabs = () => {

    const [subCategory , setSubCategory] = useState('sports car')

    const [SubCategoryProduct, setSubCategoryProduct] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/searchBySubCategory?SubCategory=${subCategory}`)
            .then(res => res.json())
            .then(data => {
                setSubCategoryProduct(data)
                console.log(data)
            })
    }, [subCategory])

    const handleClickSetSubCategory =(category)=>{
        setSubCategory(category)
        console.log(subCategory)
    }
    return (
        <div className='container mx-auto md:p-10 p-2'>
            <h2 className='text-center my-10 font-bold text-4xl text-[#f379a7]'>Products by Sub category</h2>
            <div>
                <Tabs >
                    <TabList className="tabs font-bold md:gap-10 gap-2 mb-10">
                        <Tab onClick={() =>handleClickSetSubCategory('sports car')} className="tab tab-lg tab-lifted text-white bg-[#f379a7]">Sports car</Tab>
                        <Tab onClick={() =>handleClickSetSubCategory('truck')} className="tab tab-lg tab-lifted  text-white bg-[#f379a7]" >Truck</Tab>
                        <Tab onClick={() =>handleClickSetSubCategory('fire truck')} className="tab  tab-lg tab-lifted  text-white bg-[#f379a7]">Fire truck</Tab>
                    </TabList>

                    <TabPanel>
                   
                        <div className='grid md:grid-cols-4 gap-4'>
                            {
                                SubCategoryProduct.map(product => <TabsProducts
                                key={product._id}
                                product={product}
                                ></TabsProducts>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                    <div className='grid md:grid-cols-4 gap-4'>
                            {
                                SubCategoryProduct.map(product => <TabsProducts
                                key={product._id}
                                product={product}
                                ></TabsProducts>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                    <div className='grid md:grid-cols-4 gap-4'>
                            {
                                SubCategoryProduct.map(product => <TabsProducts
                                key={product._id}
                                product={product}
                                ></TabsProducts>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ReactTabs;