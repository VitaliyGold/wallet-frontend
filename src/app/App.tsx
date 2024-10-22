import "./styles/index.less";
import { AppRouter } from "./router/AppRouter";
import { MainLayout } from "./layouts/main/MainLayout";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./providers";
import { DataLayout } from "./layouts/data/DataLayout";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<StoreProvider>
					<MainLayout>
						<DataLayout>
							<AppRouter />
						</DataLayout>
					</MainLayout>
				</StoreProvider>
			</BrowserRouter>
		</>
	);
};

export { App };
