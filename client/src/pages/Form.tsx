import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function Form() {
  return (
    <div className="w-full max-w-xl p-6">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Course Name</Label>
          <Input id="" type="text" placeholder="" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Category</Label>
          <Input id="" type="text" required />
        </div>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </div>
    </div>
  );
}
