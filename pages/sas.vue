<template>
    <NuxtLayout name="sas">
        <div>
            <div class="mr-4 my-2">
                <UBadge color="gray" variant="outline">
                    <span> راهنما :
                        <i class="fa-solid fa-check-double text-green-400"></i>
                        تکمیل شده ، <i class="fa-solid fa-check text-blue-400"></i>
                        درحال انجام ، <i class="fa-solid fa-ban text-red-400"></i>
                        لغو شده</span>
                </UBadge>

            </div>
            <SasTodoBox :todos="todos" />
        </div>
    </NuxtLayout>
</template>

<script setup>
import axios from 'axios';
const { public: { BaseUrl } } = useRuntimeConfig();
let token = useCookie('token');
const todos = ref([]);

const GetWorks = async () => {
    try {
        const respons = await axios.get(BaseUrl + '/works', {
            headers: {
                'Authorization': 'Bearer ' + token.value
            }
        });
        console.log(respons.data)
        todos.value = respons.data
    } catch (err) {
        console.log(err)

    }
}
GetWorks();
</script>
