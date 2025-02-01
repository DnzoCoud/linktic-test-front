import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <div className="w-screen h-screen gap-4 p-2 flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 size-full ">
        <div className="col-span-1 size-full flex items-center justify-center">
          <div className="w-3/5">
            <LoginForm />
          </div>
        </div>
        <div className="col-span-1 bg-slate-700 h-full rounded-2xl"></div>
      </div>
    </div>
  );
}
