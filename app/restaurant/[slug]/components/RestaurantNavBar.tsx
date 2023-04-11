import Link from "next/link";

export default function () {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href="/restaurant/milesstone-grill" className="mr-7">
        Overview
      </Link>
      <Link href="/restaurant/milesstone-grill/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
}
