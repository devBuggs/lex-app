import '../styles/globals.css';
import '../styles/editor.css';
import { Provider } from 'react-redux'
import { store } from '../utils/store';

export default function App({ Component, pageProps }) {
	return <Provider store={store}>
		<Component {...pageProps} />
	</Provider>
}
