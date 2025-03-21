import { ArrowUpDown, Globe, Bell, Shield } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <ArrowUpDown className="w-10 h-10 text-primary-end" />,
      title: "Real-time Conversions",
      description: "Convert between 160+ currencies with up-to-the-minute exchange rates.",
    },
    {
      icon: <Globe className="w-10 h-10 text-primary-end" />,
      title: "Global Coverage",
      description: "Support for major and exotic currencies from around the world.",
    },
    {
      icon: <Bell className="w-10 h-10 text-primary-end" />,
      title: "Rate Alerts",
      description: "Get notified when your favorite currency pairs hit your target rates.",
    },
    {
      icon: <Shield className="w-10 h-10 text-primary-end" />,
      title: "Secure & Private",
      description: "Your data stays on your device. No account required.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need for currency conversion and tracking in one simple app
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

