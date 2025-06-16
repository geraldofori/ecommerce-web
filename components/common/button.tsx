import React, { type ReactNode } from 'react';
import { cn } from '@/utils';
import Link from 'next/link';

interface ButtonVariants {
	variant: 'Solid' | 'Outline' | 'Ghost';
	action: string;
	className?: string;
	children?: ReactNode;
	link: string;
}

export const Button: React.FC<ButtonVariants> = ({
	variant,
	action,
	className,
	children,
	link,
}) => {
	const variantOpt = {
		Solid:
			'px-[1.97rem] py-[0.94rem] bg-darkOrange subtitle uppercase hover:bg-fadedOrange duration-300 text-pureWhite',
		Outline:
			'text-pureBlack px-[1.97rem] py-[0.94rem] border border-[1px] border-pureBlack hover:bg-pureBlack hover:text-pureWhite uppercase subtitle duration-300',
		Ghost:
			'text-pureBlack/50 hover:text-darkOrange subtitle duration-300 uppercase',
	};

	return (
		<Link href={link} className={cn(variantOpt[variant], className)}>
			{action}
			{` `}
			{children}
		</Link>
	);
};
