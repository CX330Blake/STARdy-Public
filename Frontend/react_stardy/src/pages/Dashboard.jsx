import { Helmet } from "react-helmet";
import { PieChart } from "@mui/x-charts";
import { BarChart } from "@mui/x-charts";

export default function Dashboard() {
    return (
        <>
            <Helmet>
                {/* <title>{username ? `${username} | STARdy` : "STARdy"}</title> */}
                <title>Dashboard | STARdy</title>
            </Helmet>
            <br />
            <div className="flex justify-center flex-col">
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: 10, label: "Calculus" },
                                { id: 1, value: 15, label: "Computer Science" },
                                { id: 2, value: 20, label: "Linear Algebra" },
                            ],
                        },
                    ]}
                    width={600}
                    height={300}
                />
                <BarChart
                    xAxis={[
                        {
                            scaleType: "band",
                            data: [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                                "Sunday",
                            ],
                        },
                    ]}
                    series={[{ data: [4, 3, 5, 2, 4, 6, 3] }]}
                    width={600}
                    height={400}
                />
            </div>
        </>
    );
}
