import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import { Home, Disc, Folder, Triangle } from "react-feather";

const NavLink = ({ href, children }) => {
  const { pathname } = useRouter();

  const isActive = pathname === href;

  const cachedClassNames = classNames(
    "p-2",
    isActive ? "text-primary" : "text-gray"
  );

  return (
    <Link href={href}>
      <a className={cachedClassNames}>{children}</a>
    </Link>
  );
};

const Nav = () => {
  return (
    <nav className="cutout-bottom bg-black fixed inset-x-0 bottom-0 z-50">
      <div className="px-3 py-1 max-w-xl mx-auto flex justify-between">
        <NavLink href="/">
          <Home />
        </NavLink>

        <NavLink href="/portfolio">
          <Folder />
        </NavLink>

        <NavLink href="/experiments">
          <Triangle />
        </NavLink>

        <NavLink href="/vinyl">
          <Disc />
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
