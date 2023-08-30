import MainLayout from "./layouts/MainLayout"
import { QueryClient, QueryClientProvider} from 'react-query'


const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout></MainLayout>
    </QueryClientProvider>
    
  )
}

export default App
