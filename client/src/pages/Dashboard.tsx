import UserStore from "../../store/UserStore";

export default function Dashboard() {
  const { email, name } = UserStore((state: any) => ({ email: state.email, name: state.name }));
  console.log(email, name);

  return (
    <div>
      {email} {name}
    </div>
  );
}
