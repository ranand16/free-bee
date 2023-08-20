import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function RatingStar() {
    const [value, setValue] = React.useState<number | null>(2);

    return (
        <Box
            sx={{
                "& > legend": { mt: 2 },
            }}
        >
            <Typography component="legend">Rate</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </Box>
    );
}