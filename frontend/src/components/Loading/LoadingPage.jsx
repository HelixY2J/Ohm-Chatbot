import { Loader2Icon } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="mt-20 flex flex-1 items-center justify-center">
      <Loader2Icon className="animate-spin" />
    </div>
  );
};

export default LoadingPage;