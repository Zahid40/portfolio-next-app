import React from "react";
import { Card, CardContent } from "@/components/ui/card";

function ReviewCard(props) {
  const { rdata } = props;
  return (
    <div className="p-1 mx-auto max-w-96">
    <Card className="bg-primary-800 border-none shadow-xl ">
      <CardContent className="flex aspect-[5/6] items-center justify-center p-6">
        <span className="text-2xl font-semibold">{rdata.name}</span>
      </CardContent>
    </Card>
    </div>

  );
}

export default ReviewCard;
