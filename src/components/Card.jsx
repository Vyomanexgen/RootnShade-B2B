export default function Card({
  title,
  value,
  subtitle,
  badge,
  badgeColor = "green",
  icon,
  action,
  highlight = false,
  valueType = "text", // "text" | "pill"
  button,
}) {
  return (
    <div
      className={`p-4 bg-white rounded-lg shadow-sm border flex items-center justify-between ${
        highlight ? "border-orange-400" : ""
      }`}
    >
      {/* Left Section (Title + Value + Subtitle) */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          {icon && <span className="text-gray-600">{icon}</span>}
          <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        </div>

        {value && (
          <p
            className={`mt-2 ${
              highlight ? "text-orange-600 text-xl font-bold" : "text-lg font-semibold"
            }`}
          >
            {value}
          </p>
        )}

        {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
      </div>

      {/* Right Section (Button) - Vertically Centered */}
      {button && (
        <div className="flex items-center">
          {button}
        </div>
      )}
    </div>
  );
}
