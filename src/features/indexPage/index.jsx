import React, { useEffect, useState } from 'react';
import '../../assets/css/owl.carousel.min.css';
import '../../assets/css/owl.theme.default.min.css';
import '../../assets/css/app.css';

import dataApi from '../../api/dataApi';
import BlockModule01 from './block-module-01';
import BlockModule02 from './block-module-02';
import ListingGridNoSidebar01 from './listing-grid-no-sidebar-01/index';
import BlockSlider01 from './block-slider-01';
import ListingGridNoSidebar02 from './listing-grid-no-sidebar-02';
import BlockModule03 from './block-module-03';
import ListingGridHasSidebar from './listing-grid-has-sidebar-01';


function IndexPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        try {
            const fetchPosts = async () => {
                const dataList = await dataApi.getAll()
                setData(dataList)
            }
            fetchPosts();
        } catch (error) { }
    }, [])


    // function formatData(dataFormat = [], quantity = 0) {
    //     const formatEnd = refPostsRender.current + quantity;
    //     const result = dataFormat.splice(refPostsRender.current, formatEnd);
    //     refPostsRender.current = formatEnd;
    //     return result;
    // }

    // console.log("data", data.slice(4, 4))
    // console.log("data 01", data?.slice(0, 4))
    // console.log("data 02", data?.slice(4, 8))
    // console.log("data 03", data)
    return (
        <main>
            <BlockModule01
                data={data?.slice(0, 4)}
            />
            <BlockModule02
                data={data?.slice(4, 8)}
            />
            <ListingGridNoSidebar01
                data={data?.slice(8, 13)}
            />

            <BlockSlider01
                data={data?.slice(13, 17)}
            />

            <ListingGridNoSidebar02
                data={data?.slice(17, 21)}
            />

            <BlockModule03
                data={data?.slice(21, 30)}
            />

            <ListingGridHasSidebar
                data={data?.slice(30, 42)}
            />
        </main>
    );
}

export default IndexPage;