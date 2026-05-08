import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/BlogDetail";
import About from "@/pages/About";
import AdminLogin from "@/pages/AdminLogin";
import AdminDashboard from "@/pages/AdminDashboard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BlogProvider } from "./contexts/BlogContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

// Protected route component
function ProtectedRoute({ component: Component }: { component: React.ComponentType }) {
  const { isAuthenticated } = useAuth();
  const [location] = useLocation();

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return <Component />;
}

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:id"} component={BlogDetail} />
      <Route path={"/about"} component={About} />
      <Route path={"/admin"} component={AdminLogin} />
      <Route path={"/admin/dashboard"}>
        {() => <ProtectedRoute component={AdminDashboard} />}
      </Route>
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <AuthProvider>
          <BlogProvider>
            <TooltipProvider>
              <Toaster />
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">
                  <Router />
                </main>
                <Footer />
              </div>
            </TooltipProvider>
          </BlogProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
