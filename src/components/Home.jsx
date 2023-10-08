import React, { useEffect } from "react";
import { API_FRONT_PAGE } from "../config";
import { getContent } from "../features/PageServices";
import { useDispatch, useSelector } from 'react-redux';
import { pushContent } from "../features/ContentSlice";
import Slide from "./Slide";

function Home() {

    const dispatch = useDispatch();
    const content = useSelector(state => state.content.value);

    useEffect(() => {
        getContent(API_FRONT_PAGE)
        .then(object => {
            dispatch(pushContent(object));
        });
        // eslint-disable-next-line
    },[]);

    return(
    <div id="home-content">
        <Slide content={content} />
    </div>
    )
}
export default Home;
