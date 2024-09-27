import React from "react";

function withQueryHandling<T, P = object>(WrappedComponent: React.FC<{ data: T } & P>) {
  return function QueryHandlingComponent({
    isLoading,
    error,
    LoadingComponent,
    ErrorComponent,
    data,
    ...rest
  }: {
    isLoading: boolean;
    error: Error | null;
    LoadingComponent: React.ReactElement;
    ErrorComponent: React.ReactElement;
    data: T | undefined;
  } & P) {
    if (isLoading) {
      return LoadingComponent;
    }

    if (error) {
      return ErrorComponent;
    }

    if (data) {
      return <WrappedComponent data={data} {...(rest as P)} />;
    }

    return null;
  };
}

export default withQueryHandling;
