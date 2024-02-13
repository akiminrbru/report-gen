import Header from "../Header/Header";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main>
				<div className="container">{children}</div>
			</main>
		</>
	);
};

export default Layout;
