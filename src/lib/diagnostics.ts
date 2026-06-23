type ErrorContext = {
  source: string;
  operationName?: string;
  graphqlUri?: string;
  componentStack?: string;
};

type ErrorPayload = {
  id: string;
  message: string;
  name?: string;
  stack?: string;
  context: ErrorContext;
  runtime: {
    href: string;
    origin: string;
    userAgent: string;
    online: boolean;
    serverUrl?: string;
    timestamp: string;
  };
  extra?: Record<string, unknown>;
};

const createErrorId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

const normalizeError = (error: unknown) => {
  if (error instanceof Error) {
    return {
      message: error.message,
      name: error.name,
      stack: error.stack,
    };
  }

  if (typeof error === "string") {
    return {
      message: error,
    };
  }

  return {
    message: "Unknown client error",
    extra: { value: error },
  };
};

const getClientErrorLogUrl = () =>
  (import.meta.env.VITE_CLIENT_ERROR_LOG_URL as string | undefined) || "";

const sendClientError = (payload: ErrorPayload) => {
  const endpoint = getClientErrorLogUrl();

  if (!endpoint) return;

  const body = JSON.stringify(payload);

  try {
    if (navigator.sendBeacon) {
      const sent = navigator.sendBeacon(
        endpoint,
        new Blob([body], { type: "application/json" }),
      );

      if (sent) return;
    }

    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch((sendError: unknown) => {
      console.warn("[client-error-log] failed to send", sendError);
    });
  } catch (sendError) {
    console.warn("[client-error-log] failed to send", sendError);
  }
};

export const logClientError = (
  error: unknown,
  context: ErrorContext,
  extra?: Record<string, unknown>,
) => {
  const normalized = normalizeError(error);
  const payload: ErrorPayload = {
    id: createErrorId(),
    message: normalized.message,
    name: normalized.name,
    stack: normalized.stack,
    context,
    runtime: {
      href: window.location.href,
      origin: window.location.origin,
      userAgent: navigator.userAgent,
      online: navigator.onLine,
      serverUrl: import.meta.env.VITE_SERVER_URL as string | undefined,
      timestamp: new Date().toISOString(),
    },
    extra: {
      ...normalized.extra,
      ...extra,
    },
  };

  console.groupCollapsed(
    `[client-error] ${context.source}: ${payload.message} (${payload.id})`,
  );
  console.error(error);
  console.info(payload);
  console.groupEnd();

  sendClientError(payload);

  return payload;
};
