<template>
    <div class="flex flex-col gap-5 mt-7">
        <img :src="modalDataProp.flickr_images[0]" class="max-w-full h-80" alt="..." />
        <div class="flex flex-col">
            <span class="font-bold">Rocket Name</span>
            <span>{{modalDataProp.rocket_name}}</span>
        </div>
        <div class="flex flex-col">
            <span class="font-bold">Company</span>
            <span>{{modalDataProp.company}}</span>
        </div>
        <div class="flex flex-col">
            <span class="font-bold">Details</span>
            <span>{{modalDataProp.description}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:['modalDataProp']
}
</script>