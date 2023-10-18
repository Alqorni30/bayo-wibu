import Link from "next/link";

const Header = ({ title, linkhref, linktitle }) => {
  return (
    <div className="p-4">
      <h1 className="text-white text-lg font-semibold">{title}</h1>
      {linkhref && linktitle ? (
        <Link href={linkhref} className="text-white underline">
          {linktitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
