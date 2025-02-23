"use client";

import * as React from "react";
import { Typography, Card, CardContent, Stack, Box } from "@mui/material";
import TollOutLined from "@mui/icons-material/TollOutlined";

export function TokenBalance({ tokenCount }: { tokenCount: number }) {
  return (
    <Card
      sx={{
        flex: 1,
        minWidth: "45%",
        display: "flex",
        flexDirection: "column",
      }}>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1}>
          <TollOutLined sx={{ color: "green" }} />
          <Typography variant="h6" color="textSecondary">
            Tokens
          </Typography>
        </Stack>
        <Box display="flex" justifyContent="flex-end">
          <Typography variant="h4">{tokenCount}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
