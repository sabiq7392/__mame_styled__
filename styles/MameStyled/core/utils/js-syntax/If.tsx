import { ReactNode, ReactElement } from "react";

/**
 *  @example 
 *  <If is={!router.pathname.includes("auth")}>
 *    <LayoutMain>
 *      <Component {...pageProps} />
 *    </LayoutMain> 
 *  </If>
 */
export default function If({ is, children }: { is: any, children: ReactNode }): ReactElement | null {
  return is ? <>{children}</> : null;
}
