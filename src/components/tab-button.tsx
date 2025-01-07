import classNames from "classnames";

type Props = {
  tab: string;
  activeTab: string;
  changeActiveTab: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function TabButton({ tab, activeTab, changeActiveTab }: Props) {
  return (
    <button
      key={tab}
      type="button"
      name={tab}
      onClick={changeActiveTab}
      className={classNames(
        "px-2.5 py-1 font-medium bg-transparent rounded-full focus:outline-none hover:text-charcoal text-secondaryCharcoal400 2xl:px-2 2xl:py-1 2xl:h-[26px]",
        tab === activeTab &&
          "bg-white border-secondarySand200 !text-charcoal hover:!text-secondaryCharcoal400"
      )}
    >
      <p className="text-inherit text-xs font-normal font-['Basis Grotesque Pro'] leading-[14px] 2xl:text-sm pt-0.5">
        {tab}
      </p>
    </button>
  );
}

export default TabButton;
