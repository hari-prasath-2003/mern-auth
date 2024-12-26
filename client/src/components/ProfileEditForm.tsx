import { Label } from "@radix-ui/react-label";
import Profile from "./Profile";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";

function ProfileEditForm() {
  return (
    <Card className="w-max sm:w-[400px]">
      <CardHeader></CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex justify-center">
          <Profile url={""} />
        </div>
        <Label>name</Label>
        <Input type="text" value={"hari prasath"} onChange={() => {}} />
        <Label>email</Label>
        <Input type="email" value={"hari@email.com"} onChange={() => {}} />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default ProfileEditForm;
