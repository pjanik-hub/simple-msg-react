import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        gap="8px"
        noValidate
        autoComplete="off"
      >
        <TextField id="email" label="Email" />
        <TextField id="password" label="Password" />
        <Button variant="contained">Login</Button>
      </Box>
    </main>
  );
}
