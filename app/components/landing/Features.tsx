import {
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  PhotoIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Real-time Messaging",
    description:
      "Instant message delivery with real-time updates and notifications.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Group Chats",
    description:
      "Create and manage group conversations with multiple participants.",
    icon: UserGroupIcon,
  },
  {
    name: "Image Sharing",
    description:
      "Share images and media files seamlessly in your conversations, with a focus on privacy and security.",
    icon: PhotoIcon,
  },
  {
    name: "Cross-Platform",
    description:
      "Access your messages from any device with our responsive design.",
    icon: GlobeAltIcon,
  },
];

const Features = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Everything you need to stay connected
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our platform provides all the essential tools for seamless
            communication
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="relative group">
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 hover:bg-indigo-50">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                        <feature.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {feature.name}
                    </h3>
                  </div>
                  <p className="mt-6 text-gray-500 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
