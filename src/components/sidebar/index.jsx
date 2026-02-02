import { useState } from "react";

const Sidebar = ({ onCompanySelect }) => {
  const [selectedCompany, setSelectedCompany] = useState(1);

  const navigationItems = [
    { id: 1, label: "Akfa" },
    { id: 2, label: "Engelberg" },
  ];

  const handleCompanyClick = (item) => {
    setSelectedCompany(item.id);
    onCompanySelect(item);
  };

  return (
    <aside className="w-72 border-r border-l border-[#E5E5E5] bg-white p-6 flex flex-col gap-6 sticky top-18 h-[calc(100vh-72px)]">
      <div>
        <h1 className="text-black text-base font-bold leading-normal">
          Каталог брендов
        </h1>
        <p className="text-[#333333] text-sm font-normal leading-normal">
          Выберите производителя
        </p>
      </div>

      <div className="space-y-2">
        {navigationItems.map((item) => {
          const isSelected = selectedCompany === item.id;

          return (
            <div
              key={item.id}
              onClick={() => handleCompanyClick(item)}
              className={`flex items-center justify-between px-3 py-2.5 cursor-pointer border transition-colors ${
                isSelected
                  ? "bg-neutral-100 border-neutral-300"
                  : "bg-white border-neutral-200 hover:bg-neutral-50"
              }`}
            >
              <span className="text-xs font-bold uppercase">{item.label}</span>
              {isSelected && (
                <span className="material-symbols-outlined text-base">
                  check
                </span>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
