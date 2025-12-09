import React, { useMemo } from "react"
import Marquee from "../../components/mage-ui/container/marquee"
import CustomerCard from "./CustomerCard"

import Cus1 from "../assets/cusone.jpg"
import Cus2 from "../assets/custwo.jpg"
import Cus3 from "../assets/custhree.jpg"
import Cus4 from "../assets/cusfour.jpg"
import Cus5 from "../assets/cusfive.jpg"
import Cus6 from "../assets/cussix.jpg"
import Cus7 from "../assets/cusseven.jpg"
import Cus8 from "../assets/cuseigth.jpg"
import Cus9 from "../assets/cusnine.jpg"

export default function Homecustomers() {

    const customerFeedbackData = useMemo(() => [
        {
            id: 1,
            name: "Aisha Khan",
            role: "Small Business Owner",
            city: "Mumbai, IN",
            image: Cus1,
            rating: 5,
            description: "The checkout process is incredibly smooth and intuitive. My customers love the one-click purchase option! Integration with my inventory management was seamless. Highly recommend this platform for anyone serious about e-commerce."
        },
        {
            id: 2,
            name: "David Chen",
            role: "Software Developer",
            city: "Seattle, US",
            image: Cus2,
            rating: 4,
            description: "The mobile app experience is fantastic, very fast and clean design. The only small feedback is that filtering options could be more granular, but overall, it's a very robust and stable application."
        },
        {
            id: 3,
            name: "Maria Rodriguez",
            role: "University Student",
            city: "Madrid, ES",
            image: Cus3,
            rating: 5,
            description: "Customer support is top-notch! I had an issue with a delivery address, and the representative resolved it within minutes via live chat. The product catalog is easy to navigate, and the photos are high quality."
        },
        {
            id: 4,
            name: "Kenji Tanaka",
            role: "Retired Professor",
            city: "Tokyo, JP",
            image: Cus4,
            rating: 4,
            description: "I appreciate the security features and the variety of payment methods available. Tracking my order was simple and accurate. While the initial sign-up felt a little long, the rest of the experience has been excellent."
        }
    ], []);

    const additionalCustomerFeedbackData = useMemo(() => [
        {
            id: 5,
            name: "Lila Singh",
            role: "Freelance Designer",
            city: "Toronto, CA",
            image: Cus5,
            rating: 5,
            description: "The visual design of the site is stunning and highly accessible. Finding specific materials based on color and texture filters is incredibly fast. It feels premium and professional—my new favorite shopping destination!",
        },
        {
            id: 6,
            name: "Omar Hassan",
            role: "Logistics Manager",
            city: "Dubai, AE",
            image: Cus6,
            rating: 4,
            description: "Shipping speed is consistently reliable, and the real-time tracking map is a fantastic feature. I wish there was a bulk ordering option for registered businesses, but for individual purchases, the system is flawless.",
        },
        {
            id: 7,
            name: "Chloe Dubois",
            role: "High School Teacher",
            city: "Paris, FR",
            image: Cus7,
            rating: 5,
            description: "I love the personalized recommendations! They consistently introduce me to products I actually need, saving me time browsing. The whole interface is clutter-free and very easy on the eyes.",
        },
        {
            id: 8,
            name: "Ethan Walker",
            role: "Retired Engineer",
            city: "Sydney, AU",
            image: Cus8,
            rating: 3,
            description: "The product reviews section is very helpful and detailed. I had trouble initially locating my saved items list, as the icon was not prominent, but once I found it, the saving feature works perfectly.",
        },
        {
            id: 9,
            name: "Sofia Mendez",
            role: "Chef and Blogger",
            city: "Mexico City, MX",
            image: Cus9,
            rating: 5,
            description: "The product photography is exceptional, accurately representing quality and scale, which is crucial for my work. Mobile performance is snappy, and I can place orders even when working in a busy kitchen environment.",
        }
    ], []);

    return (
        <section className="py-20 space-y-6">
            <Marquee
                repeat={6}
                pauseOnHover
                className="h-[260px] overflow-hidden [--duration:30s] [--gap:2rem]"
            >
                {customerFeedbackData.map((item) => (
                    <CustomerCard key={item.id} data={item} />
                ))}
            </Marquee>
            <Marquee
                repeat={6}
                pauseOnHover
                reverse
                className="h-[260px] overflow-hidden [--duration:30s] [--gap:2rem]"
            >
                {additionalCustomerFeedbackData.map((item) => (
                    <CustomerCard key={item.id} data={item} />
                ))}
            </Marquee>

        </section>
    )
}
