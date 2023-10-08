import { useEffect } from "react";
import { getContent } from "../features/PageServices";
import { useDispatch, useSelector } from 'react-redux';
import { pushContent } from "../features/ContentSlice";
import Slide from "./Slide";

function Main({route}) {

    const dispatch = useDispatch();
    const content = useSelector(state => state.content.value);

    useEffect(() => {
        getContent(route)
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
export default Main;
