import { Component, type ErrorInfo, type ReactNode } from "react";
import { logClientError } from "@/lib/diagnostics";

type AppErrorBoundaryProps = {
  children: ReactNode;
};

type AppErrorBoundaryState = {
  error: Error | null;
  diagnosticId: string;
};

class AppErrorBoundary extends Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  state: AppErrorBoundaryState = {
    error: null,
    diagnosticId: "",
  };

  static getDerivedStateFromError(error: Error) {
    return { error, diagnosticId: "" };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const payload = logClientError(error, {
      source: "react-error-boundary",
      componentStack: errorInfo.componentStack ?? undefined,
    });

    this.setState({ diagnosticId: payload.id });
  }

  render() {
    if (this.state.error) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-[#F4F4F4] px-4 py-10">
          <section className="w-full max-w-[720px] rounded-lg bg-white p-6 shadow-sm">
            <h1 className="text-[22px] font-semibold leading-7">
              Произошла ошибка
            </h1>
            <p className="mt-3 break-words rounded bg-[#FFF1F1] px-3 py-2 font-mono text-[15px] leading-6 text-[#9F1D1D]">
              {this.state.error.message}
            </p>

            {this.state.diagnosticId && (
              <p className="mt-4 rounded bg-[#F4F4F4] px-3 py-2 font-mono text-[13px] text-[#333333]">
                Diagnostic ID: {this.state.diagnosticId}
              </p>
            )}

            {this.state.error.stack && (
              <pre className="mt-4 max-h-[45vh] overflow-auto whitespace-pre-wrap break-words rounded bg-[#111111] p-3 text-left text-[12px] leading-5 text-white">
                {this.state.error.stack}
              </pre>
            )}
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}

export { AppErrorBoundary };
