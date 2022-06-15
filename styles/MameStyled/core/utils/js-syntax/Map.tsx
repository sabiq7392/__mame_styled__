import { ReactElement } from "react";

interface PropsMap {
  data: any[],
  render: any,
}

/**
 * @example 
 * <Map 
 *  data={["sabiq", "reza", "nabil"]} 
 *  render={(name: string, index: number) => <button key={index}>{name}</button>} 
 * />
 */
export default function Map({ data, render }: PropsMap): ReactElement {
  return <>{data.map(render)}</>;
}
