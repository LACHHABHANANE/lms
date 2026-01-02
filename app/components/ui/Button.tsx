"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
    size?: "sm" | "md" | "lg";
    href?: string;
    fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className = "",
            variant = "primary",
            size = "md",
            href,
            fullWidth = false,
            children,
            ...props
        },
        ref
    ) => {
        // Base styles
        const baseStyles =
            "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

        // Variants
        const variants = {
            primary:
                "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/30 focus:ring-indigo-500",
            secondary:
                "bg-purple-100 text-purple-700 hover:bg-purple-200 focus:ring-purple-500",
            outline:
                "border-2 border-gray-200 text-gray-700 hover:border-indigo-600 hover:text-indigo-600 bg-transparent focus:ring-gray-500",
            ghost:
                "text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-500",
            white:
                "bg-white text-indigo-600 hover:bg-gray-50 shadow-md hover:shadow-lg focus:ring-white",
        };

        // Sizes
        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        // Full width
        const widthClass = fullWidth ? "w-full" : "";

        const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

        if (href) {
            return (
                <Link href={href} className={combinedClassName}>
                    {children}
                </Link>
            );
        }

        return (
            <button ref={ref} className={combinedClassName} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
