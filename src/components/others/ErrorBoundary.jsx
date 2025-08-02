import React, { Component } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';

class ErrorBoundary extends Component {
  state = { hasError: false, error: null, errorInfo: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Caught error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          {/* Main content */}
          <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl text-white max-w-lg w-full transform hover:scale-105 transition-transform duration-300">
            {/* Icon container */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <AlertTriangle size={40} className="text-white animate-bounce" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Bug size={14} className="text-yellow-900" />
                </div>
              </div>
            </div>

            {/* Error title */}
            <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Oops! Something Broke
            </h2>

            {/* Error message */}
            <div className="bg-black/20 rounded-xl p-4 mb-6 border border-red-500/30">
              <p className="text-red-300 text-sm font-mono leading-relaxed">
                {this.state.error?.message || 'An unexpected error occurred while rendering this component.'}
              </p>
            </div>

            {/* Helpful message */}
            <p className="text-gray-300 text-center mb-8 leading-relaxed">
              Don't worry! These things happen. Try refreshing the page or going back to the homepage.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.handleReload}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-0.5"
              >
                <RefreshCw size={18} />
                Reload Page
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5"
              >
                <Home size={18} />
                Go Home
              </button>
            </div>

            {/* Additional help text */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-gray-400 text-center">
                If this problem persists, please contact support with the error details above.
              </p>
            </div>
          </div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;