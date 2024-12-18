"use client";

import React, { ReactNode } from "react";

type ProviderProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProviderProps) => {
  return <>{children}</>;
};

export default Providers;
