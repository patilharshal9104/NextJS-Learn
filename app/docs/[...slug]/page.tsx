import React, { Suspense } from "react";

//@ts-ignore
const DynamicDocsPage = async ({ params }) => {
  const { slug } = await params;
  return (
    <div>
      <Suspense fallback={"AA raha hai"}>
        DynamicDocsPAge {slug.join("/")}
      </Suspense>
    </div>
  );
};

export default DynamicDocsPage;
