import React from "react";
import { defaultColor } from "../colors";
import { Colors } from "@/interfaces/Colors";

interface IProps {
	colors?: Colors;
}

const Hair3Thumb = ({ colors = defaultColor }: IProps = {}) => {
	const [color1, color2, color3] = colors;
	return (
		<svg version="1.1" x="0px" y="0px" viewBox="0 0 182 182">
			<path
				d="m141.6 20.2v-10.1h-10.2v-10.1h-10.1-10.1-10.1-10.1-10.1-10.1v10.1h10.1 10.1v10.1 10.1 10.1 10.2 10.1 10.1h10.1 10.1v10.1 10.1h10.1v10.1 10.1 10.1 10.1h10.1v10.2h-10.1-10.1v10.1h10.1 10.1v10.1h-10.1-10.1-10.1-10.1v-10.1-10.1h10.1v-10.2-10.1-10.1h-10.1-10.1-10.1v10.1 10.1h10.1v10.2 10.1 10.1 10.1h10.1 10.1v10.1h10.1 10.1 10.1v-10.1h10.2v-10.1h10.1v-10.1-10.1-10.2-10.1-10.1-10.1-10.1-10.1h-10.1v10.1 10.1 10.1h-10.2v-10.1-10.1-10.1-10.1h10.2 10.1v-10.1-10.1-10.2-10.1-10.1z"
				fill="#eaeaea"
			/>
			<path d="m131.4 101.1v10.1h10.2v-10.1-10.1h-10.2z" fill="#b5b5b5" />
			<path d="m131.4 80.9h10.1v10.1h-10.1z" fill="#d8d8d8" />
			<path d="m131.4 70.8v10.1h10.2 10.1v-10.1h-10.1z" fill="#b5b5b5" />
			<path
				d="m111.2 111.2v10.1 10.1h-10.1v10.2h10.1 10.1 10.1v-10.2h-10.1v-10.1-10.1-10.1-10.1h-10.1v10.1z"
				fill="#b5b5b5"
			/>
			<path d="m101.1 91v10.1 10.1 10.1 10.1h10.1v-10.1-10.1-10.1-10.1-10.1h-10.1z" fill="#d8d8d8" />
			<path d="m91 171.9h-10.1v10.1h10.1 10.1v-10.1z" fill="#d8d8d8" />
			<path d="m91 151.7v10.1h10.1 10.1 10.1 10.1v-10.1h-10.1-10.1-10.1z" fill="#b5b5b5" />
			<path d="m91 141.6v10.1h10.1 10.1v-10.1h-10.1z" fill="#d8d8d8" />
			<path d="m101.1 91h-10.1v10.1 10.1h10.1v-10.1z" fill="#b5b5b5" />
			<path d="m101.1 80.9h-10.1-10.1v10.1h10.1 10.1z" fill="#eaeaea" />
			<path d="m80.9 80.9h10.1 10.1 10.1v-10.1h-10.1-10.1-10.1z" fill="#b5b5b5" />
			<path d="m70.8 171.9h10.1v10.1h-10.1z" fill="#b5b5b5" />
			<path
				d="m80.9 161.8v-10.1-10.1-10.2h-10.1v-10.1-10.1h10.1 10.1v-10.1-10.1h-10.1v-10.1-10.1h10.1v-10.1-10.1-10.2-10.1-10.1-10.1h-10.1-10.1v10.1h-10.1v10.1 10.1h-10.1v10.2 10.1 10.1 10.1 10.1h10.1v10.1 10.1 10.1 10.1 10.2 10.1h10.1v10.1 10.1h10.1z"
				fill="#d8d8d8"
			/>
			<path
				d="m70.8 151.7h-10.1v-10.1-10.2-10.1-10.1-10.1-10.1h-10.1v-10.1-10.1-10.1-10.1-10.2h10.1v-10.1-10.1h10.1v-10.1-10.1h-10.1v10.1h-10.1v10.1h-10.2v10.1h-10.1v10.1 10.2 10.1 10.1 10.1 10.1h10.1v10.1 10.1 10.1 10.1 10.2h10.2v10.1 10.1h10.1v10.1h10.1v-10.1z"
				fill="#b5b5b5"
			/>
			<path d="m40.4 111.2h-10.1v10.1 10.1h10.1v-10.1z" fill="#d8d8d8" />
			<path d="m40.4 101.1v-10.1h-10.1v10.1 10.1h10.1z" fill="#eaeaea" />
			<path
				d="m20.2 131.4v-10.1-10.1-10.1-10.1-10.1-10.1-10.1-10.1-10.2h10.1v-10.1-10.1h10.1v-10.1h10.2v-10.1h10.1 10.1 10.1 10.1 10.1 10.1 10.1 10.1v10.1h10.2v10.1h10.1v10.1 10.1h10.1v10.2 10.1 10.1 10.1 10.1h-10.1v-10.1h-10.1-10.2-10.1-10.1-10.1-10.1-10.1-10.1v10.1h-10.1v10.1 10.1 10.1 10.1 10.2h10.1v10.1 10.1h-10.1v10.1h-10.1-10.2-10.1v-10.1h-10.1v-10.1-10.1z"
				fill={color1}
			/>
			<path d="m151.7 60.7v10.1 10.1h10.1v-10.1-10.1z" fill={color2} />
			<path d="m111.2 40.4h10.1v10.1h-10.1z" fill={color2} />
			<path d="m101.1 60.7v10.1 10.1h10.1v-10.1-10.1-10.1h-10.1z" fill={color2} />
			<path d="m80.9 70.8v10.1h10.1v-10.1-10.1h-10.1z" fill={color2} />
			<path d="m80.9 20.2h10.1v10.1h-10.1z" fill={color2} />
			<path d="m70.8 50.6h10.1v10.1h-10.1z" fill={color2} />
			<path d="m60.7 60.7h10.1v10.1h-10.1z" fill={color2} />
			<path d="m60.7 20.2h10.1v-10.1-10.1h-10.1v10.1h-10.1v10.1 10.1h10.1z" fill={color2} />
			<path
				d="m50.6 131.4v-10.1-10.1-10.1-10.1h-10.2v10.1 10.1 10.1 10.1 10.2 10.1h10.2v10.1h-10.2v10.1h10.2 10.1v-10.1-10.1-10.1h-10.1z"
				fill={color2}
			/>
			<path d="m40.4 70.8h10.1v10.1h-10.1z" fill={color2} />
			<path d="m50.6 40.4v-10.1h-10.2v10.1 10.2h10.2z" fill={color2} />
			<path d="m50.6 50.6h10.1v10.1h-10.1z" fill="none" />
			<path d="m50.6 60.7h-10.2v10.1 10.1h10.2v-10.1z" fill="none" />
			<path d="m60.7 40.4h10.1v10.1h-10.1z" fill="none" />
			<g fill={color3}>
				<path d="m141.6 40.4v10.2 10.1h10.1v-10.1-10.2z" />
				<path d="m131.4 30.3h10.1v10.1h-10.1z" />
				<path d="m111.2 60.7v10.1 10.1h10.1v-10.1-10.1-10.1h-10.1z" />
				<path d="m91 70.8v10.1h10.1v-10.1-10.1-10.1h-10.1v10.1z" />
				<path d="m91 30.3h10.1v10.1h-10.1z" />
				<path d="m70.8 70.8h10.1v10.1h-10.1z" />
				<path d="m70.8 40.4v10.2h10.1 10.1v-10.2h-10.1z" />
				<path d="m70.8 20.2h10.1v10.1h-10.1z" />
				<path d="m60.7 50.6h10.1v10.1h-10.1z" />
				<path d="m60.7 30.3h10.1v10.1h-10.1z" />
				<path d="m50.6 70.8v10.1h10.1v-10.1-10.1h-10.1z" />
				<path d="m50.6 40.4h10.1v10.1h-10.1z" />
				<path d="m50.6 0h10.1v10.1h-10.1z" />
				<path d="m40.4 70.8v-10.1h10.2v-10.1h-10.2v-10.2-10.1h10.2v-10.1-10.1h-10.2v10.1h-10.1v10.1 10.1h-10.1v10.2 10.1 10.1 10.1 10.1 10.1 10.1 10.1 10.1 10.2 10.1 10.1h10.1v10.1h10.1v-10.1h10.2v-10.1h-10.2v-10.1-10.2-10.1-10.1-10.1-10.1h10.2v-10.1h-10.2z" />
			</g>
		</svg>
	);
};

export default Hair3Thumb;