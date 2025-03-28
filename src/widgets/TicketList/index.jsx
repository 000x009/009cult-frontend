import { TicketSelect } from "@/entities/Ticket/ui/TicketSelect/index.jsx";
import styles from "./index.module.css";
import { TicketSkeletonList } from "@/widgets/TicketSkeletonList/index.jsx";

export function TicketsList({
  tickets,
  onAddTicket,
  onRemoveTicket,
  isFetching,
  isLoading,
}) {
  return (
    <div className={styles.container}>
      {tickets.map((ticket) => (
        <TicketSelect
          key={ticket.id}
          ticket={ticket}
          onAddTicket={onAddTicket}
          onRemoveTicket={onRemoveTicket}
        />
      ))}
      {isFetching || isLoading ? <TicketSkeletonList /> : null}
    </div>
  );
}
