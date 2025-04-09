<template>
    <div class="w-[90%] mx-auto">
        <div class="my-8">
        <h6 ref="Servicestitle"
            class="uppercase text-lg font-medium opacity-0 transition-all duration-700 ease-in-out"
            :class="{ 'opacity-100': myservicetitleVisible }">
            <span
                class="text-white inline-block tracking-[4px] leading-[20px] bg-[#0788FF33] rounded-[4px] px-3 py-1.5 transition-all duration-300 hover:scale-105">
                Services
            </span>
        </h6>

        <!-- "Recent Projects" Animation (Delayed) -->
        <h2 ref="Servicessubtitle"
            class="uppercase text-3xl md:text-4xl font-bold text-white mt-2 opacity-0 transition-all duration-700 ease-in-out delay-300"
            :class="{ 'opacity-100': myservicesubtitleVisible }">
            Design <span class="text-[#0788FF]">services</span> I am providing
        </h2>
    </div>
        <div ref="serviceCards" class="mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 lg-px-6">
            <div v-for="(service, index) in services" :key="index"
                class="relative rounded-2xl shadow-lg hover:shadow-xl opacity-0 transition-all duration-700 ease-in-out delay-300 overflow-hidden"
                :class="{
                'opacity-100 ': myserviceCardsVisible,
                'translate-x-[-50px]': !myserviceCardsVisible
                }">
                <img :src="service.image" alt="Service Image"
                    class="w-full object-cover rounded-t-2xl aspect-[14/9]">
                <h3 class="text-xl font-semibold text-white mt-4 mb-4 px-4">{{ service.title }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
// Reference elements
const Servicestitle = ref(null);
const Servicessubtitle = ref(null);
const serviceCards = ref(null);

// Custom composable to track visibility
const { isVisible: myservicetitleVisible } = useIntersectionObserver(Servicestitle);
const { isVisible: myservicesubtitleVisible } = useIntersectionObserver(Servicessubtitle);
const { isVisible: myserviceCardsVisible } = useIntersectionObserver(serviceCards);
const services = [
{ title: "Website Design", image: "/web-design.webp" },
{ title: "Shopify Development", image: "/e-commerce.webp" },
{ title: "Nuxt Development", image: "/nuxt.webp" },
{ title: "Tailwind CSS", image: "/tailwind.webp" }
];

</script>
