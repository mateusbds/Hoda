/* eslint-disable react/display-name */
import { NextComponentType } from "next";

import { WebPage, WebPageProps } from "../WebPage";

export interface WebPageHocProps {
  webPageProps: WebPageProps;
}

export function webPageHoc(
  Component: NextComponentType,
  props: WebPageHocProps
) {
  const { webPageProps } = props;

  return () => (
    <WebPage {...webPageProps}>
      <Component />
    </WebPage>
  );
}
