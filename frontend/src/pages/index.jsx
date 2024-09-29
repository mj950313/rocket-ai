import Header from "../components/layout/header";
import ChatUI from "../components/chatUI";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
        <ChatUI />
      </div>
    </>
  );
}
