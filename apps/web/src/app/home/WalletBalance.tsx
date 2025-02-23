"use client";

import * as React from "react";
import { Typography, Card, CardContent, Stack, Box } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

export function WalletBalance({ walletAmount }: { walletAmount: number }) {
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
          <AccountBalanceWalletIcon />
          <Typography variant="h6" color="textSecondary">
            Wallet
          </Typography>
        </Stack>
        <Box display="flex" justifyContent="flex-end">
          <Typography variant="h4">{walletAmount}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
