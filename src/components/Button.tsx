import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonSubmit = ({ children, ...rest }: ButtonProps) => (
    <button
        type="submit"
        className="inline-flex gap-[.5rem] items-center px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        {...rest}
    >
        {children}
    </button>
);

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ButtonLink = ({ children, ...rest }: ButtonLinkProps) => (
    <a
        className="inline-flex gap-[.5rem] items-center px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        {...rest}
    >
        {children}
    </a>
);
