import { useMutation } from "@tanstack/react-query";
import useApi from "./useApi";
import { useEffect, useState } from "react";

function useFileUploader() {
  const api = useApi();

  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const fileUploadMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("file", file);

      const response = await api.post("/home/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percentage = Math.round((progressEvent.loaded * 100) / (progressEvent.total || file.size));
          setUploadProgress(percentage);
        },
      });

      setUploadProgress(100);

      return response.data;
    },
  });

  return {
    url: fileUploadMutation.data,
    isUploading: fileUploadMutation.isPending,
    error: fileUploadMutation.error,
    upload: fileUploadMutation.mutate,
    uploadProgress,
  };
}

export default useFileUploader;
