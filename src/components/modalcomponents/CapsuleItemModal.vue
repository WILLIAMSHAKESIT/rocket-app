<template>
    <div>
        <div class="flex flex-col gap-5 mt-7">
            <div class="flex flex-col">
                <span class="font-bold">Serial Number</span>
                <span>{{modalDataProp.capsule_serial}}</span>
            </div>
            <div class="flex flex-col">
                <span class="font-bold">Original Launch</span>
                <span>{{modalDataProp.original_launch}}</span>
            </div>
            <div class="flex flex-col">
                <span class="font-bold">Status</span>
                <span>{{modalDataProp.status}}</span>
            </div>
            <div class="flex flex-col">
                <span class="font-bold">Status</span>
                <span>{{modalDataProp.details}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['modalDataProp']    
}
</script>