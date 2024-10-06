import { FC } from "react";
import "./container.css";

interface IContainerProps {
	children: React.ReactNode;
}

export const Container: FC<IContainerProps> = ({ children }) => {
	return <div className='container'>{children}</div>;
};
