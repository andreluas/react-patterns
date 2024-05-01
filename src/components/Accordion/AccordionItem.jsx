import React, { createContext, useContext } from "react";

const AccordidonItemContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordidonItemContext);

  if (!ctx) {
    throw new Error(
      "AccordionItem-related components must be wrapped by <Accordion.Item>."
    );
  }

  return ctx;
}

export default function AccordionItem({ id, className, children }) {
  return (
    <AccordidonItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordidonItemContext.Provider>
  );
}
