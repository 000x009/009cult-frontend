import { LogoHeader } from "@/shared/ui/LogoHeader/index.jsx";
import styles from "./index.module.css";
import { EventImage } from "@/entities/Event/ui/EventImage/index.jsx";
import { Navigation } from "@/entities/Event/ui/Navigation/index.jsx";
import { CartItemsList } from "@/widgets/CartItemsList/index.jsx";
import { Total } from "@/entities/Cart/ui/Total/index.jsx";
import { Divider } from "@/shared/ui/Divider/index.jsx";
import { Page } from "@/pages/Page/index.jsx";
import { Main } from "@/shared/ui/Main/index.jsx";
import { useParams } from "react-router";
import { useOrder } from "@/entities/Cart/lib/hooks/useOrder";
import { Payment } from "@/widgets/Payment/index.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getStorageFileURL } from "@/shared/lib/helpers/getStorageFileURL.js";
import { useEvent } from "@/entities/Event/lib/hooks/useEvent.js";

export function CheckoutPage() {
  const { id, orderId } = useParams();
  const { data, isLoading, isFetching } = useOrder(orderId);
  const { data: eventData } = useEvent(id);

  return (
    <Page>
      <LogoHeader />
      <Main className={styles.main}>
        <div className={styles.image_container}>
          <EventImage
            imageSrc={
              eventData !== undefined &&
              getStorageFileURL(eventData.photo.bucket, eventData.photo.key)
            }
          />
        </div>
        <div className={styles.container}>
          <div className={styles.text__container}>
            <Navigation>checkout___</Navigation>
            <CartItemsList
              items={data?.order_items ?? []}
              isLoading={isLoading}
              isFetching={isFetching}
            />
            <div className={styles.total}>
              <Divider />
              <Total>{data?.total_amount_usd || <Skeleton width={20} />}</Total>
            </div>
          </div>
          <Payment orderId={orderId} />
        </div>
      </Main>
    </Page>
  );
}
