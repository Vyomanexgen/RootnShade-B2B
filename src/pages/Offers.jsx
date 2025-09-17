export default function Offers() {
  const offers = [
    { id: 1, title: "10% off on Electronics", desc: "Valid till Sept 30" },
    { id: 2, title: "Free Shipping", desc: "On orders above ₹5000" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Offers</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="p-4 bg-white shadow-sm rounded-lg border"
          >
            <h3 className="font-semibold">{offer.title}</h3>
            <p className="text-sm text-gray-600">{offer.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
