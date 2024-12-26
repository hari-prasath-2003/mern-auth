import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import UserStore from "../store/UserStore";

import { Link, useNavigate } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const setUser = UserStore((state: any) => state.setUser);

  const navigate = useNavigate();

  async function onSubmit() {
    try {
      const res = await axios.post("http://localhost:3000/auth/register", { email, password, name });
      const data = res.data;
      setUser({ email: data.email, profile: data.profile, name: data.name, id: data.id });
      navigate("/", { state: { fromLocation: "/signup" } });
    } catch (error: any) {
      const errData = error.response.data;
      setError(errData.error);
    }
  }

  return (
    <>
      <div className="w-full h-screen lg:grid lg:grid-cols-2 ">
        <div className="flex  h-screen items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Sign up</h1>
              <p className="text-balance text-muted-foreground">Create an account to access service</p>
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
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="dinesh" required onChange={(e) => setName(e.target.value)} />
              </div>
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
                </div>
                <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)} />
              </div>
              <Button type="submit" className="w-full" onClick={onSubmit}>
                Sign up
              </Button>
              {/* <Button variant="outline" className="w-full">
                Signup with Google
              </Button> */}
            </div>
            <div className="mt-4 text-center text-sm">
              have an account?{" "}
              <Link to="/login" className="underline">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <img
            src="/login_hero.png"
            alt="Image"
            className="w-full object-cover dark:brightness-[0.2] dark:grayscale h-screen"
          />
        </div>
      </div>
    </>
  );
}
