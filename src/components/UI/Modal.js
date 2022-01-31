import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = ({toggleCartVisibility}) => {
	return <div onClick={toggleCartVisibility} className={styles.backdrop}></div>;
};

const ModalOverlay = ({ children }) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{children}</div>
		</div>
	);
};

const portalElement = document.getElementById('overlays');
export const Modal = ({ children, toggleCartVisibility }) => {
	return <>
  { ReactDOM.createPortal(<Backdrop toggleCartVisibility={toggleCartVisibility}  />, portalElement) }
  { ReactDOM.createPortal(<ModalOverlay children={children} />, portalElement) }
  </>;
};
