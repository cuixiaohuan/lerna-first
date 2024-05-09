/* eslint-disable react/prop-types */
import React from "react";

import { useNavigate } from "react-router-dom";

import { Layout, Menu } from "antd";

const { Header, Footer, Sider, Content } = Layout;
/**
 * 将 如 /car/edit 路径 添加上子系统 路径 /cms/car/edit
 * 注意：如果是全局http://xxx.com/xxx 这种不能使用
 */
window.openPath = function (path) {
	if (path.indexOf("http") > -1) {
		window.open(path);
		return false;
	}
	const curPath = window.location.pathname;
	// 移除 开头为/ 或 配置错的路由，如：//xxx 这种
	const [systemName] = curPath.split("/")?.filter((u) => !!u);
	const fullPath = `/${systemName}${path}`;
	window.open(fullPath);
};


function getItem(label, key, children, type) {
	return {
		key,
		children,
		label,
		type,
	};
}
const items = [
	getItem('Navigation One', '', [
		getItem('P4', "p4"),
		getItem('P5', "p5"),
		getItem('P6', "p6"),
		getItem('P7', "p7"),
		getItem('P8', "p8"),
	]),
];


const headerStyle = {
	textAlign: 'center',
	color: '#fff',
	height: 64,
	paddingInline: 48,
	lineHeight: '64px',
	backgroundColor: '#5d85b5',
};

const contentStyle = {
	textAlign: 'center',
	minHeight: 120,
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#d5e4fd',
};

const footerStyle = {
	textAlign: 'center',
	color: '#fff',
	backgroundColor: '#4096ff',
};


const siderStyle = {
	textAlign: 'center',
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#7eaae8',
	width: "200px",
};

const Main = (props) => {
	const navigate = useNavigate();

	const onClick = (e) => {
		console.log('click', e);
		navigate('/' + e.key);

	};
	return (
		<Layout className="base-layout-box" style={{ minHeight: "100vh" }}>
			<Header style={headerStyle}>Header</Header>

			<Layout style={{ flexDirection: "row" }}>
				{/* <Sider width="25%" style={siderStyle}>
          Sider
        </Sider> */}
				<Menu
					width="25%"
					onClick={onClick}
					style={siderStyle}
					// mode="vertical"
					mode="inline"
					items={items}
				/>
				{/* <Content style={contentStyle}>Content</Content> */}

				<Content style={contentStyle} className="layout-container">{props.children}</Content>
			</Layout>


			<Footer style={footerStyle}>Footer</Footer>

		</Layout>
	);
};

export default Main;
