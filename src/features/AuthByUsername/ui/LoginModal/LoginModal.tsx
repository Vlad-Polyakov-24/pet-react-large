import styles from './LoginModal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

type LoginModalProps = {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
};

const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
	return (
		<Modal
			className={classNames('', {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
			lazy
		>
			<LoginForm/>
		</Modal>
	);
};

export default LoginModal;
