import { Sheet } from "@mui/joy";
import { ReactNode } from "react";

const MainWrapper = ({ children }: {children: ReactNode}) => {
  return (
    <div className="text-main relative flex w-screen h-screen justify-center items-center z-50">
      <Sheet
        variant="outlined"
        className="flex justify-between p-5 w-5/6 h-5/6 rounded-2xl">
        {children}
      </Sheet>
    </div>
  );
};

export default MainWrapper;
