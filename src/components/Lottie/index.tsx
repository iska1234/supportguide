import React from 'react';
import Lottie from 'react-lottie';


type Props = {
	loop?: boolean;
	autoplay?: boolean;
	animationData: any;
	height?: string | number;
	width?: string | number;
}

const LottieComponent: React.FC<Props> = ({
	animationData, autoplay = true, height = 400, loop = true, width = 400
}) => {
	return (
		<Lottie
			width={width}
			height={height}
			isClickToPauseDisabled={true}
			options={{
				loop,
				autoplay,
				animationData,
				rendererSettings: {
					preserveAspectRatio: 'xMidYMid slice'
				}
			}}
		/>
	)
}

export default React.memo(LottieComponent);