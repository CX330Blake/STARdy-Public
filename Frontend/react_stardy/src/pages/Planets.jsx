import { Helmet } from "react-helmet";
import { Button, Card, Skeleton } from "@nextui-org/react";
import React from "react";
import axios from "axios";

const backendURL = "https://full-lizard-evidently.ngrok-free.app";
const userRequest = axios.create({
    baseURL: backendURL,
    headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "skip-browser-warning",
    },
});

const fetchOnlineUserCount = async () => {
    try {
        const response = await userRequest.get(
            `${backendURL}/api/users/online/count`
        );
        console.log(response.data);
        if (response.status >= 200 && response.status < 300) {
            alert(`There are ${response.data.count} users online.`);
        }
    } catch (error) {
        alert("API Error");
        console.error("Error fetching online user count:", error);
    }
};

const setUserOffline = async () => {
    try {
        let userEmail = localStorage.getItem("userEmail");
        if (userEmail !== null) {
            alert(`${userEmail} log out`);
            await userRequest.put(`/api/users/offline/${userEmail}`);
            localStorage.removeItem("userEmail");
        }
    } catch (error) {
        console.error("Error setting user offline:", error);
        throw error;
    }
};

export default function Planets() {
    const cards = Array.from({ length: 10 }, (_, i) => (
        <Card key={i} className="w-2/5 sm:w-1/6 space-y-5 p-4" radius="lg">
            <Skeleton className="rounded-lg">
                <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
            </div>
        </Card>
    ));

    return (
        <>
            <Helmet>
                <title>Planets | STARdy</title>
            </Helmet>
            <div className="flex w-full justify-center">
                <div className="flex flex-wrap w-full justify-center gap-4">
                    {cards}
                </div>
            </div>

            <br />
            <Button
                onClick={fetchOnlineUserCount}
                variant="ghost"
                color="secondary"
                className="flex justify-center mx-auto"
            >
                Online Count
            </Button>
            <br />
            <Button
                onClick={setUserOffline}
                variant="flat"
                color="secondary"
                className="flex justify-center mx-auto"
            >
                Log out
            </Button>
            {/* <div className="flex w-full justify-center">
                <div className="flex flex-wrap justify-start gap-4 max-w-screen-lg">
                    {cards}
                </div>
            </div> */}
        </>
    );
}
