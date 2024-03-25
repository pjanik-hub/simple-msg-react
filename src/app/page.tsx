"use client";

import { FormEvent } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
}

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="p-4">Simple Message</h1>
            <Box
                component="form"
                display="flex"
                flexDirection="column"
                gap="8px"
                onSubmit={handleLogin}
                noValidate
                autoComplete="off"
            >
                <TextField id="email" label="Email" required={true} />
                <TextField id="password" label="Password" required={true} />
                <Button type="submit">Login</Button>
            </Box>
        </main>
    );
}
