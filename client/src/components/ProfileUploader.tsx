import useFileUploader from "@/hooks/useFileUploader";
import { useEffect } from "react";
import { Spinner } from "./ui/spinner";
import { TriangleAlert } from "lucide-react";

function ProfileUploader({ file }: { file: File }) {
  const { isUploading, error, url, upload } = useFileUploader();

  useEffect(() => {
    upload(file);
  }, [file, upload]);

  if (isUploading) {
    return <Spinner />;
  }
  if (error)
    return (
      <div className="flex justify-center align-middle text-red-500 gap-2">
        <TriangleAlert />
        <p>Error uploading profile try later</p>
      </div>
    );

  return <img src={url} className="rounded-full w-24 h-24" />;
}

export default ProfileUploader;
