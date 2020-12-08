// libs
import useAuth from "@/hooks/useAuth";
import {
	ArrowRightOutlined,
	FacebookFilled,
	GoogleCircleFilled,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
// components
// others
import "./styles.scss";

const Login = () => {
	const { loginWithUsername, loginWithGoogle, loginWithFacebook } = useAuth();

	return (
		<div className="login-wrapper">
			<div className="login-wrapper-inner">
				<h1>Login</h1>
				<Form
					labelCol={{ span: 6 }}
					wrapperCol={{ span: 18 }}
					labelAlign="left"
					onFinish={({ username, password }) =>
						loginWithUsername({ username, password })
					}
				>
					<Form.Item
						label="Username"
						name="username"
						rules={[{ required: true, message: "Please input your username!" }]}
						hasFeedback
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Password"
						name="password"
						rules={[{ required: true, message: "Please input your password!" }]}
						hasFeedback
					>
						<Input.Password />
					</Form.Item>
					<Button type="primary" htmlType="submit" className="btn-login">
						Login
					</Button>
					<div className="btn-social">
						<Button
							type="primary"
							ghost
							icon={<FacebookFilled />}
							onClick={loginWithFacebook}
						>
							Login With Facebook
						</Button>
						<Button
							danger
							icon={<GoogleCircleFilled />}
							onClick={loginWithGoogle}
						>
							Login With Google
						</Button>
					</div>
					<div className="redirect">
						<div>Not have account yet? </div>
						<Link to="/register">
							<Button type="link" icon={<ArrowRightOutlined />}>
								Join us now!
							</Button>
						</Link>
					</div>
				</Form>
			</div>
		</div>
	);
};
export default Login;
