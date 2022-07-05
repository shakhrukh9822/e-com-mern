import { QueryClient as Client, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const QueryClient = ({ children }) => {
  const queryClient = new Client();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} position="bottom-right"/>
    </QueryClientProvider>
  );
};

export default QueryClient;
