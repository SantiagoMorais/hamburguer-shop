import { CartProvider } from "./contexts/cartContext"
import { AppRoutes } from "./pages/appRoutes"

function App() {
  return (
    <>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </>
  )
}

export default App
