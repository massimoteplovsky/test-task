import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import './assets/styles/main.scss';
import App from './components/app';
import ArticleProvider from './context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ArticleProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ArticleProvider>
);
