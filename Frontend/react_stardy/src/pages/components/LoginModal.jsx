import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button,
    useDisclosure,
} from "@nextui-org/react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./LoginModal.css";
import axios from "axios";
import { redirect } from "react-router-dom";

const backendURL = "https://full-lizard-evidently.ngrok-free.app";

const userRequest = axios.create({
    baseURL: backendURL,
    headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "skip-browser-warning",
    },
});

const responseMessage = async (response) => {
    const decodedToken = jwtDecode(response.credential);
    const userEmail = decodedToken.email;
    const userName = decodedToken.name;
    const userData = {
        token: response.credential,
        email: userEmail,
        name: userName,
    };

    async function setUserOnline(userEmail) {
        try {
            const response = await userRequest.put(
                `/api/users/online/${userEmail}`
            );
            localStorage.setItem("userEmail", `${userEmail}`);
            return response.data;
        } catch (error) {
            console.error("Error setting user online:", error);
            throw error;
        }
    }

    try {
        // Check if user exists
        const checkResponse = await userRequest.get(`/api/users/${userEmail}`);

        if (checkResponse.status >= 200 && checkResponse.status < 300) {
            // if user exists, set user online and redirect to dashboard
            alert(`Login successfully, ${userName}`);
            await setUserOnline(userEmail);

            // jump
            return redirect("/dashboard"); // TODO
        }
    } catch (error) {
        // if status code is 404
        const createResponse = await userRequest.post("api/users", userData);
        if (createResponse.status >= 200 && createResponse.status < 300) {
            alert("User created successfully.");
            await setUserOnline(userEmail);
        } else {
            alert("Error creating user.");
        }
    }
};

const errorMessage = (error) => {
    console.log("Login failed:", error);
    alert("Login failed. Please try again.");
};

export default function LoginModal({
    buttonVariant,
    buttonText,
    modalTitle,
    modalText,
}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button
                onPress={onOpen}
                color="warning"
                variant={buttonVariant}
                className="font-mono text-medium"
            >
                {buttonText}
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop="blur"
                size="sm"
                placement="center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-2xl font-mono">
                                {modalTitle}
                            </ModalHeader>
                            <ModalBody>
                                <p className="font-mono text-md">{modalText}</p>
                                <div
                                    className="flex justify-center"
                                    style={{ colorScheme: "dark" }}
                                >
                                    <GoogleLogin
                                        onSuccess={responseMessage}
                                        onError={errorMessage}
                                        ux_mode="popup"
                                        shape="pill"
                                    />
                                </div>
                            </ModalBody>
                            <br />
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
