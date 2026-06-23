import type { ApolloError } from "@apollo/client";
import { logClientError } from "@/lib/diagnostics";
import { useEffect, useState } from "react";

type QueryErrorProps = {
  error: ApolloError;
  operationName: string;
};

const QueryError = ({ error, operationName }: QueryErrorProps) => {
  const [diagnosticId, setDiagnosticId] = useState("");
  const errorDetails = {
    message: error.message,
    networkError: error.networkError?.message,
    graphQLErrors: error.graphQLErrors.map(
      (graphqlError) => graphqlError.message,
    ),
    operationName,
    serverUrl: import.meta.env.VITE_SERVER_URL,
    online: navigator.onLine,
  };

  useEffect(() => {
    const payload = logClientError(error, {
      source: "apollo-query",
      operationName,
      graphqlUri: `${import.meta.env.VITE_SERVER_URL}/graphql`,
    });

    setDiagnosticId(payload.id);
  }, [error, operationName]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F4F4F4] px-4 py-10">
      <section className="w-full max-w-[720px] rounded-lg bg-white p-6 shadow-sm">
        <h1 className="text-[22px] font-semibold leading-7">
          Не удалось загрузить данные
        </h1>
        <p className="mt-3 break-words rounded bg-[#FFF1F1] px-3 py-2 font-mono text-[15px] leading-6 text-[#9F1D1D]">
          {error.message}
        </p>

        {diagnosticId && (
          <p className="mt-4 rounded bg-[#F4F4F4] px-3 py-2 font-mono text-[13px] text-[#333333]">
            Diagnostic ID: {diagnosticId}
          </p>
        )}

        <pre className="mt-4 max-h-[45vh] overflow-auto whitespace-pre-wrap break-words rounded bg-[#111111] p-3 text-left text-[12px] leading-5 text-white">
          {JSON.stringify(errorDetails, null, 2)}
        </pre>
      </section>
    </main>
  );
};

export { QueryError };
