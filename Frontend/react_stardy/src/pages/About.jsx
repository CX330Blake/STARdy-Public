import React from "react";
import { Helmet } from "react-helmet";
import {
    Card,
    CardHeader,
    CardBody,
    Divider,
    User,
    Link,
} from "@nextui-org/react";
import ReactPlayer from "react-player/lazy";

const names = ["CX330", "PekkaChiu", "AlexChen"];
const links = [
    "https://cx330.tw",
    "https://github.com/pekkachiu",
    "https://github.com/AlexChen1028",
];
const links_name = ["CX330Blake", "pekkachiu", "AlexChen1028"];
const avatars = [
    "https://avatars.githubusercontent.com/u/108129644?s=96&v=4",
    "https://avatars.githubusercontent.com/u/169379702?v=4",
    "https://avatars.githubusercontent.com/u/169383338?v=4",
];
const text = [
    "A Hacker/Developer/CTFer/Undergraduate student from Taiwan. Happy hacking!",
    "",
    "Beginner in programming/Java/C++/Python",
];

export default function About() {
    return (
        <>
            <Helmet>
                <title>About | STARdy</title>
            </Helmet>
            <br />
            <p className="text-5xl flex justify-center font-bold font-mono">
                Our Story
            </p>
            <br />
            <p className="text-lg flex justify-start w-1/2 mx-auto font-mono">
                We are students from NCKU, dedicated to create a peaceful
                reading space. Since we notice that there are a lot of people
                eager to know that they're not alone while focusing or studing.
                And many of our friends also have this demand, so we decided to
                create a universe for people who want to be more focused and
                feel more company while focusing on their own things. We strive
                to make our users into the flow when using STARdy. So enjoy it!
                Hope you have a good time focusing on yourself!
            </p>
            <br />
            <p className="text-lg flex justify-start w-1/2 mx-auto font-mono">
                Video below is we discussing and developing STARdy in a bar.
            </p>
            <br />
            <ReactPlayer
                url={"https://youtu.be/kbRiOk9M7yo"}
                playing={true}
                controls={true}
                loop={true}
                width={"50%"}
                className="flex justify-center mx-auto"
            />
            <br />
            <br />
            <p className="text-5xl flex justify-center font-bold font-mono">
                Our Members
            </p>
            <br />
            {names.map((name, index) => (
                <React.Fragment key={index}>
                    <Card className="w-1/3 flex justify-center mx-auto">
                        <CardHeader>
                            <User
                                name={name}
                                description={
                                    <Link
                                        href={links[index]}
                                        size="sm"
                                        isExternal
                                        className="text-secondary"
                                    >
                                        {`@${links_name[index]}`}
                                    </Link>
                                }
                                avatarProps={{
                                    src: avatars[index],
                                    size: "lg",
                                }}
                                className="flex justify-start"
                            />
                        </CardHeader>
                        <Divider />
                        <CardBody>{text[index]}</CardBody>
                    </Card>
                    <br />
                </React.Fragment>
            ))}
            <br />
            <br />
            <br />
        </>
    );
}
