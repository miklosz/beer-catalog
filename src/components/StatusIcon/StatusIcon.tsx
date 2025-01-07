import { Status } from "@prisma/client";

// when translations added, display status in selected lang from translations string
const statusMap: { [key in Status['id']]: string } = {
  1: "w planie",
  2: "w produkcji",
  3: "dostępne",
  4: "wypite",
};

const StatusIcon = ({ statusId }: { statusId: Status['id']; }) => { 
  // when translations added, display status in selected lang from translations string
    return (
      <span
        className={`status-icon status-${statusId}`}
      >{statusMap[statusId]}</span>
    );
}
  export default StatusIcon;
