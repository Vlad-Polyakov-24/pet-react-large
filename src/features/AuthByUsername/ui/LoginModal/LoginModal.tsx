import { Suspense } from 'react';
import Modal from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import Loader from 'shared/ui/Loader/Loader';

type LoginModalProps = {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
};

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			lazy
		>
			<Suspense fallback={<Loader/>}>
				<LoginFormAsync/>
			</Suspense>
		</Modal>
	);
};

export default LoginModal;
