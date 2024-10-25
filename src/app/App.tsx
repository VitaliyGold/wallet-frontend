import "./styles/index.less";
import { AppRouter } from "./router/AppRouter";
import { MainLayout } from "./layouts/main/MainLayout";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./providers";
import { DataLayout } from "./layouts/data/DataLayout";
import { ToastList } from "@/shared/ui";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<StoreProvider>
					<MainLayout>
						<DataLayout>
							<AppRouter />
						</DataLayout>
						<ToastList />
					</MainLayout>
				</StoreProvider>
			</BrowserRouter>
		</>
	);
};

export { App };
