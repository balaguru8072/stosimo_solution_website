"use client";

import { useEffect, useState } from "react";
import {
    TrendingUp,
    Smartphone,
    Users,
    Settings,
    Briefcase,
    BarChart3,
    Camera,
    Search,
    ArrowUpRight,
} from "lucide-react";
import SEO from "../../../components/SEO";

const API_URL =
    "https://stosimo-solution-backend1.onrender.com/api/services";

// ------------------------------------
// Icon Mapping
// ------------------------------------
const getIcon = (title = "") => {
    const t = title.toLowerCase();

    if (t.includes("web")) return TrendingUp;
    if (t.includes("app") || t.includes("mobile")) return Smartphone;
    if (t.includes("digital") || t.includes("marketing")) return Users;
    if (t.includes("ui") || t.includes("ux")) return Settings;
    if (t.includes("cctv")) return Camera;
    if (t.includes("technical")) return Briefcase;
    if (t.includes("data")) return BarChart3;
    if (t.includes("seo")) return Search;

    return TrendingUp;
};

// ------------------------------------
// Image Mapping
// ------------------------------------
const getImage = (title = "") => {
    const t = title.toLowerCase();

    if (t.includes("web")) {
        return "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop";
    }

    if (t.includes("app") || t.includes("mobile")) {
        return "https://images.pexels.com/photos/7151031/pexels-photo-7151031.jpeg";
    }

    if (t.includes("data") || t.includes("digital")) {
        return "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop";
    }

    if (t.includes("ui") || t.includes("ux")) {
        return "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop";
    }

    if (t.includes("cctv")) {
        return "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop";
    }

    if (t.includes("seo")) {
        return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop";
    }

    return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop";
};

export default function AllServicesSection() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // ------------------------------------
    // Fetch Services
    // ------------------------------------
    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error("Failed to fetch services");
                }

                const json = await response.json();

                setServices(json?.data || []);
            } catch (err) {
                console.error("Services API Error:", err);
                setError("Unable to load services.");
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    // ------------------------------------
    // Loading
    // ------------------------------------
    if (loading) {
        return (
            <section className="bg-[#eef4ff] py-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-lg text-gray-600">Loading services...</p>
                </div>
            </section>
        );
    }

    // ------------------------------------
    // Error
    // ------------------------------------
    if (error) {
        return (
            <section className="bg-[#eef4ff] py-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-lg text-red-500">{error}</p>
                </div>
            </section>
        );
    }

    // ------------------------------------
    // Main Section
    // ------------------------------------
    return (
        <>

            <style>
                {
                    `
                    .hover-blue-colur:hover {
                        background-color: #2563eb !important;
                    }
                    `
                }
            </style>
            <SEO
                title="Stosimo - Best IT Services & Solutions Company"
                description="Stosimo is a top IT services company offering Web Development, App Development, UI/UX Design & Digital Marketing. We provide world-class IT infrastructure solutions."
                keywords="IT services, web development, app development, ui ux design, stosimo"
                canonical="/services/ui-ux-design"
            />
            <section className="bg-[#eef4ff] py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, i) => {
                            const Icon = getIcon(service?.title);

                            return (
                                <div
                                    key={service?._id || i}
                                    className="
                                            group
                                            relative
                                            rounded-3xl
                                            p-6
                                            bg-white
                                            text-gray-900
                                            overflow-hidden
                                            cursor-pointer
                                            transition-all
                                            duration-300
                                            hover:-translate-y-2
                                            hover:shadow-2xl
                                            hover-blue-colur
                                            hover:text-white
                                            "
                                >
                                    {/* -------------------------------- */}
                                    {/* Top Row - Icon + Arrow */}
                                    {/* -------------------------------- */}
                                    <div className="flex justify-between items-start mb-10">
                                        {/* Icon Box */}
                                        <div
                                            className="
                      w-16 h-16
                      rounded-2xl
                      flex items-center justify-center
                      bg-[#eef4ff]
                      group-hover:bg-white/20
                      transition-all
                      duration-300
                    "
                                        >
                                            <Icon
                                                className="
                        w-8 h-8
                        text-[#2563eb]
                        group-hover:text-white
                        transition-colors
                        duration-300
                      "
                                            />
                                        </div>

                                        {/* Arrow */}
                                        <div
                                            className="
                      w-10 h-10
                      rounded-full
                      flex items-center justify-center
                      bg-[#f5f8ff]
                      group-hover:bg-white
                      transition-all
                      duration-300
                    "
                                        >
                                            <ArrowUpRight
                                                className="
                        w-5 h-5
                        text-[#2563eb]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                                            />
                                        </div>
                                    </div>

                                    {/* -------------------------------- */}
                                    {/* Service Title */}
                                    {/* -------------------------------- */}
                                    <h3
                                        className="
                    text-xl
                    font-bold
                    mb-6
                    leading-tight
                    text-gray-900
                    group-hover:text-white
                    transition-colors
                    duration-300
                  "
                                    >
                                        {service?.title}
                                    </h3>

                                    {/* -------------------------------- */}
                                    {/* Service Image */}
                                    {/* -------------------------------- */}
                                    <div className="rounded-2xl overflow-hidden h-48">
                                        <img
                                            src={getImage(service?.title)}
                                            alt={service?.title || "Service"}
                                            className="
                      w-full
                      h-full
                      object-cover
                      grayscale
                      group-hover:grayscale-0
                      group-hover:scale-105
                      transition-all
                      duration-500
                    "
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}