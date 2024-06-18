import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

export default function TransitionAlerts() {
    const [open, setOpen] = React.useState(true);

    return (
        <Box sx={{ width: "100%" }} className="animate-bounce z-10 absolute">
            <Collapse in={open}>
                <Alert
                    icon={false}
                    action={
                        <>
                            <Button
                                href="https://war.ukraine.ua/support-ukraine/"
                                size="small"
                            >
                                Support
                            </Button>
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        </>
                    }
                    className="max-w-xl mx-auto"
                >
                    <p className="font-bold font-large font-sans">
                        ☮️ STARdy stands in solidarity with Ukraine 💙💛
                    </p>
                </Alert>
            </Collapse>
        </Box>
    );
}
