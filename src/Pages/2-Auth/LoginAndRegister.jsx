import { CheckBox, GitHub, Google } from "@mui/icons-material";
import { Divider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { MainInput } from "../1-Admin/Setting";

function LoginAndRegister({ pageName }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Stack>
      <Stack
        sx={{
          bgcolor: "#E2E8F0",
          px: 3,
          py: 2,
          mt: {xs: 2, sm: 5, md: 8, lg: 10},
          mb: 10,
          mx: "auto",
          width: { xs: "80%", sm: "50%", md: "40%", lg: "35%" },
          borderRadius: 2,
        }}
      >
        <Stack textAlign={"center"} gap={1.5}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 14,
              color: "var(--hover-color)",
            }}
          >
            {pageName === "register" ? "Sign up with" : "Sign in with"}
          </Typography>
          <Stack className="row" justifyContent={"center"} gap={1}>
            <Stack
              className="row"
              sx={{
                px: 2,
                py: 1.7,
                borderRadius: 1,
                boxShadow: "0 5px 10px rgba(0,0,0, 15%)",
                bgcolor: "#FFF",
              }}
              gap={1}
            >
              <GitHub sx={{ fontSize: "var(--hover-color)" }} />
              <Typography sx={{ fontSize: 14, fontWeight: 700 }}>
                GITHUB
              </Typography>
            </Stack>
            <Stack
              className="row"
              sx={{
                px: 2,
                py: 1.7,
                borderRadius: 1,
                boxShadow: "0 5px 10px rgba(0,0,0, 15%)",
                bgcolor: "#FFF",
              }}
              gap={1}
            >
              <Google sx={{ fontSize: "var(--hover-color)" }} />
              <Typography sx={{ fontSize: 14, fontWeight: 700 }}>
                GOOGLE
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Divider sx={{ my: 4 }} />
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: 16,
            my: 1,
            color: "var(--hover-color)",
            textAlign: "center",
          }}
        >
          {pageName === "register"
            ? "Or sign up with credentials"
            : "Or sign in with credentials"}
        </Typography>
        <Stack gap={2}>
          {pageName === "register" && (
            <MainInput label={"NAME"} placeholder={"Name"} />
          )}
          <MainInput label={"EMAIL"} placeholder={"Email"} />
          <MainInput label={"PASSWORD"} placeholder={"Password"} />
        </Stack>
        <Stack mt={3} direction={"row"} alignItems={"center"} gap={0.5}>
          <Stack
            sx={{
              width: 20,
              height: 20,
              cursor: "pointer",
              transition: ".3s",
              borderRadius: 1,
              bgcolor: "#FFF",
              border: "3px solid #FFF",
              borderColor: isChecked ? "#344cf0" : "#FFF",
            }}
            justifyContent={"center"}
            alignItems={"center"}
            onClick={() => setIsChecked(!isChecked)}
          >
            {isChecked && (
              <CheckBox
                sx={{ fontSize: 23, color: "#1E293B", borderRadius: 5 }}
              />
            )}
          </Stack>
          <Typography
            sx={{
              ml: 0.5,
              color: "var(--hover-color)",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            I agree with the
          </Typography>
          <Typography
            sx={{
              color: "var(--blue-color)",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Privacy Policy
          </Typography>
        </Stack>
        <Stack
          textAlign={"center"}
          sx={{
            mb: 2,
            textAlign: "center",
            bgcolor: "#1E293B",
            py: 1.8,
            borderRadius: 1,
            mt: 3,
            cursor: "pointer",
            transition: ".1s",
            ":active": { bgcolor: "var(--text-color)" },
          }}
        >
          <Typography sx={{ fontWeight: 700, color: "#FFF", fontSize: 14 }}>
            CREATE ACCOUNT
          </Typography>
        </Stack>
      {pageName === "login" && <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography sx={{ cursor: "pointer", fontSize: 13, transition: ".3s", ":hover": {color: "var(--blue-color)"} }}>Forgot password?</Typography>
        <Typography sx={{ cursor: "pointer", fontSize: 13, transition: ".3s", ":hover": {color: "var(--blue-color)"} }}>Create new account</Typography>
      </Stack>}
      </Stack>
    </Stack>
  );
}

export default LoginAndRegister;
