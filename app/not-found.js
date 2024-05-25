import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-12">
      <Image src="/assets/NotFoundImage.svg" height={700} width={700} className="w-full md:w-1/2" />
      <Link href="/" className="px-12 py-4 bg-zprimary-600 rounded-2xl">
        Return Home
      </Link>
    </div>
  );
}
