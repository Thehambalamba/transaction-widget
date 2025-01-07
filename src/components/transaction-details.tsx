import { KnownUnits, TransactionStatus } from "../types/enums";
import type { Transaction } from "../types/transaction";
import Avalanche from "./icons/avalanche";
import Bitcoin from "./icons/bitcoin";
import Optimism from "./icons/optimism";
import Starknet from "./icons/starknet";
import SUI from "./icons/sui";
import StatusBadge from "./status-badge";
import { formatRelativeTime } from "../utils/date-utils";

type Props = Pick<
  Transaction,
  | "value"
  | "unit"
  | "receiver"
  | "sender"
  | "status"
  | "approvalProgress"
  | "timestamp"
> & { isPending: boolean };

function TransactionDetails({
  value,
  unit,
  receiver,
  sender,
  status,
  isPending,
  approvalProgress,
  timestamp,
}: Props) {
  const senderBadge = {
    [KnownUnits.AVAX]: <Avalanche />,
    [KnownUnits.BTC]: <Bitcoin />,
    [KnownUnits.OP]: <Optimism />,
    [KnownUnits.STR]: <Starknet />,
    [KnownUnits.SUI]: <SUI />,
  };

  const truncatedReciver = `${receiver.substring(0, 6)}...${receiver.slice(
    receiver.length - 3,
    receiver.length
  )}`;

  const splitApproval = approvalProgress.split("/");
  const approvedNumber = splitApproval[0];
  const neededNumber = splitApproval[1];
  const approvedWidth =
    (Number.parseInt(approvedNumber) / Number.parseInt(neededNumber)) * 166;
  const neededWidth = 166 - approvedWidth;

  return (
    <div
      className="w-full px-3 py-2 bg-white rounded-xl shadow-[0px_0px_4px_0px_rgba(232,221,209,0.40)] border-secondarySand100 flex flex-col gap-2 xl:px-5 2xl:py-3 "
      style={{ height: isPending ? "92px" : "70px" }}
    >
      <div className="flex justify-between min-h-[22px]">
        <div className="flex gap-1 wrap">
          <p className="text-secondaryCharcoal400 text-sm font-normal font-['Basis Grotesque Pro'] leading-[18px]">
            {status === TransactionStatus.Rejected && !isPending
              ? "Sending"
              : "Sent"}
          </p>

          <p className="text-sm font-normal font-['Basis Grotesque Pro'] leading-[18px]">
            {value} {unit}
          </p>
          <p className="text-secondaryCharcoal400 text-sm font-normal font-['Basis Grotesque Pro'] leading-[18px]">
            to
          </p>
          <p className="text-sm font-normal font-['Basis Grotesque Pro'] leading-[18px]">
            {truncatedReciver}
          </p>
        </div>
        {!isPending && <StatusBadge status={status} />}
      </div>
      <div className="flex gap-1 items-center">
        {senderBadge[unit as KnownUnits] || null}
        <p className="text-secondaryCharcoal300 text-xs font-normal font-['Basis Grotesque Pro'] leading-[14px] text-ellipsis overflow-hidden whitespace-nowrap break-keep">
          {sender}
        </p>
      </div>
      {isPending && (
        <div className="flex justify-between mt-1">
          <div className="flex gap-[5px] items-center h-3.5">
            <p className="text-secondaryCharcoal300 text-xs font-normal font-['Basis Grotesque Pro'] leading-[14px]">
              <span className="text-primaryBlueSky600">{approvedNumber}</span>/
              {neededNumber}
            </p>
            <div className="flex max-w-[166px]">
              <div
                className="h-1 bg-blueSky rounded-[5px]"
                style={{ width: `${approvedWidth}px` }}
              />
              <div
                className="h-1 bg-secondarySand200 rounded-[5px]"
                style={{ width: `${neededWidth}px` }}
              />
            </div>
          </div>
          <p className="text-secondaryCharcoal300 text-xs font-normal font-['Basis Grotesque Pro'] leading-[14px]">
            {formatRelativeTime(timestamp)}
          </p>
        </div>
      )}
    </div>
  );
}

export default TransactionDetails;
