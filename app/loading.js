import loader from "./components/things/loader";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <>
    <div className="flex  space-x-2 justify-center items-center bg-white h-screen dark:invert">
      <div className="h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-4 w-4 bg-black rounded-full animate-bounce"></div>
    </div>
    </>
  );
}
