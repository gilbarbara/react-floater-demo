import React from "react";
import PropTypes from "prop-types";
import Floater from "react-floater";
import styled from "styled-components";

const Button = ({ innerRef, ...rest }: any) => <button ref={innerRef} {...rest} />;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.01);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
`;

export default class FloaterOverlay extends React.Component<any, any> {
	state = { open: false };

	static propTypes = {
		cb: PropTypes.func
	};

	callback = (action: any, props: any) => {
		let { cb } = this.props;

		cb(action, props);

		this.setState({
			open: action === "open"
		});
	};

	handleClick = () => {
		const { open } = this.state;

		this.setState({
			open: !open
		});
	};

	render() {
		const { open } = this.state;

		return (
			<div>
				<Floater
					callback={this.callback}
					content={
						<div>
							<p>I have an invisible overlay that will close the floater</p>
						</div>
					}
					open={open}
					placement="top"
					styles={{ options: { zIndex: 250 } }}
				>
					<Button onClick={this.handleClick}>Click me</Button>
				</Floater>
				{open && <Overlay onClick={this.handleClick} />}
			</div>
		);
	}
}
