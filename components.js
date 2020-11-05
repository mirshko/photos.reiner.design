import Link from "next/link";

export default {
  a: (props) => {
    const isExternal = props?.href && props?.href.startsWith("http");

    if (isExternal)
      return <a {...props} rel="noreferrer noopener" target="_blank" />;

    return (
      <Link href={props.href}>
        <a>{props.children}</a>
      </Link>
    );
  },
};
