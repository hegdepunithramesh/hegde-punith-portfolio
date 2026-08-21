import { Component } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

/**
 * ErrorBoundary Component — Phase 14
 * Top-level React error boundary preventing blank white screens on component runtime exceptions.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught React ErrorBoundary Exception:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-center items-center p-6 bg-noise">
          <Container size="narrow" className="text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold font-sans tracking-tight">System Encountered An Exception</h1>
            <p className="text-sm text-zinc-400 font-light max-w-md mx-auto leading-relaxed">
              An unexpected rendering exception occurred. Please refresh the page to restore normal operation.
            </p>
            <Button
              variant="primary"
              magnetic
              leftIcon={RefreshCw}
              onClick={this.handleReload}
            >
              RELOAD APPLICATION
            </Button>
          </Container>
        </main>
      );
    }

    return this.props.children;
  }
}
