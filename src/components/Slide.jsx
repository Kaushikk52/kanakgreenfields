export default function Slide({ features, title }) {
  return (
    <div className="flex flex-col gap-8 px-4 py-12 items-center justify-center w-full">
      <h1 className="text-2xl md:text-4xl text-white text-center">
        {title}
      </h1>
      <div className="rounded-lg p-6 md:p-10 w-[90%] max-w-6xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 text-white">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center gap-3 hover:scale-105 rounded-lg p-4 transition"
          >
            <div>{feature.icon}</div>
            <p className="md:text-2xl font-medium w-28">{feature.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}