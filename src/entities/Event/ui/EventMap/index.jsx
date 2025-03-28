import { Map, Pin } from "@vis.gl/react-google-maps";
import { AdvancedMarker } from "@vis.gl/react-google-maps";
import cc from "@/shared/lib/helpers/cc.js";
import styles from "./index.module.css";
import { appSettings } from "@/app/const/settings.js";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function EventMap({
  className,
  longitude,
  latitude,
  address,
  ...restProps
}) {
  if (latitude === null || longitude === null) {
    return null;
  }

  return (
    <div className={cc(className, styles.container)} {...restProps}>
      {(
        <Map
          mapId={appSettings.GOOGLE_EVENT_MAP_ID}
          className={styles.map}
          defaultCenter={{
            lat: parseFloat(latitude),
            lng: parseFloat(longitude),
          }}
          defaultZoom={16}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          colorScheme={"DARK"}
          reuseMaps={true}
        >
          <AdvancedMarker
            position={{ lat: parseFloat(latitude), lng: parseFloat(longitude) }}
          >
            <Pin background={"#FE0000"} glyphColor={"#fff"} />
          </AdvancedMarker>
        </Map>
      ) || <Skeleton className={styles.map} />}
    </div>
  );
}
