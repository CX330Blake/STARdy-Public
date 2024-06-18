import { Helmet } from "react-helmet";
import Spline from "@splinetool/react-spline";

export default function NotFound() {
    const h1Style = {
        color: "red",
        textAlign: "center",
    };
    return (
        <>
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            {/* <h1 style={h1Style}>Error 404: Not Found</h1>
            <h1 style={h1Style}>What the heck do you want to do man???</h1>
            <h1 style={h1Style}>THERE'S NOTHING HERE!!!</h1> */}
            <Spline scene="https://prod.spline.design/qk1Xwjot1Cbhr9Kl/scene.splinecode" />
        </>
    );
}
