import { ref } from 'vue';

export default function useApi() {
    const messages = ref([]);
    const isLoading = ref(false);

    async function fetchMessages() {
        try {
            isLoading.value = true;
            const res = await fetch(import.meta.env.VITE_OPENAI_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({messages: messages.value})
            });
            const data = await res.json();
            isLoading.value = false;
            messages.value.push(data.message);
        } catch (error) {
            isLoading.value = false;
            console.error('Error:', error);
        }
    }

    return { messages, isLoading, fetchMessages };
}
