import React from "react";
import { Badge as OriginBadge } from "../../shadcn/badge";

type TProps = {};

export const Badge: React.FC<TProps> = ({}) => {
  return (
    <div className="mt-20 bg-red-900">
      <OriginBadge variant="destructive">Badge</OriginBadge>
    </div>
  );
};
