import HashLoader from "react-spinners/HashLoader";

export default function AuthenticationLoading() {
  return (
    <div className="h-screen relative">
      <div className="absolute bottom-0 right-0 flex items-center p-5">
        <HashLoader color="black" size={20} />
        <h4 className="ml-2">Authenticating...</h4>
      </div>
    </div>
  );
}
