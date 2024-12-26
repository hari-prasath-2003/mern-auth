import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Camera } from "lucide-react";
import { useState } from "react";
import ProfileUploader from "./ProfileUploader";

export function ProfilePictureUploadModel() {
  const [file, setFile] = useState<File | null>();

  function handleFilePick(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;

    if (!files) return;

    setFile(files[0]);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="absolute bottom-0 right-0 p-1 w-7 h-7">
          <Camera />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile picture here. Click save when you're done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 h-32">
          {file ? (
            <div className="flex items-center justify-center">
              <ProfileUploader file={file} />
            </div>
          ) : (
            <input type="file" onChange={handleFilePick} />
          )}
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
