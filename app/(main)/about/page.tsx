import React from "react";
import Link from "next/link";
import Image from "next/image";
const AboutPage = () => {
  return (
    <div>
      <Link href={"/contact"}>go to contact</Link>

      <Image
        src="/image.svg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
};

export default AboutPage;
