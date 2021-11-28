import React, { useEffect, useRef, useState } from 'react';
// import '../../assets/css/owl.carousel.min.css';
// import '../../assets/css/owl.theme.default.min.css';
import '../../assets/css/app.css';
import dataApi from '../../api/dataApi';
import BlockModule01 from './block-module-01';
import BlockModule02 from './block-module-02';


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

        </main>
    );
}

export default IndexPage;