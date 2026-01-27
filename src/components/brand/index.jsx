const Brand = ({ title = "Оконный Мастер" }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="text-primary">
        <svg
          className="w-8 h-8 text-black"
          fill="none"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            height="24"
            stroke="currentColor"
            strokeWidth="1.5"
            width="32"
            x="4"
            y="8"
          />
          <path
            d="M4 32V16L20 28L36 16V32"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path d="M20 8V28" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
};

export default Brand;
