"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/EmptyOrg";
import BoardList from "./_components/BoardList";

interface DashBoardPageProps {
  searchParams: {
    search?: string;
    favourites?: string;
  };
}

const DashBoardPage = ({ searchParams }: DashBoardPageProps) => {
  const { organization } = useOrganization();
  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </div>
  );
};

export default DashBoardPage;
