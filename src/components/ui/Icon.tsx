import ICONS from '@/lib/constants/icons';
import React from 'react';


interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	name: keyof typeof ICONS;
}

const Icon: React.FC<IconProps> = ({name, ...props}) => {
	return (
		<img
			src={ICONS[name]}
			alt={`${name} icon`}
			{...props}
		/>
	)
}

export default React.memo(Icon);
