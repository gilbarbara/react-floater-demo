import React from "react";
import Floater from "react-floater";

export default class ControlledMode extends React.Component<any, any> {
	state = {
		open: false
	};

	handleClick = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		const { open } = this.state;
		const { cb } = this.props;

		return (
			<div>
				<Floater
					callback={cb}
					content={
						<div style={{ fontSize: 22, textAlign: "center" }}>
							I'm a controlled and centered tooltip.<br />
							My parent control my status
						</div>
					}
					footer={
						<footer
							style={{
								borderTop: "2px solid #f04",
								marginTop: 20,
								paddingTop: 20,
								textAlign: "right"
							}}
						>
							<button onClick={this.handleClick}>Close</button>
						</footer>
					}
					open={open}
					placement="center"
					styles={{
						floater: {
							maxWidth: 500,
							width: '100%'
						}
					}}
				/>
				<button onClick={this.handleClick}>Controlled floater</button>
			</div>
		);
	}
}
