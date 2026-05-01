function Features() {
  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-10">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-2">Responsive</h3>
          <p>Works perfectly on mobile, tablet, and desktop</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-2">Fast</h3>
          <p>Optimized performance for smooth experience</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-2">Modern</h3>
          <p>Clean and minimal UI design approach</p>
        </div>
      </div>
    </div>
  );
}

export default Features;