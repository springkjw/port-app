import React from "react";

import Navigator from "../module/navigation/Navigator";

export default function AppView() {
  return <Navigator onNavigationStateChange={() => {}} uriPrefix="/app" />;
}
