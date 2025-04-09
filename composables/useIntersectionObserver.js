import { ref, onMounted, onUnmounted } from "vue";

export function useIntersectionObserver(targetRef, options = { threshold: 0.3 }) {
  const isVisible = ref(false);
  let observer;

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {  // Delay effect ke liye
          isVisible.value = true;
        }, 200); // Adjust delay if needed
      } else {
        isVisible.value = false;
      }
    });
  };

  onMounted(() => {
    if (targetRef.value) {
      observer = new IntersectionObserver(callback, options);
      observer.observe(targetRef.value);
    }
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return { isVisible };
}
