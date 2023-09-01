import * as React from "react";
import { clsx } from "clsx";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const Loader = ({ className: cln }: LoaderProps) => {
    return <div className={clsx("loader", cln)}></div>;
};

export default Loader;
