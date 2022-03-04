import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { ReactElement } from "react";

export type React$Node = JSX.Element | null;

interface UIKittenProviderProps {
  children: React$Node;
}
export function UIKittenProvider({
  children,
}: UIKittenProviderProps): React$Node {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        {children}
      </ApplicationProvider>
    </>
  );
}
