// import React from "react";

// const DynamicPage = () => {
//   return (
//     <div>
//       <h1>Dynamic welcome</h1>
//     </div>
//   );
// };

// export default DynamicPage;

// import React, { Suspense } from "react";

// type Props = {
//   params: Promise<{ id: string }>;
// };

// async function ProductContent({ params }: Props) {
//   const { id } = await params;
//   return (
//     <div>
//       <h1>Product {id}</h1>
//     </div>
//   );
// }

// export default function DynamicPage({ params }: Props) {
//   return (
//     <Suspense fallback={<p>Loading content</p>}>
//       <ProductContent params={params} />
//     </Suspense>
//   );
// }

import React, { Suspense } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

async function ProductContent({ params }: Props) {
  const { id } = await params;
  return (
    <div>
      <h1>Product {id}</h1>
    </div>
  );
}

export default function DynamicPage({ params }: Props) {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <ProductContent params={params} />
    </Suspense>
  );
}
