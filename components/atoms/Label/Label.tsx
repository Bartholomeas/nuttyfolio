import React from 'react';

interface Props {
	children: string | React.ReactNode;
	forProp?: string;
}

const Label = ({ children, forProp }: Props) => {
	return (
		<label htmlFor={forProp} className='flex items-center w-full font-bold text-sm'>
			{children}
		</label>
	);
};

export default Label;
