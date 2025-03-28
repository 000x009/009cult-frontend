import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import { APIProvider as GoogleMapAPIProvider } from "@vis.gl/react-google-maps";
import { appSettings } from "@/app/const/settings.js";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/api/queryClient.js";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { paypalOptions } from "@/app/const/paypalConfig.js";
import { SkeletonTheme } from "react-loading-skeleton";

export default function Root() {
  return (
    <ErrorBoundary>
      <SkeletonTheme baseColor={"#313131"} highlightColor={"#525252"}>
        <GoogleMapAPIProvider apiKey={appSettings.GOOGLE_MAP_API_KEY}>
          <QueryClientProvider client={queryClient}>
            <PayPalScriptProvider options={paypalOptions}>
              <App />
            </PayPalScriptProvider>
          </QueryClientProvider>
        </GoogleMapAPIProvider>
      </SkeletonTheme>
    </ErrorBoundary>
  );
}
