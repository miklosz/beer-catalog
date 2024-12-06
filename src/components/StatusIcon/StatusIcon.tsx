import { Status } from "@prisma/client";

const StatusIcon = ({ statusId }: { statusId: Status['id']; }) => { 
  // when translations added, display status in selected lang from translations string
    return (
      <span
        className={`status-icon ${statusId}`}
      />
    );
}
  export default StatusIcon;
