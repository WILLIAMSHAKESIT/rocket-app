<template>
    <div class="flex flex-col gap-5 mt-7">
        <div class="flex flex-col">
            <span class="font-bold">Flight Number</span>
            <span>{{modalDataProp.flight_number}}</span>
        </div>
        <div class="flex flex-col">
            <span class="font-bold">Launch Year</span>
            <span>{{modalDataProp.launch_year}}</span>
        </div>
        <div class="flex flex-col">
            <span class="font-bold">Mission Name</span>
            <span>{{modalDataProp.mission_name}}</span>
        </div>
        <div class="flex flex-col">
            <span class="font-bold">Details</span>
            <span>{{modalDataProp.details}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:['modalDataProp']    
}
</script>