import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "../service/api/axios";
import { useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import UserStore from "../store/UserStore";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { useQueryClient } from "@tanstack/react-query";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const setUser = UserStore((state) => state.setUser);

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { state: redirectPageState } = useLocation();
  const redirectOnSuccessLink = redirectPageState?.link || "/";

  async function onSubmit() {
    try {
      const res = await axios.post("/auth/login", { email, password }, { withCredentials: true });
      const data = res.data;
      setUser({ email: data.email, profile: data.profile, name: data.name, id: data.id, accessToken: data.token });
      queryClient.invalidateQueries("refreshToken");
      navigate(redirectOnSuccessLink, { state: { fromLocation: "/login" }, replace: true });
    } catch (error: any) {
      const errData = error.response.data;
      setError(errData.error);
    }
  }

  return (
    <>
      <div className="w-full h-screen lg:grid lg:grid-cols-2">
        <div className="flex  h-screen items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">Enter your email below to login to your account</p>
            </div>
            {error && (
              <Alert variant="destructive">
                <ExclamationTriangleIcon className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="ml-auto inline-block text-sm underline">
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)} />
              </div>
              <Button type="submit" className="w-full" onClick={onSubmit}>
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account
              <Link to="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <img
            src="/login-img.jpeg"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </>
  );
}
