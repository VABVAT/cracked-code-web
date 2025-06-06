import React, { useState, useEffect } from 'react';
import { Check, Star, ArrowRight, Smartphone, Zap, Shield, Users } from 'lucide-react';

const AppLandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(1);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pricingPlans = [
    {
      name: "OA only Plan",
      price: "₹1500",
      period: "/month",
      description: "Tested on all platforms (Hackerrank, googleMeet, Zoom etc.)",
      features: [
        "Invisible to screenshots and all streaming platforms (Zoom, Google-meet etc.)",
        "100% Undetected on any platform",
        "Undetected Screenshots",
        "40 Requests per day",
        "Access to o3-mini, Gpt4 and Web-search",
        "Multiple Screenshots in a single request"
      ],
      popular: false,
      gradient: "from-gray-900 to-black"
    },
    {
      name: "Interviews + OA",
      price: "₹3000",
      period: "/month",
      description: "For large organizations with advanced needs",
      features: [
        "Everything in OA plan",
        "Live-Transcription of interview",
        "Real-time Response to any coding question asked in interview",
        "15 hours of live transcription per month",
        "Access to Custom prompts and configurations",
        "Additional Access to deep-seek reasoning model"
      ],
      popular: false,
      gradient: "from-gray-800 to-gray-800"
    }
  ];

  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile First",
      description: "Designed specifically for mobile experiences with responsive design"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized performance ensuring smooth user experience"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description: "Enterprise-grade security to protect your data"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Work seamlessly with your team in real-time"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className={`relative z-50 p-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
            CrackedCode
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-yellow-400 transition-colors duration-300">Features</a>
            <a href="#pricing" className="hover:text-yellow-400 transition-colors duration-300">Pricing</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</a>
          </div>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105">
            Download for windows
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-20 pb-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className={`text-6xl md:text-8xl font-bold mb-8 transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <span className="bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent animate-pulse">
              Revolutionary
            </span>
            <br />
            <span className="text-white">App Experience</span>
          </h1>
          <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto transition-all duration-1500 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            Transform your workflow with our cutting-edge application designed for the modern world
          </p>
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1500 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-110 flex items-center gap-2 group">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-110">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-32 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-white/10"
              >
                <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Select the perfect plan that fits your needs and scale as you grow
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-4">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  plan.popular ? 'lg:scale-110 lg:-translate-y-4' : 'hover:scale-105 hover:-translate-y-2'
                }`}
                onMouseEnter={() => setActiveCard(index)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                )}
                
                <div className={`relative overflow-hidden rounded-3xl p-8 h-full ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black' 
                    : 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20'
                }`}>
                  <div className="relative z-10">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-black' : 'text-white'}`}>
                      {plan.name}
                    </h3>
                    <p className={`mb-6 ${plan.popular ? 'text-black/80' : 'text-gray-400'}`}>
                      {plan.description}
                    </p>
                    
                    <div className="mb-8">
                      <span className={`text-5xl font-bold ${plan.popular ? 'text-black' : 'text-white'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-lg ${plan.popular ? 'text-black/80' : 'text-gray-400'}`}>
                        {plan.period}
                      </span>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className={`w-5 h-5 ${plan.popular ? 'text-black' : 'text-yellow-400'}`} />
                          <span className={`${plan.popular ? 'text-black' : 'text-gray-300'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {plan.name !== "Interviews + OA" ? <button className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 ${
                      plan.popular
                        ? 'bg-black text-yellow-400 hover:bg-gray-900'
                        : 'bg-yellow-400 text-black hover:bg-yellow-300'
                    }`}>
                      Get Started
                    </button> : <button disabled className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 ${
                      plan.popular
                        ? 'bg-black text-yellow-400 hover:bg-gray-900'
                        : 'bg-gray-400 text-black'
                    }`}>
                      Coming Soon
                    </button>}
                  </div>

                  {/* Animated background elements */}
                  <div className={`absolute inset-0 opacity-20 ${
                    activeCard === index ? 'scale-110' : 'scale-100'
                  } transition-transform duration-500`}>
                    <div className={`absolute top-1/4 -right-10 w-20 h-20 bg-gradient-to-r ${plan.gradient} rounded-full blur-xl animate-pulse`}></div>
                    <div className={`absolute bottom-1/4 -left-10 w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-full blur-lg animate-pulse delay-1000`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-32 bg-gradient-to-t from-yellow-400/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of users who have already transformed their workflow with our app
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-yellow-400 text-black px-12 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-110 flex items-center gap-2 group">
              Download Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-110">
              Try Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
<footer className="relative z-10 px-6 py-12 border-t border-white/10">
  <div className="max-w-6xl mx-auto text-center">
    <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
      CrackedCode
    </div>
    <p className="text-gray-400 mb-6">© 2025 CrackedCode. All rights reserved.</p>
    <div className="flex flex-wrap justify-center gap-6">
      <a href="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Privacy</a>
      <a href="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Terms</a>
      <a href="/cancellation-refund" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Refund</a>
      <a href="/shipping-delivery" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Shipping</a>
      <a href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Support</a>
    </div>
  </div>
</footer>

    </div>
  );
};

export default AppLandingPage;