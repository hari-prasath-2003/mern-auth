import { ProfilePictureUploadModel } from "./ProfilePictureUploadModel";

function Profile({ url }: { url: string }) {
  return (
    <div className="relative w-24 h-24">
      <img
        className="rounded-full"
        src={
          "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
        }
      />
      <ProfilePictureUploadModel />
    </div>
  );
}

export default Profile;
