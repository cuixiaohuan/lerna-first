/* eslint-disable react/prop-types */
import React from "react";

import { Layout, Menu } from "antd";

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
	]),
];

const onClick = (e) => {
	console.log('click', e);
	window.open('/'+e.key, "_self")
};

const Main = (props) => {

	return (
		<Layout className="base-layout-box" style={{ minHeight: "100vh" }}>
			<p>slider组件</p>
			<Menu
				onClick={onClick}
				style={{
					width: 256,
				}}
				mode="vertical"
				items={items}
			/>
			<p>header组件</p>
			<Layout.Content className="layout-container">{props.children}</Layout.Content>

			<p>footer组件</p>

		</Layout>
	);
};

export default Main;
