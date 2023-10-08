import React, { useEffect } from "react";
import { getContent } from "../features/PageServices";
import { useDispatch, useSelector } from 'react-redux';
import { pushContent } from "../features/ContentSlice";
import Slide from "./Slide";

function Home() {

    const dispatch = useDispatch();
    const content = useSelector(state => state.content.value);

    // eslint-disable-next-line
    useEffect(() => {
        getContent("/test")
        .then(object => {
            dispatch(pushContent(object));
        });
    },[]);

    return(
    <div id="home-content">
        <Slide content={content} />
    </div>
    )
}
export default Home;
