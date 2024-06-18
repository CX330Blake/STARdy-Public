import React from "react";
import { Spinner } from "@nextui-org/react";

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Spinner size="lg" color="secondary" />
        </div>
    );
};

export default Loading;
