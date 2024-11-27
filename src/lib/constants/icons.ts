import Eye from '../../assets/icons/eye.svg';
import EyeOff from '../../assets/icons/eye-off.svg';
import AlertIcon from '../../assets/icons/alertIcon.svg'
import LogOutBlue from '../../assets/icons/logOutBlue.svg';
import ChevronDownBlue from '../../assets/icons/chevronDownBlue.svg';
import ChevronRight from '../../assets/icons/chevron-right.svg'

const ICONS = {
	alertIcon: AlertIcon,
	eye: Eye,
	eyeOff: EyeOff,
	logOutBlue: LogOutBlue,
	chevronRight: ChevronRight,
	chevronDownBlue: ChevronDownBlue
}

export default ICONS;

type IconName = keyof typeof ICONS;

export type {
	IconName
}