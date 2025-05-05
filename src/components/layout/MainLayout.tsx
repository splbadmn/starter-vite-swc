import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="w-full bg-white dark:bg-gray-900">
      {children}
    </div>
  );
};

export default MainLayout;
