import styles from "./index.module.css";
import { EventTitle } from "@/entities/Event/ui/EventTitle/index.jsx";
import { Information } from "@/entities/Event/ui/Information/index.jsx";
import { EventMap } from "@/entities/Event/ui/EventMap/index.jsx";

export function EventInformationBlock({ event }) {
  return (
    <div className={styles.container}>
      <div className={styles["info-container"]}>
        <div className={styles["info-basic-container"]}>
          <EventTitle
            className={styles.title}
            title={event !== undefined ? event.title : null}
            description={event !== undefined ? event.description : null}
          />
          <div className={styles["event-info-container"]}>
            <Information
              startAt={event !== undefined ? event.start_at : null}
              endAt={event !== undefined ? event.end_at : null}
              dressCode={event !== undefined ? event.dresscode : null}
              ageGroup={event !== undefined ? event.age_group : null}
              city={event !== undefined ? event.location.city : null}
              locationName={
                event !== undefined ? event.location.location_name : null
              }
              country={event !== undefined ? event.location.country : null}
            />
          </div>
          <EventMap
            latitude={event !== undefined ? event.location.coordinates.x : null}
            longitude={
              event !== undefined ? event.location.coordinates.y : null
            }
          />
        </div>
      </div>
    </div>
  );
}
