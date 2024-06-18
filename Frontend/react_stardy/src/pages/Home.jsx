import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Spline from "@splinetool/react-spline";
import Ukraine from "../components/Ukraine";
import LoginModal from "./components/LoginModal";

export default function Home() {
    const [loading, setLoading] = useState(true);

    const handleSplineLoad = () => {
        setLoading(false);
    };

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        // 监听 window.onload 事件
        window.addEventListener("load", handleLoad);

        // 清除监听器，避免内存泄漏
        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Helmet>
                <title>Home | STARdy</title>
            </Helmet>
            <Ukraine />
            <div className="fixed w-full h-screen flex items-center flex-col sm:flex-row">
                <div className="relative flex flex-col justify-center pl-4 pb-20 sm:px-20 z-10 w-full sm:w-auto">
                    <div className="flex flex-col space-y-4 items-start">
                        <h1 className="text-4xl sm:text-6xl font-bold text-left">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-500">
                                STARdy&nbsp;
                            </span>
                            with me
                        </h1>
                        <h1 className="text-xl sm:text-5xl font-bold text-left text-foreground">
                            Stellar focus, stellar results.
                        </h1>
                        <p className="text-medium sm:text-lg text-left text-gray-500">
                            Best tool to help you get into flow.
                        </p>
                        <LoginModal
                            buttonText="Get Started"
                            buttonVariant="bordered"
                            modalTitle="Get Started Now"
                            modalText="Sign up now to STARdy with others."
                        />
                    </div>
                </div>
                <div className="relative w-full sm:w-1/2 h-full -z-10">
                    <Spline
                        scene="https://prod.spline.design/G8sQEXton8g1Lev1/scene.splinecode"
                        className="absolute inset-0 w-full h-full"
                        onLoad={handleSplineLoad}
                    />
                </div>
            </div>
        </>
    );
}
