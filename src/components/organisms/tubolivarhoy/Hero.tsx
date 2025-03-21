import Link from "@/components/atoms/Link"

export default function Hero() {
  return (
    <section id="app" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
                Currency Exchange
              </span>{" "}
              Made Simple
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Get real-time exchange rates, convert currencies, and track your favorite pairs all in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#download"
                className="bg-gradient-to-r from-primary-start to-primary-end text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity font-medium"
              >
                Download Now
              </Link>
              <Link
                href="#features"
                className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-start to-primary-end rounded-3xl blur-3xl opacity-20"></div>
              <img
                src="https://play-lh.googleusercontent.com/WVGgVbKPgYzu8J-6JMZqlDk5HIV7bByIDAmpgkUDrwvBgbfYtXQFHBgJLH80lLlZTKQ=w240-h480-rw"
                alt="Currency App Interface"
                width={300}
                height={600}
                className="relative z-10 mx-auto rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
